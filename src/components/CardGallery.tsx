import { SHARE_STYLES } from "../data/mix";
import { ShareCard } from "./share/ShareCard";

export function CardGallery() {
  return (
    <main className="card-gallery">
      {SHARE_STYLES.map((style) => (
        <section className="card-gallery__item" key={style.id} data-export={style.id}>
          <p className="card-gallery__label">{style.label}</p>
          <div className="card-gallery__frame">
            <ShareCard variant={style.id} />
          </div>
        </section>
      ))}
    </main>
  );
}
