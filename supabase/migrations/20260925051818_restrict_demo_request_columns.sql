-- The browser may supply only the fields in the public inquiry form. IDs,
-- timestamps, and workflow status must come from database defaults.
revoke insert on table public.demo_requests from anon, authenticated;
grant insert (full_name, work_email, organization, organization_type, team_size, message)
  on table public.demo_requests to anon, authenticated;
