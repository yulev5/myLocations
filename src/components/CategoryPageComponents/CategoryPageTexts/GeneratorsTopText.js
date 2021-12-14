import React from 'react';
import { makeStyles } from '@material-ui/core';
import MyAccordion from '../../TextComponents/MyAccordion';
import TabsInfoSection from './infoTabsComponenets/TabsInfoSection';
import ToolInfoSection from './ToolInfoSection';

const useStyles = makeStyles({
});

function GeneratorsTopText(props) {
    const classes = useStyles();

    let tabsData = [
        {
            tabId: 'commonUsages',
            tabTitle: 'שימושים נפוצים',
            tabContent: (
                <MyAccordion accordionsList={generatorsAccordions} />
            )
        },
        {
            tabId: 'differentKinds',
            tabTitle: 'סוגי גנרטורים מיוחדים',
            tabContent: (
                <div className={classes.categoryInfoContainer}>
                </div>)
        },
    ]

    return (
        <ToolInfoSection tabsData={tabsData} />
    );
}

let generatorsAccordions = [
    {
        accordionTitle: "שימושים נפוצים",
        accordionItems: [
            "הפעלת כלי עבודה בשטח",
            "גיבוי במצבי חירום של הפסקת חשמל, לבית או בשטח",
            "אספקת חשמל לציוד קמפינג, בטיולים או בקרוואן",
            "הפעלת ציוד אלקטרוני, כמו מערכת הגברה או מקרר",
            "ריתוך עם גנרטור רתכת ייעודי לעבודות ריתוך"
        ],
    },
    {
        accordionTitle: "סוגי גנרטורים מיוחדים",
        accordionItems: [
            "גנרטור עם מייצב מתח AVR להפעלת ציוד אלקטרוני",
            "גנרטור מושתק ו/או אינוורטר",
            "גנרטור תלת פאזי",
            "גנרטור קטן ונייד",
            "גנרטור רתכת",
            "גנרטורים העובדים על בנזין או גדולים עד ענקיים עם מנוע דיזל העובדים על סולר"
        ],
    },
    {
        accordionTitle: "מחירון השכרת גנרטורים",
        accordionItems: [
            {
                isLink: true,
                linkText: "לחץ כאן לצפייה במחירון השכרת גנרטורים",
                href: "/rentals/price-list/generators"
            }
        ],
    },
];

export default GeneratorsTopText;



