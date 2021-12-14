import React, { useContext } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import HeroAndCatShortDesc from 'components/GeneralComponents/HeroAndCatShortDesc';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import Head from 'next/head';
import { getAboutUsDewaltImpactDriverDrillingImage, getAboutUsOldToolDeskImage, getAboutUsClutterStorageImage, getAboutUsCleanAndTidyStorageImage, AddCategoriesListToData } from '../src/assets/Database/DatabaseUtils';
import WhatWeOfferPromoLine from '../src/components/AboutUsComponents/WhatWeOfferPromoLine';
import MainComponentContainer from '../src/components/ContainerComponents/MainComponentContainer';
import ContactUsLine from '../src/components/GeneralComponents/ContactUsLine';
import HeaderUnderLine from '../src/components/GeneralComponents/HeaderUnderLine';
import { GetAllCatagoriesFromMongo, SortOptions } from 'components/Utils/mongodb';
import { UserContext } from 'contexts/MyContext';
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
    heroAndShortTextStyle: {
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    textAndPictureLine: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        marginTop: '48px',
        [theme.breakpoints.up('md')]: {
            width: '100%',
            flexDirection: 'row',
            marginTop: '80px',
            height: '333px',
        }
    },
    textAndPictureLineReversed: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        marginTop: '48px',
        [theme.breakpoints.up('md')]: {
            width: '100%',
            flexDirection: 'row-reverse',
            marginTop: '80px',
            height: '333px',
        }
    },
    textContainer: {
        marginRight: '36px',
        marginLeft: '36px',
        [theme.breakpoints.up('md')]: {
            width: '500px',
            marginRight: '0px',
            marginLeft: '0px',
        }
    },
    textHeaderStyle: {
        textAlign: 'right',
        marginTop: '26px',
        color: myColors.TurquoisePelorous,
        fontWeight: myFontWeights.Weight800ExtraBold,
        fontSize: myFontSizes.TextFontSize24,
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize32,
            fontWeight: myFontWeights.Weight700Bold,
        }
    },
    textContentStyle: {
        textAlign: 'right',
        color: myColors.DarkBlueOuterSpace,
        marginTop: '24px',
        fontSize: myFontSizes.TextFontSize16,
        fontWeight: myFontWeights.Weight500,
        [theme.breakpoints.up('md')]: {
            marginTop: '32px',
            fontSize: myFontSizes.TextFontSize18,
            fontWeight: myFontWeights.Weight600SemiBold,
        }
    },
    imageStyle: {
        marginTop: '24px',
        [theme.breakpoints.up('md')]: {
            width: '500px',
            marginTop: '0px',
        }
    },
    whatWeOfferPromoLineStyle: {
        marginTop: '48px',
        [theme.breakpoints.up('md')]: {
            marginTop: '80px'
        }
    },
    contactUsLineStyle: {
        marginTop: '48px',
        [theme.breakpoints.up('md')]: {
            marginTop: '80px'
        }
    },
    getoolsPromoLine: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '230px',
        [theme.breakpoints.up('md')]: {
            height: '313px',
        }
    },
    getoolsPromoLineHeaderStyle: {
        color: myColors.TurquoisePelorous,
        marginTop: '64px',
        fontSize: myFontSizes.TextFontSize24,
        fontWeight: myFontWeights.Weight700Bold,
        [theme.breakpoints.up('md')]: {
            marginTop: '80px',
            fontSize: myFontSizes.TextFontSize32,
        }
    },
    HeaderUnderLineStyle: {
        backgroundColor: myColors.TurquoisePelorous,
        height: '8px',
        width: '80px',
        marginTop: '8px',
        [theme.breakpoints.up('md')]: {
            width: '182px',
            marginTop: '28px',
        }
    },
    getoolsLinkAndText: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '24px',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            marginTop: '40px',
        }
    },
    beforeLinkTextStyle: {
        fontWeight: myFontWeights.Weight600SemiBold,
        fontSize: myFontSizes.TextFontSize18,
        color: myColors.DarkBlueOuterSpace,
        [theme.breakpoints.up('md')]: {
            marginLeft: '10px',
        }
    },
    aLinkStyle: {
        color: myColors.DarkBlueOuterSpace,
        fontSize: myFontSizes.TextFontSize18,
        fontWeight: myFontWeights.Weight600SemiBold,
    },
}));

