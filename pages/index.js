import Head from "next/head";
import { useContext, useEffect } from "react";
import { GAEvent, GAEventCat, GAEventAction } from "../src/components/Utils/Tracking";
import MainComponentContainer from "../src/components/ContainerComponents/MainComponentContainer";
import { useRouter } from 'next/router'
import { scrollToCategoriesOnMainPage, scrollToFooter } from "../src/components/Utils/scrollingFunctions";
import MainPageComponents from "../src/components/MainPageComponents/MainPageComponents";
import { AddCategoriesListToData, getOrganizationSchema } from "assets/Database/DatabaseUtils";
import { GetAllCatagoriesFromMongo, SortOptions } from 'components/Utils/mongodb';
import { UserContext } from "contexts/MyContext";
import { ogTags } from "assets/SharedTexts";

export async function getStaticProps(context) {
    const categories = await GetAllCatagoriesFromMongo(SortOptions.popularity);
    return {
        props: {
            categories: categories,
        },
        revalidate: 1,
    }
}

function index({ categories }) {
    const router = useRouter();
    const { data, storeData } = useContext(UserContext);

    AddCategoriesListToData(categories, data);

    useEffect(() => {
        GAEvent(GAEventCat.TOOLS_FOR_RENT_PAGE, GAEventAction.PAGE_VIEWED);
        storeData(data);
    })


    // let pageTitle = "השכרת כלי עבודה - מחירים, רשימת כלים וציוד להשכרה";
    // let pageTitle = "השכרת כלי עבודה - מגוון רחב | מחירים משתלמים | ציוד וכלים להשכרה בקליק";
    // let pageTitle = "השכרת כלי עבודה | חסוך עד 30% בהשכרת כלים וציוד לבנייה | תל אביב | ירושלים";
    let pageTitle = "Power-Tools | השכרת כלי עבודה | חסוך 30% בהשכרת כלים וציוד לבנייה";
    
    // let description = "צריך כלי עבודה? השכרה של מגוון כלי עבודה ליום, כמה שעות או ימים. השכרת פטיש חציבה מקדחת יהלום וכלי עבודה נוספים";
    let description = "השכרת כלי עבודה - מגוון ענק של ציוד בנייה וכלים לכל סוגי העבודות. השכרה מהירה ואפשרות למשלוח או איסוף בתל אביב או בירושלים - צפה במחירון השכרת כלי עבודה הזול בארץ.";

    let ogPageTitle = "השכרת כלי עבודה - ציוד לבנייה וכלים להשכרה בקליק";
    let ogDescription = "השכרת כלי עבודה - ציוד לבנייה וכלים להשכרה בתל אביב או בירושלים";

    if (router.query.scrollTo === 'categoriesToolsForRent') {
        scrollToCategoriesOnMainPage();
    } else if (router.query.scrollTo === 'footerContactUs') {
        scrollToFooter();
    }

    return (
        <MainComponentContainer>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content="השכרת כלי עבודה, השכרת ציוד לבנייה, השכרה של כלי עבודה, השכרת כלים, השכרת כלי בניין, השכרת כלים לעבודה, השכרת כלי חשמל, השכרת ציוד לבניין, השכרת כלי עבודה בתל אביב, השכרת כלי עבודה בירושלים" />
                <link rel="canonical" href="https://power-tools.co.il" />

                <meta property="og:title" content={ogPageTitle} key="ogtitle" />
                <meta property="og:description" content={ogDescription} key="ogdesc" />
                <meta property="og:site_name" content={ogTags.siteName} key="ogsitename" />
                <meta property="og:url" content="https://power-tools.co.il/" />
                <meta property="og:locale" content="he_IL" />
                <meta property="og:type" content="website" />

                <meta property="og:image" content="https://power-tools.co.il/images/iconsAndLogos/logos/השכרת-כלי-עבודה-Power-Tools-OG1.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content={ogPageTitle} />

                <meta name="p:domain_verify" content="49919fa6e255e8253088a6cac8b857b2"/>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
                />
            </Head>

            <MainPageComponents />

        </MainComponentContainer>
    );
}





//Add this if I want to know the device of the use 
// export async function getServerSideProps(context) {
//     const UA = context.req.headers['user-agent'];
//     const isMobile = Boolean(UA.match(
//         /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
//     ))

//     return {
//         props: {
//             deviceType: isMobile ? 'mobile' : 'desktop',
//         }
//     }
// }

export default index;