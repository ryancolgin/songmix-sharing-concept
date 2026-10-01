type CoverArtProps = {
  size?: "hero" | "feature" | "small";
};

export function CoverArt({ size = "hero" }: CoverArtProps) {
  return (
    <div className={`cover-art cover-art--${size}`}>
      <img className="cover-art__image" src="/art/cover.jpg" alt="" />
      <div className="cover-art__scrim" aria-hidden="true" />
      <div className="cover-art__title" aria-hidden="true">
        <span>HOUSE</span>
        <span>2026</span>
        <span>MUSIC</span>
      </div>
    </div>
  );
}
