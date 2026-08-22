/*
# Create demo_requests table (single-tenant, no auth)

1. New Tables
- `demo_requests`
- `id` (uuid, primary key)
- `full_name` (text, not null) — requester's full name
- `work_email` (text, not null) — requester's corporate email
- `organization` (text, not null) — company or government entity name
- `organization_type` (text, not null) — 'corporate' or 'government'
- `team_size` (text, not null) — estimated team size range
- `message` (text, nullable) — optional details about their needs
- `status` (text, not null, default 'new') — lead status: new, contacted, demoed, closed
- `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `demo_requests`.
- Allow anon + authenticated INSERT only (public can submit demo requests).
- No public SELECT, UPDATE, or DELETE — only server-side roles can read/manage leads.
*/

CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  work_email text NOT NULL,
  organization text NOT NULL,
  organization_type text NOT NULL DEFAULT 'corporate',
  team_size text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_demo_requests" ON demo_requests;
CREATE POLICY "anon_insert_demo_requests"
ON demo_requests FOR INSERT
TO anon, authenticated WITH CHECK (true);
