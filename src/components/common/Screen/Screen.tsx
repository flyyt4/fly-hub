import { $currentScreen } from "@/stores/screens";
import { useStore } from "@nanostores/react";
import { useEffect, useRef } from "react";

function Screen() {
  const currentScreen = useStore($currentScreen);
  const ref = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    if (ref.current && ref.current.contentWindow) {
    }
  }, []);
  return (
    <iframe
      ref={ref}
      src={`/api/${currentScreen.ref.split(":").join("/")}`}
      sandbox="allow-scripts allow-same-origin"
      className="size-full"
    />
  );
}

export default Screen;
