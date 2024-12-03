import { atom } from "nanostores";
import { $screens, $currentScreen } from "./screens";

export interface Tab {
  id: string;
  name: string;
  tooltip: string;
  icon: string;
  screenId: string;
  destroy: () => void;
}

export const $tabs = atom<Tab[]>([]);
export const $currentTab = atom<Tab | null>(null);

$currentTab.subscribe((tab) => {
  const screen = $screens.get().find((s) => s.id === tab?.screenId);
  if (!screen) {
    $currentTab.set(null);
  } else {
    $currentScreen.set(screen);
  }
});

export function setTabs(tabs: Tab[]) {
  $tabs.set(tabs);
}

export function setPrevTabs(callback: (prev: Tab[]) => Tab[]) {
  const old = $tabs.get();
  $tabs.set(callback(old));
}
