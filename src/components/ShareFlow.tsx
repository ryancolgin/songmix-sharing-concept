import { useState } from "react";
import type { ShareStyle } from "../data/mix";
import { MixDetail } from "./MixDetail";
import { ShareComposer } from "./ShareComposer";
import { ShareDestination } from "./ShareDestination";

type Screen = "detail" | "composer" | "destination";

export function ShareFlow() {
  const [style, setStyle] = useState<ShareStyle>("artwork");
  const [screen, setScreen] = useState<Screen>("detail");

  return (
    <main className="stage">
      {screen === "detail" && <MixDetail onShare={() => setScreen("composer")} />}
      {screen === "composer" && (
        <ShareComposer
          style={style}
          onStyleChange={setStyle}
          onContinue={() => setScreen("destination")}
          onClose={() => setScreen("detail")}
        />
      )}
      {screen === "destination" && (
        <ShareDestination style={style} onClose={() => setScreen("composer")} />
      )}
    </main>
  );
}
