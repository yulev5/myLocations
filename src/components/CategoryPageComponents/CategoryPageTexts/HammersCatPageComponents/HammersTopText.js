import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import ToolImagesSlider from 'components/ToolPageComponents/ToolImagesSlider';
import { GetImagesListForCategory } from 'assets/Database/DatabaseUtils';
import MyAccordion from 'components/TextComponents/MyAccordion';
import { UserContext } from 'contexts/MyContext';
import { TextFontSize20, TextFontWeight600SemiBold } from '../../../Styles/MyStyles';
import ToolInfoSection from '../ToolInfoSection';
import YoutubeSlider from 'components/GeneralComponents/YoutubeSliderComponents/YoutubeSlider';
import { myColors } from 'components/Styles/Colors';
import KongoAirHammerHammerDrill from './KongoAirHammerHammerDrill';

const useStyles = makeStyles((theme) => ({
    categoryInfoContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    tabsButtonStyle: {
        display: 'flex',
        marginTop: '28px',
        marginRight: '40px',
        height: '74px',
    },
    ButtonHomePageStyle: {
        width: '100%',
        marginBottom: '10px',
    },
    ToolImagesSliderContainerStyle: {
        marginBottom: '10px'
    },
    TyporgaphyTitleStyle: {
        fontSize: '1.3rem',
        fontWeight: '400',
    },
    tabSeparatorStyle: {

    },
    tabTextButtonStyleContainer: {
        display: 'inline-block',
    },
    tabTextButtonStyle: {
        display: 'inline-block',
        height: '100%',
        paddingRight: '24px',
        paddingLeft: '24px',
        '&:hover': {
            fontWeight: '800',
            cursor: 'pointer'
        }
    },
    TextFontSize20,
    TextFontWeight600SemiBold,
    toolImageSliderStyle: {
        height: '400px',
        width: '100%'
    },
    categorySpecsContainer: {
        width: '100%',
        boxShadow: '-3px 4px 6px #00000040',
        border: '1px solid #F6F6F6',
        borderRadius: '8px',
        opacity: '1',
        backgroundColor: myColors.LightGreyWildSand,
        [theme.breakpoints.up('md')]: {
            minHeight: '427px',
        }
    },
}));

function HammersTopText(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);
    let imagesList = GetImagesListForCategory(data.urlParamsCategoryID, true);

    let tabsData = [
        {
            tabId: 'pictures',
            tabTitle: 'תמונות',
            tabContent: (
                <ToolImagesSlider
                    className={classes.toolImageSliderStyle}
                    priority={false}
                    imagesList={imagesList}
                    width={290}
                    height={100} />
            )
        },
        {
            tabId: 'commonUsages',
            tabTitle: 'שימושים נפוצים',
            tabContent: (
                <MyAccordion accordionsList={hammersAccordionsCommonUsages} />
            )
        },
        {
            tabId: 'differentKinds',
            tabTitle: 'סוגי פטישי חציבה מיוחדים',
            tabContent: (
                <MyAccordion accordionsList={hammersAccordionsSpecialModels} />
            )
        },
    ]

    return (
        <>
            <YoutubeSlider
                headerTitle="סרטוני פטישי חציבה מהשכרה"
                videosData={[
                    {
                        videoHeader: "חציבה בסלע עם פטיש חציבה קונגו",
                        videoText: 'קנגו בינוני במשקל 20 ק"ג בעבודת חציבה בסלע. פטיש חציבה חזק המאפשר חציבה חזקה כלפי מטה וגם לצד',
                        videoID: "ydoNhxzMly4"
                    },
                    {
                        videoHeader: "פטיש חציבה קטן לסיתות",
                        videoText: 'סיתות תעלת חשמל עם פטיש חציבה קטן במשקל 7.8 קילו מהשכר',
                        videoID: "d2Sc6N2Xyn0"
                    },
                    {
                        videoHeader: "שבירה וחציבת חגורת בטון",
                        videoText: "הריסת חגורת בטון עם פטיש חציבה גדול - בינוני במשקל 11 קילו",
                        videoID: "abZjRjlSWhs"
                    },
                    {
                        videoHeader: "הריסת רצפת בטון עם פטיש חציבה 20 קילו",
                        videoText: "הריסת רצפת בטון בגינה עם ריצוף בעזרת פטיש חציבה במשקל 20 קילו - עבודה קלה ומהירה יחסית לחוזק רצפת הבטון",
                        videoID: "9Hb72d4yki8"
                    },
                    {
                        videoHeader: "עבודה עם פטיש חציבה קטן מידי!!",
                        videoText: "דוגמא לעבודה עם פטיש חציבה קטן מידי שלא מתאים לעבודה - חציבה ברצפת בטון יצוק - נדרש פטיש חציבה גדול יותר",
                        videoID: "GMOufIPxBwU"
                    }
                ]}
            />
            <div className={classes.categorySpecsContainer}>
                <ToolInfoSection tabsData={tabsData} />
            </div>
            <KongoAirHammerHammerDrill />
        </>
    )
}

