import { useState } from "react";
import { DESTINATIONS, type DestinationId, type ShareStyle } from "../data/mix";
import {
  CloseIcon,
  InstagramGlyph,
  LinkGlyph,
  MessagesGlyph,
  SnapchatGlyph,
  XGlyph,
} from "./icons";
import { HomeIndicator, StatusBar } from "./StatusBar";
import { ShareCard } from "./share/ShareCard";

const GLYPHS = {
  link: LinkGlyph,
  instagram: InstagramGlyph,
  snapchat: SnapchatGlyph,
  messages: MessagesGlyph,
  x: XGlyph,
} as const;

type ShareDestinationProps = {
  style: ShareStyle;
  onClose: () => void;
};

export function ShareDestination({ style, onClose }: ShareDestinationProps) {
  const [chosen, setChosen] = useState<DestinationId | null>(null);

  function choose(id: DestinationId) {
    setChosen(id);
    if (id === "link") {
      const url = "https://songmix.app/mix/house-music-2026";
      void navigator.clipboard?.writeText(url).catch(() => undefined);
    }
  }

  return (
    <div className="phone phone--destination">
      <StatusBar />
      <div className="destination-stage">
        <div className="destination-preview">
          <ShareCard variant={style} />
        </div>
      </div>

      <section className="destination-sheet" role="dialog" aria-label="Share to">
        <header className="destination-sheet__header">
          <span />
          <h2>Share to</h2>
          <button type="button" className="icon-button" aria-label="Close" onClick={onClose}>
            <CloseIcon />
          </button>
        </header>

        <ul className="destination-list">
          {DESTINATIONS.map((destination) => {
            const Glyph = GLYPHS[destination.id];
            const active = chosen === destination.id;
            return (
              <li key={destination.id}>
                <button
                  type="button"
                  className={active ? "is-chosen" : undefined}
                  onClick={() => choose(destination.id)}
                >
                  <span className={`destination-icon destination-icon--${destination.id}`}>
                    <Glyph />
                  </span>
                  <span>{destination.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <HomeIndicator />
    </div>
  );
}
