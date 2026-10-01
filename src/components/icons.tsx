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
      <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function InstagramGlyph({ className }: IconProps) {
  return (
    <svg className={className} viewBox="-13.2 -13.2 176.5 176.5" aria-hidden="true">
      <path fill="currentColor" fillRule="evenodd" d="M39.00 148.85 C31.23 148.16 25.18 146.40 20.32 143.39 C15.10 140.16 8.85 133.54 6.27 128.50 C1.12 118.48 0.77 115.71 0.27 80.94 C-0.42 32.74 1.05 24.86 12.95 12.95 C24.67 1.23 34.05 -0.48 82.46 0.27 C114.81 0.78 121.28 1.63 129.54 6.47 C138.10 11.49 145.27 21.73 148.11 33.00 C150.00 40.49 150.11 108.91 148.24 116.82 C143.84 135.51 130.60 146.66 110.00 149.03 C100.22 150.16 52.58 150.03 39.00 148.85 Z M101.50 136.11 C116.35 135.22 122.00 133.34 128.30 127.20 C131.06 124.51 132.64 121.69 134.11 116.85 C136.01 110.60 136.11 107.98 135.82 72.85 C135.50 35.94 135.47 35.44 133.11 30.21 C130.32 24.03 123.77 17.84 118.31 16.23 C107.81 13.12 72.93 12.00 47.68 13.97 C28.97 15.42 21.71 19.30 16.92 30.38 C13.80 37.63 12.84 55.47 13.84 88.00 C14.60 112.50 14.83 114.90 16.97 119.79 C19.73 126.11 26.14 132.09 32.19 134.01 C39.60 136.36 78.02 137.52 101.50 136.11 Z M61.91 111.16 C51.01 106.78 42.88 98.64 38.95 88.15 C37.23 83.57 36.90 80.80 37.17 73.47 C37.45 65.70 37.95 63.53 40.75 57.85 C44.60 50.03 50.88 43.88 58.82 40.16 C63.84 37.81 65.72 37.50 75.00 37.50 C84.31 37.50 86.15 37.81 91.24 40.19 C98.55 43.62 105.81 50.87 109.56 58.51 C112.25 63.98 112.50 65.41 112.50 75.00 C112.50 84.31 112.19 86.15 109.81 91.24 C106.38 98.57 98.56 106.38 91.24 109.81 C86.48 112.03 83.87 112.53 76.00 112.74 C68.65 112.94 65.46 112.58 61.91 111.16 Z M83.50 98.34 C92.75 95.19 100.00 84.91 100.00 74.95 C100.00 70.19 97.63 63.52 94.48 59.38 C93.10 57.57 89.10 54.70 85.52 52.93 C80.06 50.25 78.22 49.82 73.77 50.20 C51.59 52.08 42.35 77.35 58.09 93.09 C64.51 99.51 74.20 101.51 83.50 98.34 Z M111.31 42.99 C110.10 42.50 108.36 40.96 107.45 39.56 C105.37 36.39 106.16 31.07 109.10 28.41 C111.79 25.98 118.17 25.94 120.83 28.35 C125.23 32.32 124.21 39.80 118.91 42.55 C115.75 44.18 114.46 44.26 111.31 42.99 Z" />
    </svg>
  );
}