let hammersAccordionsCommonUsages = [
    {
        accordionTitle: "שימושים נפוצים - פטיש חציבה קטן עד 5 ק\"ג",
        accordionItems: [
            "עבודות סיתות וחציבה קלות באבן ובלוקים",
            "סיתות תעלות בקירות ובבלוקים להעברת צינורות חשמל",
            "סיתות לצורך הוספת נקודת חשמל",
            "קילוף ריצוף, שיש או חלקי טיח ובטון רופפים",
            "הסרה ופירוק של אריחי קרמיקה"
        ],
    },
    {
        accordionTitle: "שימושים נפוצים - פטיש חציבה בינוני עד 10 ק\"ג",
        accordionItems: [
            "עבודות סיתות וחציבה בינוניות בבטון, אבן ובלוקים",
            "פתיחת חלון או פתח בקיר בטון או אבן",
            "שבירת לבנים, בלוקים או חלקים מקיר או עמוד בטון",
            "שבירה וריסוק של סלעים ",
            "קילוף אריחים גדולים מרצפה או מקיר",
            "עבודות חציבה וחפירה בינוניות בבטון או באדמה",
            "משקל פטיש החציבה מאפשר עבודה אופקית או אנכית"
        ],
    },
    {
        accordionTitle: "שימושים נפוצים - פטיש חציבה גדול עד 30 ק\"ג",
        accordionItems: [
            "עבודות חציבה, חפירה והריסה הדורשות כלי גדול וחזק במיוחד",
            "חפירה באדמה קשה",
            "שבירה וריסוק של סלעים קשים",
            "חציבה ברצפת בטון או תקרה (עבודה מלמעלה כלפי מטה)",
            "שבירה וריסוק של בטון חזק במיוחד",
            "משקל פטיש החציבה הגדול מאפשר בעיקר עבודה אנכית עם הכלי"
        ],
    }
];

let hammersAccordionsSpecialModels = [
    {
        accordionTitle: "סוגי פטישי חציבה מיוחדים",
        accordionItems: [
            "פטיש חציבה מסתובב לקידוח בסלעים, בבטון ובאדמה",
            "פטישון לקילוף וסיתות - סוג מיוחד של פטיש חציבה קטן בעל צורה כזאת שגורמת לו להיות מתאים במיוחד לקילוף של אריחים וריצוף",
            "פטיש חציבה גדול (ענק) הנקרא גם קונגו, דגם מוכר במיוחד הוא הפטיש החציבה (קונגו) הצהוב של חברת בוש",
            "פטיש חציבה נטען עם סוללות המאפשר עבודה במקומות ללא חשמל",
            "פטיש חציבה אוויר העובד עם קומפרסור על לחץ אוויר"
        ],
    },
]


export default HammersTopText;