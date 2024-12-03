import { atom } from "nanostores";

const darkMode = atom<boolean>(false);

export const toggleDarkMode = () => {
  darkMode.set(!darkMode.get());
};

export default darkMode;
