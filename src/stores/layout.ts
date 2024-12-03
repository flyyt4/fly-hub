import { atom } from "nanostores";

export const $openSidebar = atom<boolean>(true);

export function setOpenSidebar(open: boolean) {
  $openSidebar.set(open);
}

export function toggleSidebar() {
  $openSidebar.set(!$openSidebar.get());
}

export const $chatOpen = atom<boolean>(false);

export function setChatOpen(open: boolean) {
  $chatOpen.set(open);
}

export function toggleChat() {
  $chatOpen.set(!$chatOpen.get());
}
