import { AmazonGlyph, AppleMusicGlyph, DeezerGlyph, SpotifyGlyph, TidalGlyph } from "../icons";

const SERVICES = [
  { id: "spotify", label: "Spotify", glyph: SpotifyGlyph },
  { id: "apple", label: "Apple Music", glyph: AppleMusicGlyph },
  { id: "amazon", label: "Amazon Music", glyph: AmazonGlyph },
  { id: "tidal", label: "Tidal", glyph: TidalGlyph },
  { id: "deezer", label: "Deezer", glyph: DeezerGlyph },
] as const;

type ServiceRowProps = {
  className?: string;
};

export function ServiceRow({ className }: ServiceRowProps) {
  return (
    <ul className={className ? `service-row ${className}` : "service-row"}>
      {SERVICES.map((service) => {
        const Glyph = service.glyph;
        return (
          <li key={service.id}>
            <span className={`service-icon service-icon--${service.id}`} title={service.label}>
              <Glyph />
              <span className="sr-only">{service.label}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
