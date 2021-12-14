import { useMediaQuery, useTheme } from "@material-ui/core";
import { breakpoints } from "components/Styles/Breakpoints";
import useWindowSize from "./useWindowSize";

export function OnProdEnv() {
    if (process.env.NEXT_PUBLIC_ENV == "production") {
        return true;
    } else {
        return false;
    }
}

export function OnDevEnv() {
    if (process.env.NEXT_PUBLIC_ENV == "development") {
        return true;
    }
    else {
        return false;
    }
}

export function PrintEnvToConsole() {
    console.log('Version: ', process.env.NEXT_PUBLIC_ENV);
}

export function RemoveNotAllowedChars(stringToValidate) {
    return stringToValidate.replace(/[`~!@#$%^&*()_|+=?;:\'\",.<>\{\}\[\]\\\/]/gi, '');
}

export function isMobileOrTablet() {
    const theme = useTheme();
    // return (!useMediaQuery(theme.breakpoints.up('md')));
    return !useMediaQuery('(min-width:960px)');
}