export function SnapchatGlyph({ className }: IconProps) {
  return (
    <svg className={className} viewBox="-8.25 -8.25 165.5 165.5" aria-hidden="true">
      <path fill="currentColor" d="M65.50 143.60 C63.30 142.90 57.98 140.02 53.67 137.19 C49.36 134.37 44.41 131.80 42.67 131.48 C40.93 131.16 35.71 131.04 31.07 131.20 L22.64 131.50 L21.52 127.00 C20.42 122.54 20.36 122.49 15.40 121.88 C5.26 120.63 -2.21 115.37 0.87 111.65 C1.44 110.96 4.16 109.82 6.90 109.12 C16.38 106.69 26.06 97.81 31.97 86.10 C35.05 80.00 33.88 77.79 26.06 74.94 C20.07 72.76 15.00 69.12 15.00 67.00 C15.00 66.40 16.15 64.76 17.56 63.35 C19.71 61.20 20.70 60.90 23.81 61.44 C25.84 61.79 29.07 62.32 31.00 62.62 L34.50 63.16 L34.50 48.33 C34.50 34.36 34.65 33.17 37.16 27.82 C43.94 13.36 57.63 4.98 74.43 5.01 C91.87 5.04 105.52 13.18 112.71 27.82 C115.40 33.30 115.50 34.02 115.39 48.34 L115.29 63.19 L118.89 62.60 C131.11 60.63 130.53 60.59 132.84 63.52 C134.03 65.03 135.00 66.68 135.00 67.18 C135.00 69.13 129.72 72.83 123.94 74.94 C115.81 77.91 114.91 79.92 118.54 87.10 C124.22 98.35 132.08 105.31 143.49 109.16 C146.24 110.10 148.95 111.60 149.50 112.51 C151.04 115.05 145.19 119.42 138.22 120.93 C130.59 122.59 129.65 123.17 128.93 126.68 C127.83 132.06 127.49 132.22 118.59 131.48 C113.93 131.09 108.86 131.22 106.82 131.78 C104.85 132.33 99.96 134.92 95.94 137.54 C91.93 140.16 86.63 142.91 84.16 143.65 C78.65 145.31 70.82 145.29 65.50 143.60 Z" />
    </svg>
  );
}

export function MessagesGlyph({ className }: IconProps) {
  return (
    <svg className={className} viewBox="14.4 14.4 120.3 120.3" aria-hidden="true">
      <path fill="currentColor" d="M40.18 120.91 C43.96 115.89 45.99 112.57 45.99 111.44 C46.00 110.85 44.54 109.66 42.75 108.79 C33.64 104.36 24.48 92.63 21.48 81.56 C13.89 53.51 40.37 26.03 75.00 26.03 C103.36 26.03 127.70 45.06 129.69 68.78 C132.09 97.45 100.98 121.51 67.31 117.03 C59.88 116.04 58.49 116.11 56.32 117.52 C53.31 119.50 41.55 124.00 39.41 124.00 C38.18 124.00 38.34 123.36 40.18 120.91 Z" />
    </svg>
  );
}

