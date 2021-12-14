import { myColors } from './Colors';
import { myFontSizes, myFontWeights } from "./Sizes";

//----------------------------Background colors----------------------------
export const backgourndColorTurquoisePelorous = {
    backgroundColor: myColors.TurquoisePelorous
}

export const backgourndColorLightGreyWildSand = {
    backgroundColor: myColors.LightGreyWildSand
}

export const backgourndColorDarkBlueOuterSpace = {
    backgroundColor: myColors.DarkBlueOuterSpace
}

export const backgourndColorDarkBlueOuterSpaceDarker = {
    backgroundColor: myColors.DarkBlueOuterSpaceDarker
}

export const backgourndColorRegularWhite = {
    backgroundColor: myColors.RegularWhite
}

export const backgourndColorGreyPlatinium = {
    backgroundColor: myColors.GreyPlatinium
}

//----------------------------Font Sizes----------------------------
export const TextFontSize48 = {
    fontSize: myFontSizes.TextFontSize48
}

export const TextFontSize40 = {
    fontSize: myFontSizes.TextFontSize40
}

export const TextFontSize32 = {
    fontSize: myFontSizes.TextFontSize32
}

export const TextFontSize30 = {
    fontSize: myFontSizes.TextFontSize30
}

export const TextFontSize28 = {
    fontSize: myFontSizes.TextFontSize28
}

export const TextFontSize24 = {
    fontSize: myFontSizes.TextFontSize24
}

export const TextFontSize20 = {
    fontSize: myFontSizes.TextFontSize20
}

export const TextFontSize18 = {
    fontSize: myFontSizes.TextFontSize18
}

export const TextFontSize16 = {
    fontSize: myFontSizes.TextFontSize16
}

export const TextFontSize14 = {
    fontSize: myFontSizes.TextFontSize14
}
//----------------------------Font Weights----------------------------
export const TextFontWeight400Normal = {
    fontWeight: myFontWeights.Weight400Normal
}

export const TextFontWeight500 = {
    fontWeight: myFontWeights.Weight500
}

export const TextFontWeight600SemiBold = {
    fontWeight: myFontWeights.Weight600SemiBold
}

export const TextFontWeight700Bold = {
    fontWeight: myFontWeights.Weight700Bold
}

export const TextFontWeight800ExrtaBold = {
    fontWeight: myFontWeights.Weight800ExtraBold
}

export const TextFontWeight900Boldest = {
    fontWeight: myFontWeights.Weight900Boldest
}

//----------------------------Font colors----------------------------
export const textColorDarkBlueOuterSpace = {
    color: myColors.DarkBlueOuterSpace
}

export const textColorTurquoisePelorous = {
    color: myColors.TurquoisePelorous
}

export const textColorSuperLightGreyWhite = {
    color: myColors.SuperLightGreyWhite
}

export const textColorLightGreyWildSand = {
    color: myColors.LightGreyWildSand
}

export const textColorBlackMirage = {
    color: myColors.BlackMirage
}

export const textColorRegularWhite = {
    color: myColors.RegularWhite
}

export const textColorGreyPlatinium = {
    color: myColors.GreyPlatinium
}

//----------------------------Hover styles----------------------------
export const hoverDarkBlueOuterSpace = {
    '&:hover': {
        backgroundColor: myColors.DarkBlueOuterSpace
    }
}

export const hoverOpacity07 = {
    '&:hover': {
        opacity: '0.7'
    }
}

//----------------------------Ready styles----------------------------
export const textRegularGrey18 = {
    fontSize: myFontSizes.TextFontSize18,
    color: myColors.LightGreyWildSand,
    fontWeight: '500'
}

export const textSemiBoldGrey20 = {
    fontSize: myFontSizes.TextFontSize20,
    color: myColors.LightGreyWildSand,
    fontWeight: '600'
}

export const textSemiBoldBlue20 = {
    fontSize: myFontSizes.TextFontSize20,
    color: myColors.DarkBlueOuterSpace,
    fontWeight: '600'
}

export const textTitleBig40BlueExtraBold = {
    fontSize: myFontSizes.TextFontSize40,
    color: myColors.DarkBlueOuterSpace,
    fontWeight: '800'
}

export const textTitleBigBlueBold = {
    fontSize: myFontSizes.TextFontSize40,
    color: myColors.DarkBlueOuterSpace,
    fontWeight: '700'
}

export const textTitleBig40LightGreyBold = {
    fontSize: myFontSizes.TextFontSize40,
    color: myColors.SuperLightGreyWhite,
    fontWeight: '700'
}

export const textTitleBigBoldBlack = {
    fontSize: myFontSizes.TextFontSize40,
    color: myColors.BlackMirage,
    fontWeight: '700'
}

export const textBig32blueBold = {
    fontSize: myFontSizes.TextFontSize32,
    color: myColors.DarkBlueOuterSpace,
    fontWeight: '700'
}

export const myFontFamily = {
    fontFamily: `"Assistant", "Arial", sans-serif`
}

export const BigButtonStyle = {
    fontSize: myFontSizes.TextFontSize24,
    color: myColors.SuperLightGreyWhite,
    backgroundColor: myColors.TurquoisePelorous
}




//----------------------------not working----------------------------
export const InutPlaceholderFontFamily = {
    '&::placeholder': {
        fontFamily: `"Assistant"`
    },

    // '-webkit-input-placeholder': {
    //     fontFamily: "Assistant"
    // },
    // '-ms-input-placeholder': {
    //     fontFamily: `"Assistant", "Arial", "Helvetica", sans-serif`
    // },
}