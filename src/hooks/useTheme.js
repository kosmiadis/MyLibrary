import { useContext } from "react";
import { ThemeCTX } from "../contexts/ThemeProvider";

export default function useTheme () {
    return useContext(ThemeCTX);;
}