export const MIX = {
  title: "HOUSE MUSIC 2026",
  creator: "Trey96",
  creatorAvatar: "/art/avatar-trey.jpg",
  meta: "150 Songs • 12h 15m",
  open: "Open this Mix on your music service",
  more: "+147 more",
} as const;

export const TRACKS = [
  {
    title: "Dance Dance Dance!",
    artist: "Cascada",
    avatar: "/art/avatar-cascada.jpg",
  },
  {
    title: "Boston",
    artist: "Alex Warren",
    avatar: "/art/avatar-alex.jpg",
  },
  {
    title: "Giving U",
    artist: "FJORA",
    avatar: "/art/avatar-fjora.jpg",
  },
] as const;

export const SHARE_STYLES = [
  { id: "artwork", label: "Artwork" },
  { id: "atmosphere", label: "Atmosphere" },
  { id: "tracklist", label: "Tracklist" },
  { id: "minimal", label: "Minimal" },
] as const;

export type ShareStyle = (typeof SHARE_STYLES)[number]["id"];

export const DESTINATIONS = [
  { id: "link", label: "Copy Link" },
  { id: "instagram", label: "Instagram" },
  { id: "snapchat", label: "Snapchat" },
  { id: "messages", label: "Messages" },
  { id: "x", label: "X" },
] as const;

export type DestinationId = (typeof DESTINATIONS)[number]["id"];
