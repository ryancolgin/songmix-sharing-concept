import { MIX, TRACKS } from "../data/mix";
import {
  ChevronLeftIcon,
  EllipsisIcon,
  HomeIcon,
  LibraryIcon,
  ProfileIcon,
  SearchIcon,
  ShareIcon,
  VerifiedIcon,
} from "./icons";
import { CoverArt } from "./share/CoverArt";
import { ServiceRow } from "./share/ServiceRow";
import { HomeIndicator, StatusBar } from "./StatusBar";

const TABS = [
  { id: "discover", label: "Discover", icon: HomeIcon, active: true },
  { id: "library", label: "Library", icon: LibraryIcon, active: false },
  { id: "you", label: "You", icon: ProfileIcon, active: false },
  { id: "search", label: "Search", icon: SearchIcon, active: false },
] as const;

type MixDetailProps = {
  onShare: () => void;
};

export function MixDetail({ onShare }: MixDetailProps) {
  return (
    <div className="phone">
      <StatusBar />
      <header className="mix-header">
        <button type="button" className="mix-back" aria-label="Back">
          <ChevronLeftIcon />
        </button>
        <button type="button" className="mix-share" aria-label="Share" onClick={onShare}>
          <ShareIcon />
        </button>
      </header>

      <div className="mix-body">
        <div className="mix-cover">
          <CoverArt size="hero" />
        </div>
        <h1 className="mix-title">{MIX.title}</h1>
        <p className="mix-creator">
          <img src={MIX.creatorAvatar} alt="" />
          <span>{MIX.creator}</span>
          <VerifiedIcon />
        </p>
        <p className="mix-meta">{MIX.meta}</p>
        <ServiceRow className="mix-services" />
        <button type="button" className="import-button">
          Import to Your Library
        </button>

        <ul className="mix-tracks">
          {TRACKS.map((track) => (
            <li className="mix-track" key={track.title}>
              <img src={track.avatar} alt="" />
              <span className="mix-track__copy">
                <span className="mix-track__title">{track.title}</span>
                <span className="mix-track__artist">{track.artist}</span>
              </span>
              <button type="button" className="mix-track__more" aria-label={`More options for ${track.title}`}>
                <EllipsisIcon />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <nav className="tab-bar" aria-label="Primary">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              className={tab.active ? "is-active" : undefined}
              aria-current={tab.active ? "page" : undefined}
            >
              <Icon />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>
      <HomeIndicator />
    </div>
  );
}
