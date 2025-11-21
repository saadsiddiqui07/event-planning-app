export type Profiles = {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
};

export type Events = {
  id: string;
  host_id: string;
  title: string;
  description: string | null;
  cover_url: string | null;
  start_time: string;
  end_time: string | null;
  location: string | null;
  visibility: "public" | "private";
  created_at: string;
};

export type Rsvps = {
  id: string;
  event_id: string;
  user_id: string;
  status: "going" | "not_going" | "maybe" | "invited";
  created_at: string;
};

export type Polls = {
  id: string;
  event_id: string;
  question: string;
  type: "single_choice" | "multiple_choice";
  options: string[]; // Array of choice texts
  created_at: string;
};

export type PollResponses = {
  id: string;
  poll_id: string;
  user_id: string;
  selected_options: string[]; // array of option IDs / texts
  created_at: string;
};

export type Messages = {
  id: string;
  event_id: string;
  user_id: string;
  content: string;
  created_at: string;
};

export type Photos = {
  id: string;
  event_id: string;
  user_id: string;
  photo_url: string;
  created_at: string;
};

export type Activity = {
  id: string;
  event_id: string;
  user_id: string | null;
  type:
    | "user_joined"
    | "user_left"
    | "event_updated"
    | "poll_created"
    | "rsvp_updated"
    | "message_sent"
    | "photo_uploaded";
  message: string | null;
  created_at: string;
};
