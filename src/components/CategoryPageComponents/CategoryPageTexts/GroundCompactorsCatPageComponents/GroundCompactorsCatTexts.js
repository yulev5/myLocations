import { Container, makeStyles, Typography } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import Image from 'next/image';
import React from 'react';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 15px !important'
    },
    headerH2: {
        marginBottom: '0px',
        fontSize: myFontSizes.TextFontSize24,
        fontWeight: myFontWeights.Weight700Bold,
        color: myColors.DarkBlueOuterSpace,
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            marginBottom: '6px',
            lineHeight: '67px',
            fontSize: myFontSizes.TextFontSize40,
            fontWeight: myFontWeights.Weight800ExtraBold,
        },
    },
    paragraph: {
        marginTop: '10px',
        fontSize: myFontSizes.TextFontSize16,
        fontWeight: myFontWeights.Weight500,
        textAlign: 'right',
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize18,
        },
    },
    indexMenuDiv: {
        display: 'table',
        backgroundColor: myColors.LightTurquoise,
        border: '1px solid #aaa',
        padding: '10px',
        marginBottom: '12px'
    },
    textAndImageContainer: {
        marginTop: '26px',
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            justifyContent: 'space-between',
            // alignItems: 'center'
        },
    },
    textContainer: {
        [theme.breakpoints.up('md')]: {
            width: '49%'
        },
    },
    imgContainer: {
        marginTop: '10px',
        [theme.breakpoints.up('md')]: {
            width: '49%'
        },
    },
    anchorLink: {
        textAlign: 'right',
        fontSize: myFontSizes.TextFontSize16,
        textDecoration: 'underline',
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize18,
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'underline'
            }
        },
    },
    ol: {
        padding: '0 15px'
    },
    row: {
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
    },
    rowReversed: {
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row-reverse',
        },
    },
    subHeaderText: {
        fontSize: myFontSizes.TextFontSize22,
        fontWeight: myFontWeights.Weight700Bold,
        textAlign: 'center',
    },
    paragraphContainer: {
        [theme.breakpoints.up('md')]: {
            width: '49%'
        },
    },
    paragraphText: {

    }

}));