export function LinkGlyph({ className }: IconProps) {
  return (
    <svg className={className} viewBox="-48 -48 384 384" aria-hidden="true">
      <path fill="currentColor" fillRule="evenodd" d="M64.00 286.08 C64.00 282.04 59.27 278.25 50.72 275.45 C46.20 273.96 41.01 271.63 39.18 270.27 C37.36 268.91 31.35 263.27 25.83 257.74 C17.69 249.57 15.19 246.33 12.54 240.52 C9.24 233.28 5.27 229.00 1.87 229.00 C0.10 229.00 0.00 227.77 0.00 205.50 C0.00 184.94 0.19 182.00 1.55 182.00 C2.40 182.00 4.40 181.33 6.00 180.50 C8.14 179.40 10.06 176.56 13.37 169.61 C15.83 164.45 18.90 159.49 20.17 158.60 C21.45 157.71 23.65 155.45 25.06 153.57 C27.82 149.89 49.10 129.64 52.68 127.29 C55.79 125.25 58.64 127.07 60.14 132.07 C61.20 135.62 61.10 136.61 59.30 140.30 C58.18 142.61 52.80 149.22 47.35 155.00 C41.90 160.78 35.89 167.75 34.01 170.50 C32.12 173.25 29.15 177.38 27.41 179.68 C23.69 184.56 22.00 192.39 22.00 204.70 C22.00 215.66 23.49 222.66 26.96 228.00 C28.57 230.47 31.55 235.56 33.59 239.30 C37.72 246.86 41.98 250.95 52.22 257.13 C60.89 262.37 70.20 265.00 80.09 265.00 C91.45 265.00 97.47 263.55 108.00 258.27 C117.26 253.62 118.14 252.86 142.35 228.50 C156.02 214.75 168.36 201.47 169.77 199.00 C171.17 196.53 173.55 193.15 175.04 191.50 C178.92 187.22 179.86 185.04 182.03 175.22 C184.39 164.56 184.51 154.40 182.42 144.24 C180.52 135.09 179.72 133.54 172.26 124.62 C165.01 115.97 157.05 110.36 147.31 107.06 C138.12 103.94 136.57 102.15 139.95 98.55 C141.26 97.16 144.31 95.06 146.72 93.89 L151.11 91.77 L157.81 94.01 C168.80 97.70 173.66 100.67 181.27 108.36 C187.91 115.07 189.84 117.94 198.70 134.41 C204.98 146.07 204.07 177.95 197.15 188.79 C195.49 191.38 192.70 196.43 190.95 200.00 C188.20 205.59 184.15 210.07 162.13 231.91 C129.85 263.91 120.33 271.96 111.24 274.97 C102.51 277.85 97.11 281.39 95.83 285.06 L94.80 288.00 L79.40 288.00 C64.87 288.00 64.00 287.89 64.00 286.08 Z M126.85 190.61 C121.03 189.04 119.02 187.72 108.98 178.86 C101.15 171.95 100.16 170.60 89.29 152.17 C86.05 146.68 84.69 135.64 85.26 119.50 C85.78 104.66 86.97 99.60 91.32 93.73 C92.64 91.96 95.19 87.70 96.99 84.27 C100.24 78.07 103.65 74.48 140.47 38.50 C153.76 25.51 165.52 16.68 176.37 11.53 C183.19 8.29 184.45 7.28 185.87 3.91 L187.50 0.02 L207.75 0.01 C227.49 0.00 228.00 0.05 228.00 2.05 C228.00 5.16 232.30 8.81 240.39 12.54 C249.01 16.53 255.79 21.73 265.73 32.00 C271.40 37.86 273.54 40.94 275.52 46.09 C278.37 53.51 280.93 56.73 285.13 58.19 L288.00 59.20 L288.00 78.90 L288.00 98.60 L284.60 99.83 C282.73 100.50 280.68 101.68 280.04 102.45 C279.41 103.21 277.39 107.45 275.55 111.87 C271.63 121.31 263.10 131.89 246.62 147.75 C238.06 155.99 235.40 158.00 233.04 158.00 C229.58 158.00 227.00 154.90 227.00 150.74 C227.00 146.45 231.25 139.01 236.64 133.87 C245.27 125.63 250.64 119.62 254.38 114.00 C256.39 110.97 259.15 106.97 260.52 105.10 C264.33 99.89 265.35 94.66 265.32 80.50 C265.28 64.85 264.63 62.80 255.55 49.69 C250.87 42.93 246.57 38.17 240.89 33.47 C228.30 23.06 226.59 22.50 207.00 22.50 C195.95 22.50 189.28 22.93 186.81 23.81 C180.79 25.94 170.53 34.15 153.00 50.85 C143.93 59.50 133.41 69.48 129.63 73.04 C120.99 81.16 110.33 94.20 107.86 99.68 C106.82 101.97 105.22 108.42 104.31 114.00 C102.74 123.53 102.75 124.71 104.36 133.32 C106.76 146.12 108.55 151.11 112.35 155.61 C114.16 157.75 117.09 161.64 118.87 164.25 C120.64 166.86 122.44 169.00 122.86 169.00 C123.28 169.00 126.07 171.10 129.06 173.66 C132.05 176.23 137.31 179.61 140.75 181.17 C148.09 184.51 148.89 186.88 143.75 190.01 C140.01 192.29 133.89 192.51 126.85 190.61 Z" />
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
