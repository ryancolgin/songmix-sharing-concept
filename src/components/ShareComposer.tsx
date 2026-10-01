import type { ShareStyle } from "../data/mix";
import { CloseIcon } from "./icons";
import { HomeIndicator, StatusBar } from "./StatusBar";
import { ShareCard } from "./share/ShareCard";
import { StyleSelector } from "./StyleSelector";

type ShareComposerProps = {
  style: ShareStyle;
  onStyleChange: (style: ShareStyle) => void;
  onContinue: () => void;
  onClose: () => void;
};

export function ShareComposer({ style, onStyleChange, onContinue, onClose }: ShareComposerProps) {
  return (
    <div className="phone">
      <StatusBar />
      <header className="composer-header">
        <button type="button" className="icon-button" aria-label="Close" onClick={onClose}>
          <CloseIcon />
        </button>
        <h1>Share this Mix</h1>
        <span />
      </header>

      <div className="composer-stage">
        <div className="composer-preview">
          <ShareCard key={style} variant={style} />
        </div>
      </div>

      <StyleSelector value={style} onChange={onStyleChange} />

      <div className="composer-action">
        <button type="button" className="continue-button" onClick={onContinue}>
          Continue
        </button>
      </div>
      <HomeIndicator />
    </div>
  );
}