function GroundCompactorsCatTexts(props) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography component="h2" className={classes.headerH2}>
                מידע אודות השכרת מהדק אדמה
            </Typography>

            <div className={`${classes.textAndImageContainer} ${classes.row}`}>

                <div className={classes.textContainer}>
                    <Typography component="p" className={classes.paragraph}>
                        <strong>
                            את החשיבות של הידוק הקרקע עם מהדק אדמה עדיף לגלות לפני תחילת העבודה ולא מאוחר מידי אחרי שהעבודה הסתיימה או כאשר מתגלים פגמים כתוצאה מיסודות לא יציבים.
                        </strong>
                    </Typography>
                    <Typography component="p" className={classes.paragraph}>
                        ריצוף באבנים משתלבות? שדרוג החצר עם דשא סינטטי? ריצוף מדרכה, שביל גישה, חניית רכבים או בניית מדרגות גינה? הצלחת הפרוייקט תלוייה בקרקע יציבה ודחוסה שעליה נתבסס. אפשרויות שונות ודרישות שונות של הידוק יתאימו בכל סוג עבודה ובהתאם לסוג לקרקע.
                    </Typography>
                    <br />

                    <div className={classes.indexMenuDiv}>
                        <Typography component="p" className={classes.paragraph}>
                            מה חשוב לדעת לפני תחילת עבודה עם <strong>מהדק אדמה:</strong>
                        </Typography>
                        <ol className={classes.ol}>
                            <li className={classes.li}>
                                <Link to="whyToCompact" href="#whyToCompact" smooth={true} duration={380} offset={-200}>
                                    <Typography className={classes.anchorLink}>למה צריך בכלל להדק את השטח?</Typography>
                                </Link>
                            </li>
                            <li>
                                <Link to="groundScience" href="#groundScience" smooth={true} duration={380} offset={-200}>
                                    <Typography className={classes.anchorLink}>הידוק אדמה / חצץ / עפר / חול - המדע מאחורי סוג הקרקע</Typography>
                                </Link>
                            </li>
                            <li>
                                <Link to="artificialGrassExample" href="#artificialGrassExample" smooth={true} duration={380} offset={-200}>
                                    <Typography className={classes.anchorLink}>דוגמא להידוק אדמה לפני הנחת דשא סינטטי</Typography>
                                </Link>
                            </li>
                        </ol>
                    </div>
                </div>

                <div className={classes.imgContainer}>
                    <Image
                        src="/images/tools/groundCompactors/הידוק-אדמה-עם-מהדק-אדמה.jpg"
                        width="1024"
                        height="682"
                        alt="מידע אודות השכרת מהדק אדמה - הידוק אדמה רטובה"
                        title="מידע אודות השכרת מהדק אדמה - הידוק אדמה רטובה"
                    />
                </div>

            </div>

            <div id="whyToCompact" name='whyToCompact'>

                <div className={`${classes.textAndImageContainer} ${classes.rowReversed}`}>
                    <div className={classes.paragraphContainer}>
                        <Typography component="h3" className={classes.subHeaderText}>
                            למה צריך בכלל להדק את השטח?
                        </Typography>
                        <Typography component="p" className={classes.paragraph}>
                            <strong>מה פעולת ההידוק עושה?</strong> המטרה הסופית של הידוק האדמה היא להוציא כיסי אוויר שנמצאים בתוך החומר - האדמה, חצץ, חול, אבנים, אבק וכו… בין הגרגירים נמצאים כיסי אוויר וברגע שנפעיל כוח עם פלטת ההידוק הכבדה שדופקת ורוטטת על האדמה נקרב בין החלקיקים ונוציא את כיסי האוויר מתוך החומר - מה שיגרום לחומר להיות דחוס יותר ויציב יותר.
                        </Typography>

                        <Typography component="p" className={classes.paragraph}>
                            <strong>מה קורה כאשר אין הידוק מספיק?</strong> שטח שלא מהודק מספיק יגרום לבלאי גבוה ומהיר של מה שהנחנו מעל. אם זה אבנים משתלבות שיזוזו, יתרוממו או ישקעו. דשא סנטטי שלא יהיה אחיד בגובה שלו ויגרום לאנשים ליפול ולבלאי גבוה. שביל הליכה או חנייה עם חורים, שקעים ובורות שיווצרו בגלל שהבסיס עליו נבנה לא היה מהודק ודחוס.
                        </Typography>
                    </div>

                    <div className={classes.imgContainer}>
                        <Image
                            src="/images/tools/groundCompactors/אבנים-משתלבות-שלא-הודקו-כמו-שצריך.jpg"
                            width="1000"
                            height="633"
                            alt="אבנים משתלבות שהתרוממו, שקעו וזזו בגלל הידוק לא מספיק של האדמה"
                            title="אבנים משתלבות שהתרוממו, שקעו וזזו בגלל הידוק לא מספיק של האדמה"
                        />
                    </div>

                </div>
            </div>

            <div id="groundScience" name='groundScience'>

                <div className={`${classes.textAndImageContainer} ${classes.row}`}>
                    <div className={classes.paragraphContainer}>
                        <Typography component="h3" className={classes.subHeaderText}>
                            הידוק אדמה / חצץ / עפר / חול - המדע מאחורי סוג הקרקע
                        </Typography>
                        <Typography component="p" className={classes.paragraph}>
                            הבנת המדע מאחורי תהליך הידוק האדמה תעזור לכם להגיע לתוצאות טובות יותר ואולי אפילו להפוך את עבודת ההידוק למעניינת יותר.
                        </Typography>

                        <Typography component="p" className={classes.paragraph}>
                            <strong>סוגי הקרקע והאדמה להידוק:</strong> נהוג לחלק את סוגי הקרקע ל-4: חרסית, טין, חול וחצץ כאשר המאפיין הבולט שמבדיל בין הסוגים הוא גודל החלקיקים והאבנים המרכיבים את המצע. הסוג הראשון הוא עם החלקיקים הקטנים ביותר (עד 0.004 מ"מ) והחצץ הוא עם החלקיקים הגדולים ביותר (עד 7 ס"מ). כל מה שגדול מכך נחשב סלע.
                        </Typography>

                        <Typography component="p" className={classes.paragraph}>
                            <span style={{ textDecoration: 'underline' }}>קרקע המכילה תערובת של חלקיקים בגדלים שונים תהיה הכי קלה ויעילה להידוק</span> מכיוון שכל חלק בגודל שלו ממלא חלל מתאים וסה"כ ההידוק יוצא חזק יותר מאשר מצע שעשוי רק מחלקיקים שהם אחידים ובאותו הגודל.
                        </Typography>

                        <Typography component="p" className={classes.paragraph}>
                            לדוגמא, קרקע העשויה מחול עדין ואחיד שכל הגרגירים שלו באותו הגודל תהיה קשה להידוק. מצד שני גם חצץ העשוי מאבנים בגודל אחיד (עם חלקיקים גדולים בהרבה מחול) יהיה קשה להידוק.
                            ההידוק הטוב ביותר יושג ע"י שילוב של כמה סוגי מצעים עם חלקיקים בגדלים שונים כאשר החלקיקים הקטנים ימלאו את החללים בן החלקיקים הגדולים יותר ולבסוף יושג משטח שהוא דחוס מאוד עם יכולת התנגדות גבוהה ועמידות.
                        </Typography>
                    </div>

                    <div className={classes.imgContainer}>
                        <Image
                            src="/images/tools/groundCompactors/סוגי-אדמה-וקרקע-להידוק.jpg"
                            width="1376"
                            height="951"
                            alt="סוגי אדמה ומצע שונים להידוק - חצץ, עפר, חול, ומספר סוגי אדמה עם חלקיקים בגדלים שונים"
                            title="סוגי אדמה ומצע שונים להידוק - חצץ, עפר, חול, ומספר סוגי אדמה עם חלקיקים בגדלים שונים"
                        />
                    </div>

                </div>
            </div>


            <div id="artificialGrassExample" name='artificialGrassExample'>

                <div className={`${classes.textAndImageContainer} ${classes.rowReversed}`}>
                    <div className={classes.paragraphContainer}>
                        <Typography component="h3" className={classes.subHeaderText}>
                            התקנת דשא סינטטי - הידוק אדמה וחצץ עם מהדק אדמה לפני הנחת דשא סינטטי
                        </Typography>
                        <Typography component="p" className={classes.paragraph}>
                            <strong>שלב הכנת הקרקע והשטח הוא השלב החשוב ביותר בהתקנת דשא סינטטי.</strong>
                        </Typography>

                        <Typography component="p" className={classes.paragraph}>
                            לפני הנחת דשא סינטטי, מסירים אדמה וסלעים ודוחסים חצץ כדי ליצור בסיס יציב.
                            הדחיסה וההידוק מגבירים את היציבות של הקרקע והעומס שהיא יכולה לשאת ומונעים שקיעה, התרוממות, תזוזה והתקמטות של הדשא הסינטטי ומאריכים את העמידות שלו לאורך שנים.
                        </Typography>

                        <Typography component="p" className={classes.paragraph}>
                            בעיות דשא סינטטי של קריסה, שקיעה, התרוממות עם חלקים בולטים, והתקמטות הן תוצאה של התקנה לא נכונה וקרקע שלא מהודקת כמו שצריך.
                        </Typography>

                        <Typography component="p" className={classes.paragraph}>
                            <span style={{ textDecoration: 'underline' }}>התקנת דשא סינטטי על אדמה וקרקע מהודקת בצורה נכונה תתן:</span>
                            <ul className={classes.ol}>
                                <li>תתן חוזק ותמיכה לדשא הסינטטי</li>
                                <li>הארכת עמידות ואורך החיים של הדשא</li>
                                <li>תאפשר התקנת דשא סינטטי קלה ומהירה יותר</li>
                                <li>תאפשר ניקוז של מים והתמודדות בפני קור ואף קיפאון</li>
                                <li>מניעת שקיעות והתרופפות, קימוטים, התרוממויות ובליטות</li>
                                <li>תאפשר החלפת הדשא הסינטטי בעתיד בקלות ללא צורך בהידוק נוסף</li>
                            </ul>
                        </Typography>
                    </div>

                    <div className={classes.imgContainer}>

                        <Image
                            src="/images/tools/groundCompactors/שטח-אדמה-וחצץ-להידוק-והנחת-דשא-סינטטי.jpg"
                            width="1600"
                            height="1200"
                            alt="לפני ההידוק - גינה עם שטח חצץ הנדרש להידוק לפני הנחת שטיח דשא סינטטי"
                            title="לפני ההידוק - גינה עם שטח חצץ הנדרש להידוק לפני הנחת שטיח דשא סינטטי"
                        />

                        <Image
                            src="/images/tools/groundCompactors/מהדק-אדמה-בזמן-הידוק-לפני-דשא-סינטטי.jpg"
                            width="1200"
                            height="1318"
                            alt="התקנת דשא סינטטי - שלב הידוק האדמה והחצץ עם מהדק אדמה"
                            title="התקנת דשא סינטטי - שלב הידוק האדמה והחצץ עם מהדק אדמה"
                        />

                        <Image
                            src="/images/tools/groundCompactors/אחרי-הידוק-האדמה-והנחת-מרבד-דשא-סינטטי.jpg"
                            width="1600"
                            height="1200"
                            alt="השלב הסופי - גינה עם דשא סינטטי שהונח על קרקע שהודקה כמו שצריך במהדק אדמה"
                            title="השלב הסופי - גינה עם דשא סינטטי שהונח על קרקע שהודקה כמו שצריך במהדק אדמה"
                        />
                    </div>

                </div>
            </div>

        </Container>
    );
}

export default GroundCompactorsCatTexts;