/*
  Kayan use-case requests.

  Public browser clients may submit a request, but cannot read, update, or
  delete rows. Administrative access must use a trusted server-side role.
*/

create table if not exists public.demo_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null check (char_length(full_name) between 2 and 120),
  work_email text not null check (
    char_length(work_email) <= 254
    and work_email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
  ),
  organization text not null check (char_length(organization) between 2 and 160),
  organization_type text not null default 'corporate'
    check (organization_type in ('corporate', 'government')),
  team_size text not null check (char_length(team_size) between 1 and 50),
  message text check (message is null or char_length(message) <= 2000),
  status text not null default 'new'
    check (status in ('new', 'contacted', 'qualified', 'closed')),
  created_at timestamptz not null default now()
);

comment on table public.demo_requests is
  'Use-case requests submitted through the Kayan concept website.';

alter table public.demo_requests enable row level security;
alter table public.demo_requests force row level security;

revoke all on table public.demo_requests from anon, authenticated;
grant insert on table public.demo_requests to anon, authenticated;

drop policy if exists "anon_insert_demo_requests" on public.demo_requests;
drop policy if exists "public_can_submit_use_case" on public.demo_requests;

create policy "public_can_submit_use_case"
on public.demo_requests
for insert
to anon, authenticated
with check (
  status = 'new'
  and char_length(full_name) between 2 and 120
  and char_length(work_email) <= 254
  and char_length(organization) between 2 and 160
  and organization_type in ('corporate', 'government')
  and char_length(team_size) between 1 and 50
  and (message is null or char_length(message) <= 2000)
);

create index if not exists demo_requests_created_at_idx
  on public.demo_requests (created_at desc);
create index if not exists demo_requests_status_idx
  on public.demo_requests (status, created_at desc);
create index if not exists demo_requests_email_created_at_idx
  on public.demo_requests (lower(work_email), created_at desc);

create or replace function public.enforce_demo_request_rate_limit()
returns trigger
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
begin
  if exists (
    select 1
    from public.demo_requests
    where lower(work_email) = lower(new.work_email)
      and created_at > now() - interval '15 minutes'
  ) then
    raise exception 'Please wait before submitting another request.';
  end if;

  return new;
end;
$$;

revoke all on function public.enforce_demo_request_rate_limit() from public, anon, authenticated;

drop trigger if exists demo_requests_rate_limit on public.demo_requests;
create trigger demo_requests_rate_limit
before insert on public.demo_requests
for each row execute function public.enforce_demo_request_rate_limit();
