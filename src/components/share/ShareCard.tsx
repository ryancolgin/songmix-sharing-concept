import type { ShareStyle } from "../../data/mix";
import { MIX } from "../../data/mix";
import { CoverArt } from "./CoverArt";
import { ServiceRow } from "./ServiceRow";
import { SongMixMark } from "./SongMixMark";
import { TrackList } from "./TrackList";

type ShareCardProps = {
  variant: ShareStyle;
};

export function ShareCard({ variant }: ShareCardProps) {
  const atmospheric = variant === "atmosphere" || variant === "minimal";

  return (
    <article
      className={`share-card share-card--${variant}`}
      data-share-style={variant}
      aria-label={`${MIX.title} by ${MIX.creator}`}
    >
      {atmospheric && (
        <div className="share-card__wash" aria-hidden="true">
          <img src="/art/story.jpg" alt="" />
        </div>
      )}
      {variant === "tracklist" && (
        <div className="share-card__wash share-card__wash--soft" aria-hidden="true">
          <img src="/art/cover.jpg" alt="" />
        </div>
      )}

      <div className="share-card__body">
        {variant === "artwork" && <CoverArt size="hero" />}
        {variant === "atmosphere" && <CoverArt size="feature" />}
        {variant === "tracklist" && <CoverArt size="small" />}
        {variant === "minimal" && (
          <div className="minimal-lockup" aria-hidden="true">
            <span>HOUSE</span>
            <span>2026</span>
            <span>MUSIC</span>
          </div>
        )}

        <div className="share-card__copy">
          <h2 className="share-card__title">{MIX.title}</h2>
          <p className="share-card__by">by {MIX.creator}</p>
          <p className="share-card__meta">{MIX.meta}</p>
        </div>

        {variant === "tracklist" && <TrackList />}

        <div className="share-card__services">
          <ServiceRow />
          <p className="share-card__open">{MIX.open}</p>
        </div>

        <div className="share-card__footer">
          <SongMixMark />
        </div>
      </div>
    </article>
  );
}
