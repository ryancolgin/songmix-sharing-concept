import { SHARE_STYLES, type ShareStyle } from "../data/mix";
import { ShareCard } from "./share/ShareCard";

type StyleSelectorProps = {
  value: ShareStyle;
  onChange: (style: ShareStyle) => void;
};

export function StyleSelector({ value, onChange }: StyleSelectorProps) {
  return (
    <div className="style-selector" role="radiogroup" aria-label="Visual style">
      {SHARE_STYLES.map((style) => {
        const selected = style.id === value;
        return (
          <button
            key={style.id}
            type="button"
            className={`style-option${selected ? " is-selected" : ""}`}
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(style.id)}
          >
            <span className="style-option__thumb">
              <span className="style-option__live" aria-hidden="true">
                <ShareCard variant={style.id} />
              </span>
            </span>
            <span className="style-option__label">{style.label}</span>
          </button>
        );
      })}
    </div>
  );
}
