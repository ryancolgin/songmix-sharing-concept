import { useEffect, useState } from "react";
import { CardGallery } from "./components/CardGallery";
import { ShareFlow } from "./components/ShareFlow";

function currentPath() {
  const path = window.location.pathname.replace(/\/$/, "");
  return path || "/";
}

export default function App() {
  const [path, setPath] = useState(currentPath);

  useEffect(() => {
    const sync = () => setPath(currentPath());
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  if (path === "/cards") return <CardGallery />;
  return <ShareFlow />;
}
