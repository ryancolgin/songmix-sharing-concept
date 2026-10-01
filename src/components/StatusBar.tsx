import { CellularIcon, WifiIcon, BatteryIcon } from "./icons";

export function StatusBar() {
  return (
    <div className="status-bar">
      <span className="status-bar__time">9:41</span>
      <span className="status-bar__icons" aria-hidden="true">
        <CellularIcon />
        <WifiIcon />
        <BatteryIcon />
      </span>
    </div>
  );
}

export function HomeIndicator() {
  return <div className="home-indicator" aria-hidden="true" />;
}
