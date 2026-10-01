import { TRACKS, MIX } from "../../data/mix";

export function TrackList() {
  return (
    <div className="track-list">
      <ul className="track-list__rows">
        {TRACKS.map((track) => (
          <li className="track-row" key={track.title}>
            <img className="track-row__avatar" src={track.avatar} alt="" />
            <span className="track-row__copy">
              <span className="track-row__title">{track.title}</span>
              <span className="track-row__artist">{track.artist}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="track-more">{MIX.more}</p>
    </div>
  );
}
