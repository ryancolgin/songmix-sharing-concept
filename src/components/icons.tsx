type IconProps = {
  className?: string;
};

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.2 6.2 17.8 17.8M17.8 6.2 6.2 17.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CellularIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 17 12" aria-hidden="true">
      <rect x="0" y="7.2" width="3" height="4.8" rx="0.6" />
      <rect x="4.6" y="4.8" width="3" height="7.2" rx="0.6" />
      <rect x="9.2" y="2.4" width="3" height="9.6" rx="0.6" />
      <rect x="13.8" y="0" width="3" height="12" rx="0.6" />
    </svg>
  );
}

export function WifiIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 12" aria-hidden="true">
      <path d="M8.05 9.55a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3Z" />
      <path
        d="M4.35 7.55a5.15 5.15 0 0 1 7.3 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M1.85 5.05a8.7 8.7 0 0 1 12.3 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M.15 2.7C2.15.95 4.95 0 8 0s5.85.95 7.85 2.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BatteryIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 27 13" aria-hidden="true">
      <rect
        x="0.6"
        y="0.6"
        width="22.2"
        height="11.8"
        rx="3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.45"
      />
      <rect x="2.1" y="2.1" width="19.2" height="8.8" rx="1.6" />
      <path d="M24.4 4.3v4.4c1-.55 1.7-1.45 1.7-2.2s-.7-1.65-1.7-2.2Z" opacity="0.45" />
    </svg>
  );
}

export function SpotifyGlyph({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.9 10.55c-2.95-1.75-7.82-1.91-10.64-1.05-.43.13-.88-.11-1.01-.54-.13-.42.11-.87.54-1 3.22-.98 8.57-.79 11.96 1.22.39.23.52.74.29 1.13-.23.39-.74.52-1.14.24Zm-.15 2.55c-.2.32-.62.42-.94.23-2.45-1.51-6.19-1.94-9.09-1.06-.35.11-.72-.09-.83-.44-.11-.35.09-.72.44-.83 3.32-1.01 7.45-.52 10.27 1.22.32.19.42.61.15.88Zm-1.07 2.45c-.16.26-.5.34-.76.19-2.14-1.31-4.84-1.6-8.02-.88-.3.07-.6-.12-.67-.41-.07-.3.12-.6.41-.67 3.47-.79 6.44-.45 8.85 1.01.26.16.34.5.19.76Z"
      />
    </svg>
  );
}

export function AppleMusicGlyph({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.4 5.15v9.05a2.72 2.72 0 1 1-1.55-2.45V7.55l-6.15 1.28v6.95a2.72 2.72 0 1 1-1.55-2.45V8.35l9.25-1.95v-.25Z"
      />
    </svg>
  );
}

export function AmazonGlyph({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <text
        x="12"
        y="11.4"
        textAnchor="middle"
        fill="currentColor"
        fontSize="6.7"
        fontWeight="800"
        fontFamily="-apple-system, BlinkMacSystemFont, system-ui, sans-serif"
        letterSpacing="-0.08em"
      >
        music
      </text>
      <path
        d="M6.1 15.6c2.1 1.35 4 1.9 5.9 1.9 1.7 0 3.1-.7 5.2-2.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
      />
      <path
        d="m15.8 14.5 1.8.9-1.5 1.15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TidalGlyph({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4.6" y="8.2" width="2.3" height="7.6" rx="1.15" fill="currentColor" />
      <rect x="8.7" y="5.2" width="2.3" height="13.6" rx="1.15" fill="currentColor" />
      <rect x="12.8" y="7" width="2.3" height="10" rx="1.15" fill="currentColor" />
      <rect x="16.9" y="9.2" width="2.3" height="5.6" rx="1.15" fill="currentColor" />
    </svg>
  );
}

export function DeezerGlyph({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 20.2s-6.7-4.15-8.6-8.35C1.9 8.7 3.05 5.4 6.3 5.05c1.85-.2 3.35.75 4.15 2.05.8-1.3 2.3-2.25 4.15-2.05 3.25.35 4.4 3.65 2.9 6.8-1.9 4.2-8.5 8.35-8.5 8.35Z"
      />
    </svg>
  );
}