export async function getStaticProps(context) {
    const categories = await GetAllCatagoriesFromMongo(SortOptions.popularity);
    return {
        props: {
            categories: categories,
        },
        revalidate: 1,
    }
}

function AboutPowerToolsRentals(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);
    const { categories } = props;

    AddCategoriesListToData(categories, data);

    let pageTitle = "מי אנחנו - השכרת כלי עבודה וציוד מקצועי";
    let description = "מי אנחנו, איזה כלי עבודה אנחנו משכירים ואיך הכל התחיל";

    let oldToolDeskImage = getAboutUsOldToolDeskImage();
    let impactDriverDrillingImage = getAboutUsDewaltImpactDriverDrillingImage();
    let clutterStorageImage = getAboutUsClutterStorageImage();
    let cleanAndTidyStorageImage = getAboutUsCleanAndTidyStorageImage();

    return (
        <MainComponentContainer>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="" />
            </Head>

            <HeroAndCatShortDesc
                h1Title="הסיפור שלנו"
                shortText="מאחורי מגוון עצום של כלים, מקצועיות ושירות ללא פשרות, עומדת אהבה גדולה – כבר יותר מ 40 שנה!"
                imageAlt="הסיפור שלנו"
                imageTitle="מי אנחנו? איך הכל התחיל? ולמה אנחנו כל כך חזקים בתחום השכרת כלי עבודה"
            />


            <div className={classes.textAndPictureLine}>
                <div className={classes.textContainer}>
                    <Typography variant="h3" className={`${classes.textHeaderStyle}`}>
                        איך הכל התחיל
                    </Typography>

                    <Typography className={`${classes.textContentStyle}`}>
                        הכל התחיל לפני יותר מ-40 שנה בחנות "אודי כלי עבודה" שנפתחה בירושלים בשכונת גבעת שאול. השירות המקצועי והידע הרב שקיבל כל מי שנכנס לחנות הדהד במהרה וכל מי שהיה צריך יעוץ מקצועי, מהיר ואמין הגיע אלינו וקיבל אותו. החנות שירתה בצורה נאמנה את תושבי האיזור שהיו מגיעים ברגל, בהמשך התפרסמה בכל ירושלים וסביבתה והיו מגיעים אליה מכל רחבי הארץ.
                    </Typography>
                </div>
                <div className={classes.imageStyle}>
                    <Image
                        src={oldToolDeskImage.src}
                        alt={oldToolDeskImage.alt}
                        title={oldToolDeskImage.title}
                        layout="responsive"
                        objectFit="contain"
                        width={500}
                        height={333}
                        placeholder="blur"
                        blurDataURL={'/images/iconsAndLogos/logos/השכרת-כלי-עבודה-Power-Tools-Logo.svg'}
                    />
                </div>
            </div>

            <div className={classes.textAndPictureLineReversed}>
                <div className={classes.textContainer}>
                    <Typography variant="h3" className={`${classes.textHeaderStyle}`}>
                        כלים, ציוד טכני, ידני ומחלקות
                    </Typography>

                    <Typography className={`${classes.textContentStyle}`}>
                        בנוסף לכלי עבודה מקצועיים וביתיים שהחנות מציעה ישנן מחלקות, אינסטלציה, חשמל, גבס, כלי גינון, סולמות וציוד לעבודה בגובה, כלי עבודה, וציוד לבעלי מקצוע מגוונים מאוד כמו אנשי מזגנים, מסגרים, נגרים, אינסטלטורים, חשמלאים, כלי עבודה למוסכניקים ולמוסך, חומרי בניין כמו צבעים, חומרים מקצועיים לאיטום והדבקה ועוד. עד היום החנות משכירה, מוכרת ומשרתת מגוון רחב של בעלי מקצוע , ומוסדות, מגופים ממשלתיים כמו רשות הטבע והגנים, משרדי ממשלה , משרד הפנים ומשרד האוצר, דרך קבלנים וחברות בנייה ועד אנשי מקצוע, חובבנים ואנשים פרטיים שצריכים כלי עבודה מקצועי ושירות מעולה.
                    </Typography>
                </div>
                <div className={classes.imageStyle}>
                    <Image
                        src={impactDriverDrillingImage.src}
                        alt={impactDriverDrillingImage.alt}
                        title={impactDriverDrillingImage.title}
                        layout="responsive"
                        objectFit="contain"
                        width={500}
                        height={333}
                        placeholder="blur"
                        blurDataURL={'/images/iconsAndLogos/logos/השכרת-כלי-עבודה-Power-Tools-Logo.svg'}
                    />
                </div>
            </div>

            <WhatWeOfferPromoLine className={classes.whatWeOfferPromoLineStyle} />

            <div className={classes.textAndPictureLine}>
                <div className={classes.textContainer}>
                    <Typography variant="h3" className={`${classes.textHeaderStyle}`}>
                        לשכור או לקנות?
                    </Typography>

                    <Typography className={`${classes.textContentStyle}`}>
                        הצורך לשימוש בכלי עבודה מקצועי, אך מנגד, חוסר הצורך בקניה שלו התגלה פעמים רבות במשך השנים ואצל לקוחות רבים. רכישה של כלי עבודה מקצועי דורשת אחסון של הכלי כאשר לא משתמשים בו, תחזוקה שלו בין שימוש לשימוש ולעיתים קרובות והוצאת סכום כסף גבוה בזמן הרכישה. השכרת כלי עבודה פותרת את הבעיות הללו ונותנת מענה לאנשים שצריכים לעבוד עם כלי עבודה מקצועי אבל לא רוצים או פחות כדאי להם לקנות אותו.
                    </Typography>
                </div>

                <div className={classes.imageStyle}>
                    <Image
                        src={clutterStorageImage.src}
                        alt={clutterStorageImage.alt}
                        title={clutterStorageImage.title}
                        layout="responsive"
                        objectFit="contain"
                        width={500}
                        height={333}
                        placeholder="blur"
                        blurDataURL={'/images/iconsAndLogos/logos/השכרת-כלי-עבודה-Power-Tools-Logo.svg'}
                    />
                </div>
            </div>

            <div className={classes.textAndPictureLineReversed}>
                <div className={classes.textContainer}>
                    <Typography variant="h3" className={`${classes.textHeaderStyle}`}>
                        אז מה אנחנו מציעים
                    </Typography>

                    <Typography className={`${classes.textContentStyle}`}>
                        האתר כולו מוקדש להשכרת כלי עבודה. באתר ניתן למצוא מגוון עצום של כלים אותם אנחנו משכירים, לקרוא על כל כלי עבודה או סוג של כלי עבודה, להבין איזה כלי עבודה מתאים לך כדי לבצע את העבודה בצורה הטובה והיעילה ביותר. בנוסף יש לך אפשרות לראות סרטונים מקוריים ולקבל הדרכות כיצד לעבוד עם הכלים בצורה נכונה ובטוחה. כמובן שדרך האתר ניתן ליצור קשר איתנו בצורה נוחה בשלל דרכים כמו טלפון, וואסאפ, שליחת הודעה דרך האתר או אימייל.
                    </Typography>
                </div>

                <div className={classes.imageStyle}>
                    <Image
                        src={cleanAndTidyStorageImage.src}
                        alt={cleanAndTidyStorageImage.alt}
                        title={cleanAndTidyStorageImage.title}
                        layout="responsive"
                        objectFit="contain"
                        width={500}
                        height={333}
                        placeholder="blur"
                        blurDataURL={'/images/iconsAndLogos/logos/השכרת-כלי-עבודה-Power-Tools-Logo.svg'}
                    />
                </div>
            </div>

            <ContactUsLine className={classes.contactUsLineStyle} />

            <div className={classes.getoolsPromoLine}>

                <Typography variant="h3" className={`${classes.getoolsPromoLineHeaderStyle}`}>
                    בא לך בכל זאת לקנות את כלי העבודה?
                </Typography>
                <HeaderUnderLine className={`${classes.HeaderUnderLineStyle}`} />

                <div className={`${classes.getoolsLinkAndText}`}>
                    <Typography className={`${classes.beforeLinkTextStyle}`}>
                        אפשר ליצור איתנו קשר גם בכתובת הזו:
                    </Typography>

                    <a className={`${classes.aLinkStyle}`}
                        href="http://getools.co.il/"
                        target="_blank"
                        rel="noopener"
                    >
                        http://getools.co.il
                    </a>
                </div>
            </div>

        </MainComponentContainer>
    );
}

export default AboutPowerToolsRentals;
