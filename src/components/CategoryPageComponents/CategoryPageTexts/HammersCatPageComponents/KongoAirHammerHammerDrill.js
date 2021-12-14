import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import HeaderUnderLine from 'components/GeneralComponents/HeaderUnderLine';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    componentContainer: {
        padding: '0 16px'
    },
    HeaderAndUnderlineStyle: {
        display: 'flex',
        marginTop: '48px',
        flexDirection: 'column',
        alignItems: 'center',
    },
    otherToolsHeaderStyle: {
        color: myColors.TurquoisePelorous,
        fontWeight: myFontWeights.Weight700Bold,
        fontSize: myFontSizes.TextFontSize24,
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize32,
        }
    },
    HeaderUnderLineStyle: {
        marginTop: '12px',
        marginBottom: '12px',
        backgroundColor: myColors.TurquoisePelorous,
        width: '80px',
        height: '8px',
        [theme.breakpoints.up('md')]: {
            width: '182px',
        }
    },
    shortDescriptionStyle: {
        color: myColors.BlackMirage,
        fontSize: myFontSizes.TextFontSize16,
        textAlign: 'right',
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize20,
        }
    },
    shortDescriptionSubHeaderStyle: {
        color: myColors.BlackMirage,
        fontSize: myFontSizes.TextFontSize16,
        textAlign: 'right',
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize20,
        }
    },
    subHeader: {
        marginTop: '10px',
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight700Bold,
        fontSize: myFontSizes.TextFontSize18,
        textAlign: 'right',
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize24,
            marginTop: '10px',
        }
    },
    textAndImage: {
        display: 'flex',
    },
    imageContainer:{
        position: 'relative',
        width:'200px',
        // height:'300px',
        [theme.breakpoints.up('md')]: {

        }
    }
}));


function KongoAirHammerHammerDrill(props) {
    const classes = useStyles();
    const { className } = props;

    let headerTitle = "3 סוגי פטישי חציבה";
    let secondLineHeaderTitle = "מה ההבדלים ואיזה כלי מתאים לך?";


    return (
        <div className={classes.componentContainer}>
            <div className={classes.HeaderAndUnderlineStyle}>
                <Typography variant="h3" className={`${classes.otherToolsHeaderStyle}`}>
                    {headerTitle}
                </Typography>
                <Typography variant="h4" className={`${classes.otherToolsHeaderStyle}`}>
                    {secondLineHeaderTitle}
                </Typography>
                <HeaderUnderLine className={`${classes.HeaderUnderLineStyle}`} />
            </div>
            <Typography variant="subtitle1" className={`${classes.shortDescriptionSubHeaderStyle}`}>
                פטיש חציבה חשמלי, פטיש אוויר ופטיש חציבה הידרואלי - כולם בסופו של דבר דופקים איזמל / שוקייה ומאפשרים לשבור ולחצוב בבטון, סלעים, כבישים או קירות בעבודות בנייה.
            </Typography>

            <div className={classes.textAndImage}>
                <div>
                    <Typography variant="h3" className={classes.subHeader}>
                        פטיש אוויר
                    </Typography>
                    <Typography className={`${classes.shortDescriptionStyle}`}>
                        פטיש אוויר (פטיש חציבה פניאומטי) הוא סוג של פטיש חציבה המקבל את הכוח שלו מאוויר דחוס שמגיע ממדחס (קומפרסור). באנגלית נקרא פטיש חציבה זה <span><a href="https://en.wikipedia.org/wiki/Jackhammer" target="_blank">Jackhammer</a></span>.
                    </Typography>
                </div>
            </div>

            <div>
                <Typography variant="h3" className={classes.subHeader}>
                    פטיש חציבה הידרואלי
                </Typography>
                <Typography className={`${classes.shortDescriptionStyle}`}>
                    בפטיש חציבה הידרואלי האיזמל מקבל את כוח הדפיקה על ידי נוזל דחוס. הוא בדרך כלל נמצא על טרקטורים, מחפרונים וכלים גדולים.
                </Typography>
            </div>

            <div>
                <Typography variant="h3" className={classes.subHeader}>
                    פטיש חציבה עם מנוע חשמלי
                </Typography>
                <Typography className={`${classes.shortDescriptionStyle}`}>
                    פטיש חציבה עם מנוע חשמלי הוא הנפוץ ביותר. הוא עובד על ידי חיבור פשוט של כבל חשמל רגיל ולא תלת פאזי, ללא צורך בקומפרסור או אביזרים נוספים.
                    מגיע בגדלים שונים בין 5 ל-35 ק"ג בהתאם לסוג העבודה.
                </Typography>
            </div>

            <div style={{ marginTop: '30px' }}>
                <Typography variant="h3" className={classes.subHeader}>
                    קונגו - לאיזה קטגוריה נכנס הקונגו?
                </Typography>
                <Typography className={`${classes.shortDescriptionStyle}`}>
                    קונגו (או קנגו) הוא שם נרדף לפטיש חציבה גדול. לפעמים הכוונה היא לפטיש אוויר שעובד על לחץ אוויר (כלי עבודה פניאומטי) עם קומפרסור ולעיתים הכוונה היא פשוט לפטיש חציבה גדול.
                </Typography>
            </div>
        </div>
    );
}

export default KongoAirHammerHammerDrill;