export function XGlyph({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.55 3.8h2.95l-6.45 7.38 7.6 10.02h-3.15l-4.15-5.55-4.7 5.55H3.7l6.9-7.9L3.35 3.8h3.25l3.75 5.05 4.2-5.05Zm1.05 15.7h1.65L8.15 5.35H6.4l9.2 14.15Z"
      />
    </svg>
  );
}

export function InstagramGlyph({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.7" cy="7.4" r="1" />
    </svg>
  );
}

export function SnapchatGlyph({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 3.2c-2.55 0-4.35 1.85-4.35 4.55 0 .55-.05 1.15-.15 1.7-.15.1-1.35.35-1.7.85-.2.3-.1.6.15.75.55.3 1.25.25 1.7.55.1.55.35 1.55.35 1.7.25.15.7-.05 1.15-.35.4.85.95 1.85 2.85 1.85s2.45-1 2.85-1.85c.45.3.9.5 1.15.35 0-.15.25-1.15.35-1.7.45-.3 1.15-.25 1.7-.55.25-.15.35-.45.15-.75-.35-.5-1.55-.75-1.7-.85-.1-.55-.15-1.15-.15-1.7 0-2.7-1.8-4.55-4.35-4.55Z"
      />
    </svg>
  );
}

export function MessagesGlyph({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 4.2c-4.7 0-8.2 3.05-8.2 6.85 0 2.15 1.2 4.1 3.15 5.35-.15.7-.55 1.85-1.55 2.7 1.7.1 3.15-.55 4-.95.85.25 1.7.4 2.6.4 4.7 0 8.2-3.05 8.2-6.85S16.7 4.2 12 4.2Z"
      />
    </svg>
  );
}

export function LinkGlyph({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M10.1 13.9a3.2 3.2 0 0 0 4.55.05l2.15-2.15a3.2 3.2 0 0 0-4.52-4.52l-1.23 1.22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13.9 10.1a3.2 3.2 0 0 0-4.55-.05L7.2 12.2a3.2 3.2 0 0 0 4.52 4.52l1.2-1.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14.5 5.5 8 12l6.5 6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShareIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 15.2V3.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.1 7.2 12 3.4l3.9 3.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.8 10.4h-.2A1.8 1.8 0 0 0 4.8 12.2v6.2A1.8 1.8 0 0 0 6.6 20.2h10.8a1.8 1.8 0 0 0 1.8-1.8v-6.2a1.8 1.8 0 0 0-1.8-1.8h-.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function VerifiedIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="#0A84FF" />
      <path
        d="M4.7 8.15 6.9 10.35 11.35 5.7"
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EllipsisIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="5.5" r="1.45" />
      <circle cx="12" cy="12" r="1.45" />
      <circle cx="12" cy="18.5" r="1.45" />
    </svg>
  );
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.4 3.35a.8.8 0 0 0-.8 0l-7.2 5.05a.8.8 0 0 0-.35.66V19.2c0 .72.58 1.3 1.3 1.3H9.2a.7.7 0 0 0 .7-.7v-4.6c0-.39.31-.7.7-.7h2.8c.39 0 .7.31.7.7v4.6c0 .39.31.7.7.7h3.85c.72 0 1.3-.58 1.3-1.3V9.06a.8.8 0 0 0-.35-.66l-7.2-5.05Z"
      />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15.8 15.8 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function LibraryIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="6.5" width="13" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8.5 6.2V4.8A1.8 1.8 0 0 1 10.3 3h8.2A1.8 1.8 0 0 1 20.3 4.8v9.2a1.8 1.8 0 0 1-1.8 1.8h-1.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ProfileIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8.2" r="3.3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5.2 19.2c1.3-3 3.7-4.4 6.8-4.4s5.5 1.4 6.8 4.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoreGlyph({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="6.2" cy="12" r="1.55" />
      <circle cx="12" cy="12" r="1.55" />
      <circle cx="17.8" cy="12" r="1.55" />
    </svg>
  );
}
