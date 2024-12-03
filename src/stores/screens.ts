import { atom } from "nanostores";

export interface Screen {
  id: string;
  ref: string;
  props: string | null;
}

export const $screens = atom<Screen[]>([
  {
    id: "empty",
    ref: "system:screens:empty",
    props: null,
  },
]);

export const $sidebarScreen = atom<
  Omit<Screen, "id" | "props"> & {
    provider: "system" | "extension";
  }
>({
  provider: "system",
  ref: "system:screens:empty:sidebar",
});

export const setSidebarScreen = (
  screen: Omit<Screen, "id" | "props"> & { provider: "system" | "extension" }
) => {
  $sidebarScreen.set(screen);
};

export const $currentScreen = atom<Screen>({
  id: "empty",
  ref: "system:screens:empty",
  props: null,
});

export function setCurrentScreen(screen: Screen) {
  const find = $screens.get().find((s) => s.id === screen.id);
  if (find) $currentScreen.set(find);
}

export function setScreens(screens: Screen[]) {
  $screens.set(screens);
}

export function addScreen(screen: Screen) {
  $screens.set([...$screens.get(), screen]);
}

export function removeScreen(screen: Screen) {
  $screens.set($screens.get().filter((s) => s.id !== screen.id));
}
