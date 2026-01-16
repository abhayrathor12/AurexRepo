/*
  # Aurex Ventures Website Schema

  1. New Tables
    - `events`
      - `id` (uuid, primary key)
      - `title` (text) - Event name
      - `description` (text) - Event details
      - `event_date` (date) - When the event occurs
      - `location` (text) - Event venue
      - `event_type` (text) - 'upcoming' or 'previous'
      - `image_url` (text, optional) - Event image
      - `created_at` (timestamptz) - Record creation time
      
    - `team_members`
      - `id` (uuid, primary key)
      - `name` (text) - Team member name
      - `title` (text) - Job title/role
      - `bio` (text, optional) - Biography
      - `image_url` (text, optional) - Profile image
      - `display_order` (integer) - Order to display members
      - `created_at` (timestamptz) - Record creation time

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access (website is public)
    - Restrict write access to authenticated users only
*/

CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  event_date date NOT NULL,
  location text NOT NULL,
  event_type text NOT NULL DEFAULT 'upcoming',
  image_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  title text NOT NULL,
  bio text,
  image_url text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Events are publicly readable"
  ON events
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Team members are publicly readable"
  ON team_members
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can insert events"
  ON events
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update events"
  ON events
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete events"
  ON events
  FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert team members"
  ON team_members
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update team members"
  ON team_members
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete team members"
  ON team_members
  FOR DELETE
  TO authenticated
  USING (true);