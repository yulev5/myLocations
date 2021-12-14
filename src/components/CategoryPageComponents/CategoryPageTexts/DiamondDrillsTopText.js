import React from 'react';
import { makeStyles, Typography, Accordion, AccordionSummary, AccordionDetails, Link, withStyles } from '@material-ui/core';
import MyAccordion from '../../TextComponents/MyAccordion';
import TabsInfoSection from './infoTabsComponenets/TabsInfoSection';
import ToolInfoSection from './ToolInfoSection';
import { myColors } from 'components/Styles/Colors';
import YoutubeSlider from 'components/GeneralComponents/YoutubeSliderComponents/YoutubeSlider';

const useStyles = makeStyles((theme) => ({
    divShadowStyle: {
        backgroundColor: '#fff',
        boxShadow: '0 1px 4px rgba(32, 33, 36, 0.28)',
        borderRadius: '5px',
        marginTop: '10px'
    },
    SubTitleBigStyle: {
        fontWeight: 'bold',
        fontSize: '1rem',
        textAlign: 'center',
        paddingTop: '8px',
        paddingRight: '16px',
        paddingLeft: '16px',
        paddingBottom: '8px',
    },
    SubTitleInfoStyle: {
        fontWeight: '600',
        textAlign: 'right',
        paddingTop: '12px',
        paddingRight: '16px',
        paddingLeft: '16px',
        paddingBottom: '12px',
        fontSize: '1rem',
    },
    infoTextStyle: {
        textAlign: 'right',
        fontSize: '0.9rem',
        paddingRight: '16px',
        paddingLeft: '16px',
        paddingBottom: '12px',
        whiteSpace: 'pre-line'
    },
    accordionDivStyle: {
        marginTop: '10px',
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

function DiamondDrillsTopText(props) {
    const classes = useStyles();
    let tabsData = [
        {
            tabId: 'importantInfo',
            tabTitle: 'השכרת מקדחת יהלום - מידע חשוב',
            tabContent: (
                <MyAccordion accordionsList={importantInfoDiamnodsDrillsAccordions} />
            )
        },
        {
            tabId: 'commonUsages',
            tabTitle: 'שימושים נפוצים',
            tabContent: (
                <MyAccordion accordionsList={commonUsagesAccordions} />
            )
        },
        {
            tabId: 'differentKinds',
            tabTitle: 'סוגי פטישי חציבה מיוחדים',
            tabContent: (<div className={classes.categoryInfoContainer}>

            </div>)
        },
    ]

    return (
        <>
            <YoutubeSlider
                headerTitle="סרטוני השכרת מקדחות יהלום"
                videosData={[
                    {
                        videoHeader: "קידוח למזגן עם מקדחת יהלום מהשכרה",
                        videoText: 'השכרת מקדחת יהלום לקידוח חור למזגן בקוטר 2.5 אינצ, עבודת הקידוח התבצעה על גג והקידוח עצמו נעשה בקיר בטון ובלוקים',
                        videoID: "Y017JLTva-E"
                    },
                    {
                        videoHeader: "קידוח בקוטר 2 צול לניקוז",
                        videoText: 'קידוח חור בקיר בלוקים עם מקדחת יהלום בקוטר 2 צול בזווית לצורך ניקוז מים',
                        videoID: "Wu5HXdkkXuY"
                    },
                    {
                        videoHeader: "מקדח כוס יהלום מהשכרה",
                        videoText: 'צפה בוידאו של מקדח כוס יהלום מהשכרה בזמן עבודת קידוח חור ניקוז מים בפינת קיר + רצפת מרפסת',
                        videoID: "8gYZZMyDC0s"
                    },
                ]}
            />
            <div className={classes.categorySpecsContainer}>
                <ToolInfoSection tabsData={tabsData} />
            </div>
        </>
    );
}

let importantInfoDiamnodsDrillsAccordions = [
    {
        accordionTitle: "איזה סוג מקדחת יהלום תתאים לי?",
        accordionItems: [
            `בהתאם לגודל (קוטר) החור נבחר את סוג מקדחת היהלום

            לקידוח חורים בקוטר של עד 3 אינצ' (3 צול) נשתמש במקדחת היהלום הידנית ללא המעמד וללא הקיבוע.

            לקידוח של חורים גדולים יותר בין 3 ל-6 אינצ' מומלץ להשתמש במקדחת היהלום הגדולים יותר עם הסטנד.

            בקידוחים של חורים בקטרים גדולים מ-6 אינצ', עד אפילו 12 אינצ' נשתמש גם במקדחת יהלום עם סטנד, רק אחת גדולה וחזקה יותר.`
        ],
    },
    {
        accordionTitle: "קירור מים / משאבת מים - למה צריך את זה?",
        accordionItems: [
            `חלק היהלום הנמצא בקצה המקדח וגם המקדח כולו מתחמם במהירות,
            כאשר הוא מתחמם יותר מידי היהלום מפסיק לקדוח ומהר מאוד נשבר
            כדי למנוע התחממות יתר ובכך שבירה של קצה היהלום, חובה לקרר את המקדח בזמן העבודה.
            הדרך היעילה ביותר לקירור המקדח היא שימוש במים.

            כל מקדחות היהלום בנויות עם מנגנון קירור המזרים מים מתוך החלק הפנימי של המקדח ובכך מקרר אותו מבפנים בזמן העבודה
            כדי להשתמש במנגנון קירור זה צריך לחבר אספקה של מים(לא הרבה מים אבל בכל זאת) לברז שנמצא על המקדחה
            ניתן לחבר צינור מים רגיל כמו שיש בגינה, או לקחת משאבה קטנה ניידת אותה אנחנו מספקים בזמן השכרת מקדחת היהלום כאשר משאבה זאת תספק את המים הנדרשים לקירור בזמן העבודה
            מקדחות יהלום ידניות, על עמוד וסוגים נוספים למגוון משימות, השכרה של מכשיר הקידוח עם כוסות היהלום בגדלים שונים בהתאם לסוג העבודה.
            `
        ],
    },
];

let commonUsagesAccordions = [
    {
        accordionTitle: "שימושים נפוצים",
        accordionItems: [
            "קידוח חור עם מקדחת היהלום לצורך העברת צנרת של מזגן",
            "קידוח חורים להתקנת וונטה או לפתח אוורור",
            "קידוח חורים עגולים בשיש",
            "קידוח חורים בסלע לפני החדרת חומר פיצוץ לסלעים",
            "קידוח חורים עגולים וסימטריים בקיר, בטון ואבן להעברת כבלים וצנרת חשמל",
            "הכנת חורים לעמודי תמיכה וגדרות",
            "קידוח חורים עגולים בבטון, אבן, שיש, זכוכית, פורצלן, גרניט וחומרים קשים אחרים למטרות שונות נוספות"
        ],
    },
    {
        accordionTitle: "סוגי מקדחות יהלום",
        accordionItems: [
            "מקדחת יהלום ידנית עם כוסות קידוח (בדרך כלל לקידוח בקוטר עד 3 אינצ' / צול)",
            "מקדחת יהלום עם סטנד וכוסות קידוח (בדרך כלל לגדלים 3 עד 12 אינצ' / צול')",
            "מקדח יהלום קטן (רק מקדח ללא המקדחה) להתקנה על מקדחה רגילה או פטישון"
        ],
    },
    {
        accordionTitle: "מחירון השכרת מקדחת יהלום",
        accordionItems: [
            {
                isLink: true,
                linkText: "לחץ כאן לצפייה במחירון השכרת מקדחת יהלום",
                href: "/rentals/price-list/diamond-drills"
            }
        ],
    },
];

export default DiamondDrillsTopText;



