import {Green, Background, TextColor, Highight} from "./colors";
import {primaryFont, primaryFontMedium} from "./typography";

export const primaryTheme = {
    backgroundPrimary : Background[100],
    backgroundSecondary : Background[300],
    ActiveButton : Green[100],
    DeactiveButton : Background[200],
    ActiveButtonText : TextColor[100],
    DeactiveButtonText : TextColor[200],
    InputBorderError: Highight[100],
    primaryFont,
    primaryFontMedium
}