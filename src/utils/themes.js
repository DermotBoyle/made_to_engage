import {Green, Background, TextColor, Highight} from "./colors";
import {primaryFont, primaryFontMedium} from "./typography";

export const primaryTheme = {
    backgroundPrimary : Background[100],
    backgroundSecondary : Background[300],
    activeButton : Green[100],
    deactiveButton : Background[200],
    activeButtonText : TextColor[100],
    deactiveButtonText : TextColor[200],
    inputBorderError: Highight[100],
    primaryFont,
    primaryFontMedium
}