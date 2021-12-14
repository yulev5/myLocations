import React from 'react';
import { makeStyles } from '@material-ui/core';
import MyAccordion from '../../TextComponents/MyAccordion';
import ToolInfoSection from './ToolInfoSection';

const useStyles = makeStyles({
    SubHeaderStyle: {
    },
});

function ConcreteToolsTopText(props) {
    const classes = useStyles();

    let tabsData = [
        {
            tabId: 'commonUsages',
            tabTitle: 'שימושים נפוצים',
            tabContent: (
                <MyAccordion accordionsList={diamnodsDrillsAccordions} />
            )
        },
    ]

    return (
        <ToolInfoSection tabsData={tabsData} />
    );
}

let diamnodsDrillsAccordions = [
    {
        accordionTitle: "סוגי כלים וציוד נפוץ לעבודה בבטון",
        accordionItems: [
            "מערבל בטון (טפלה) - לערבוב צמנט, חצץ, אבקות, דבקי קרמיקה ושיש וחומרים נוספים ליצירת תערובת",
            "ויברטור לבטון - כלי עבודה רוטט להוצאת בועות אוויר מתוך הבטון בזמן הציקה",
            "מהדק אדמה - להידוק הקרקע לפי הנחת דשא סינטטי, דק, אספלט ועבודות נוספות בהן נדרשת קרקע שטוחה ומהודקת",
            "הליקופטר לבטון - להחלקת משטחי בטון ורצפות בזמן היציקה",
            "משור אספלט - לחיתוך כבישים או רצפות בטון עם דיסק יהלום "
        ],
    },
    {
        accordionTitle: "מחירון השכרת כלי עבודה וציוד לבטון",
        accordionItems: [
            {
                isLink: true,
                linkText: "לחץ כאן לצפייה במחירון השכרת ציוד וכלי עבודה לבטון",
                href: "/rentals/price-list/concrete-tools"
            }
        ],
    },
];

export default ConcreteToolsTopText;



