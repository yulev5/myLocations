import { articlesImages, categoriesImages, ErrorPage404ImageSrcSet, GeneralImages, BrandLogos, AboutUsImages, profileReviewImages, FilterImage, categoriesImagesPublicFolder } from "./ImagesList";
import categories from "./categories.json";
import TextTabContent from "../../components/ToolPageComponents/SpecsTabsComponents/TextTabContent";
import BulletsTabContent from "../../components/ToolPageComponents/SpecsTabsComponents/BulletsTabContent";
import YoutubeVideosSlider from "components/ToolPageComponents/YoutubeVideosSlider";

//----------------------------------Categories--------------------------------
// SuperCategories:
// ----------------
// powerTools
// construction
// saws
// technicalTools
// gardeningTools
// cleaningTools

export function GetStaticPathsAllCategories() {
    return {
        paths: [
            { params: { categoryID: 'hammers' } },
            { params: { categoryID: 'diamond-drills' } },
            { params: { categoryID: 'generators' } },
            { params: { categoryID: 'concrete-tools' } },
            { params: { categoryID: 'ground-compactors' } },
            { params: { categoryID: 'drills-drivers' } },
            { params: { categoryID: 'polish-machines' } },
            { params: { categoryID: 'vacuum-cleaner' } },
            { params: { categoryID: 'water-pressure-cleaners' } },
            { params: { categoryID: 'ceramic-cutters-machines-for-rent' } },
            { params: { categoryID: 'extension-cords-for-rent' } },
            { params: { categoryID: 'water-pumps' } },
            { params: { categoryID: 'sanders-for-rent' } },
            { params: { categoryID: 'jigsaws' } },
            { params: { categoryID: 'circular-saws' } },
            { params: { categoryID: 'reciprocating-saws' } },
            { params: { categoryID: 'chain-saws' } },
            { params: { categoryID: 'concrete-saws' } },
            { params: { categoryID: 'thermal-cameras' } },
            { params: { categoryID: 'grinders' } },
            { params: { categoryID: 'laser-levels' } }

        ],
        fallback: false // fallback is set to false because we already know the slugs ahead of time
    };
}

export function GetStaticPathsAllCategoriesAndTools() {
    return {
        paths: [
            { params: { categoryID: 'generators', toolID: 'small-quite-generator-1000-watt' } },
            { params: { categoryID: 'generators', toolID: 'shatal-sr-5500' } },
            { params: { categoryID: 'generators', toolID: 'quiet-generator-rental' } },
            { params: { categoryID: 'generators', toolID: 'bronko-mgb-2800' } },

            { params: { categoryID: 'hammers', toolID: 'bosch-gsh-5e' } },
            { params: { categoryID: 'hammers', toolID: 'bosch-gbh-11de' } },
            { params: { categoryID: 'hammers', toolID: 'makita-hammer-1200' } },
            { params: { categoryID: 'hammers', toolID: 'makita-hm-1202k' } },
            { params: { categoryID: 'hammers', toolID: 'dewalt-d25981' } },
            { params: { categoryID: 'hammers', toolID: 'bosch-gsh-27' } },
            { params: { categoryID: 'hammers', toolID: 'bosch-hammer-drill-2-28-rental' } },
            { params: { categoryID: 'hammers', toolID: 'big-kongo-hammer-makita-1307' } },
            { params: { categoryID: 'hammers', toolID: 'rent-cordless-hammer' } },
            { params: { categoryID: 'hammers', toolID: 'rotating-demolition-hammer-rental' } },

            { params: { categoryID: 'diamond-drills', toolID: 'hanken-sp302mx-diamond-core-cup-drill-bit' } },
            { params: { categoryID: 'diamond-drills', toolID: 'makita-diamond-core-cup-drill-bit' } },

            { params: { categoryID: 'concrete-tools', toolID: 'concrete-cement-mixer-rental' } },
            { params: { categoryID: 'concrete-tools', toolID: 'concrete-vibrator-shatal' } },
            { params: { categoryID: 'concrete-tools', toolID: 'helicopter-for-concrete-rental' } },

            { params: { categoryID: 'ground-compactors', toolID: 'ground-clamp-vibratory-plate-compactor-for-rent' } },
            { params: { categoryID: 'ground-compactors', toolID: 'ground-compactor-shatal' } },
            { params: { categoryID: 'ground-compactors', toolID: 'ground-compactor-for-rent-tamper' } },

            { params: { categoryID: 'drills-drivers', toolID: 'makita-hammer-drill-2470' } },
            { params: { categoryID: 'drills-drivers', toolID: 'impact-screwdriver-for-rent' } },
            { params: { categoryID: 'drills-drivers', toolID: 'bosch-hammer-drill-2-28-rental' } },
            { params: { categoryID: 'drills-drivers', toolID: 'electric-drill-for-rent' } },
            { params: { categoryID: 'drills-drivers', toolID: 'rent-cordless-hammer' } },

            { params: { categoryID: 'polish-machines', toolID: 'polish-machine-for-rent' } },

            { params: { categoryID: 'vacuum-cleaner', toolID: 'industrial-vacuum-cleaner-rental' } },
            { params: { categoryID: 'vacuum-cleaner', toolID: 'wet-dry-vacuum-cleaner-rental' } },

            { params: { categoryID: 'water-pressure-cleaners', toolID: 'water-pressure-cleaner-for-rent' } },

            { params: { categoryID: 'ceramic-cutters-machines-for-rent', toolID: 'rent-ceramic-cutter-machine-60cm' } },
            { params: { categoryID: 'ceramic-cutters-machines-for-rent', toolID: 'ceramic-cutter-machine-75cm-for-rent' } },
            { params: { categoryID: 'ceramic-cutters-machines-for-rent', toolID: 'ceramic-cutter-machine-125cm-for-rent' } },

            { params: { categoryID: 'thermal-cameras', toolID: 'pro-thermal-camera-rental' } },

            { params: { categoryID: 'extension-cords-for-rent', toolID: 'extension-cord-50-meters-for-rent' } },

            { params: { categoryID: 'water-pumps', toolID: 'water-pump-zero-height-rental' } },
            { params: { categoryID: 'water-pumps', toolID: 'water-pump-rental-sewerage' } },

            { params: { categoryID: 'sanders-for-rent', toolID: 'rent-random-orbit-sander' } },
            { params: { categoryID: 'sanders-for-rent', toolID: 'wall-sander-rental' } },
            { params: { categoryID: 'sanders-for-rent', toolID: 'belt-sander-for-rent' } },

            { params: { categoryID: 'jigsaws', toolID: 'jigsaw-for-rent' } },

            { params: { categoryID: 'circular-saws', toolID: 'circular-saw-rental' } },
            { params: { categoryID: 'circular-saws', toolID: 'circular-saw-dewalt' } },

            { params: { categoryID: 'reciprocating-saws', toolID: 'reciprocating-saw-rental' } },
            { params: { categoryID: 'reciprocating-saws', toolID: 'cordless-reciprocating-saw-rental' } },

            { params: { categoryID: 'chain-saws', toolID: 'fuel-chainsaw-rental' } },

            { params: { categoryID: 'concrete-saws', toolID: 'stone-cutter-rental' } },
            { params: { categoryID: 'concrete-saws', toolID: 'asphalt-cutter' } },

            { params: { categoryID: 'grinders', toolID: 'electric-grinder' } },
            { params: { categoryID: 'grinders', toolID: 'cordless-grinder' } },
            { params: { categoryID: 'grinders', toolID: 'grinder-9-inch-for-rent' } },

            { params: { categoryID: 'laser-levels', toolID: '12-lines-laser-level-rental' } },
        ],
        fallback: false // fallback is set to false because we already know the slugs ahead of time
    };
}

export function GetListOfCategories() {
    let listOfCategories = [];
    for (var key in categories) {
        if (!categories.hasOwnProperty(key)) continue;

        var categoryObj = categories[key];
        listOfCategories.push(categoryObj);
    }
    return listOfCategories;
}

export function GetListOfSuperCategories(listOfCategories) {
    let superCategories = {
        "powerTools": {
            id: "powerTools",
            categories: []
        },
        "construction": {
            id: "construction",
            categories: []
        },
        "saws": {
            id: "saws",
            categories: []
        },
        "technicalTools": {
            id: "technicalTools",
            categories: []
        },
        "gardeningTools": {
            id: "gardeningTools",
            categories: []
        },
        "cleaningTools": {
            id: "cleaningTools",
            categories: []
        },
    }

    var i = 0;
    var len = listOfCategories.length;
    while (i < len) {
        var categoryObj = listOfCategories[i];
        superCategories[categoryObj["superCategory"]].categories.push(categoryObj);
        i++
    }

    return superCategories;
}

export function getSuperCatNameByKey(key) {
    switch (key) {
        case 'powerTools':
            return "כלים חשמליים / נטענים";
        case 'construction':
            return "ציוד כבד (ענף הבנייה)";
        case 'saws':
            return "מסורים";
        case 'technicalTools':
            return "ציוד טכני / ידני";
        case 'gardeningTools':
            return "כלי גינון";
        case 'cleaningTools':
            return "ציוד ניקיון";
    }
}

export function SortCategoriesByPopularity(categories) {
    categories.sort(function (a, b) {
        var keyA = a["popularity"];
        var keyB = b["popularity"];
        return keyA - keyB;
    })
}

//----------------------------------Tools--------------------------------
// export function GetListOfTools(OrderedBy) {
//     let listOfTools = [];
//     for (var key in tools) {
//         if (!tools.hasOwnProperty(key)) continue;

//         var toolObj = tools[key];
//         listOfTools.push(toolObj);
//     }

//     return listOfTools;
// }

export function SortToolsListByDefaultSetValue(categoryObj, toolsList) {
    if (categoryObj && categoryObj.defaultSortBy && toolsList) {
        toolsList.sort(function (a, b) {
            var keyA = a[categoryObj.defaultSortBy];
            var keyB = b[categoryObj.defaultSortBy];
            return keyA - keyB;
        });
    }
}

export function GetToolSpecsDataAsTabsData(tool) {
    let tabsData = tool.toolSpecs.map((toolSpec) => {
        return {
            "tabId": toolSpec.id,
            "tabTitle": toolSpec.title,
            "tabContent": CreateTabContentFromData(toolSpec.contentType, toolSpec.content)
        }
    })
    return tabsData;
}


export function getProductSchemaForTool(data) {
    let toolData = data.currentTool;

    //JSON LD
    let jsonLdObj = {
        "@context": "http://schema.org/",
        "@type": "Product",
        "sku": toolData.id,
        "image": "https://power-tools.co.il" + toolData.images[0].src,
        "name": toolData.nameStartWithRental,
        "description": toolData.metaDescription,
        "brand": {
            "@type": "Brand",
            "name": toolData.brand
          },
        "mpn": toolData.id,
        "offers": {
            "@type": "Offer",
            "url": getCurrentToolUrl(data),
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "price": toolData.UpTo24Hours,
            "priceCurrency": "ILS",
            "priceValidUntil": "2050-12-31",
            "seller": {
                "@type": "Organization",
                "name": "השכרת כלי עבודה - Power-Tools"
            }
        }
    }
    return jsonLdObj;
}

export function getCurrentToolUrl(data) {
    return "https://power-tools.co.il/rentals/" + data.urlParamsCategoryID + "/" + data.urlParamsToolID;
}

//----------------------------------Data Functions--------------------------------
function CreateTabContentFromData(contentType, content) {
    //in json we can't save string with few lines
    //instead store it in array and join them to one string with new lines
    if (contentType === 'text' && Array.isArray(content)) {
        content = content.join('\n');
    }

    //Tool Spec types:
    //text
    //bullets - accordion
    switch (contentType) {
        case 'text':
            return <TextTabContent content={content} />
        case 'bullets':
            return <BulletsTabContent content={content} />
        case 'youtubeVideos':
            return <YoutubeVideosSlider content={content} />
        //  <YoutubeVideosSlider content={content} />
        default:
            return null;
    }
}

export function AddCategoriesAndToolsListToData(categories, tools, data) {
    AddCategoriesListToData(categories, data);
    AddToolsListToData(tools, data);
}

export function AddCategoriesListToData(categories, data) {
    data.categories = categories;
    data.superCategories = GetListOfSuperCategories(categories);
}

export function AddToolsListToData(tools, data) {
    data.tools = tools;
}

export function AddCurrentCategoryToDataByQuery(query, data) {
    if (query["categoryID"]) {
        //Save current category page url params
        data.urlParamsCategoryID = query["categoryID"];

        //filter only relevant category for this page
        data.currentCategoryData = data.categories.find(category => category.urlPostFix == data.urlParamsCategoryID);
    }
}

export function AddCurrentCategoryDataToDataBycategoryID(categoryID, data) {
    SaveUrlParamsCategory(categoryID, data);
    data.currentCategoryData = data.categories.find(category => category.urlPostFix == data.urlParamsCategoryID);
}

export function AddCurrentCategoryTools(data) {
    if (data.tools && data.currentCategoryData) {
        data.currentCategoryTools = data.tools.filter(tool => tool.category.includes(data.currentCategoryData.id));
    }
}

export function AddCurrentTool(data) {
    if (data.currentCategoryTools) {
        data.currentTool = data.currentCategoryTools.filter(tool => tool.urlPostFix == data.urlParamsToolID)[0];
    }
}

export function ResetSavedToolUrlParams(data) {
    //Reset url params if previews page was tool page 
    data.urlParamsToolID = null;
    data.currentTool = null;
}


export function SaveUrlParamsCaregoryAndTool(categoryID, toolID, data) {
    SaveUrlParamsCategory(categoryID, data);
    SaveUrlParamsTool(toolID, data);
}

export function SaveUrlParamsCategory(categoryID, data) {
    data.urlParamsCategoryID = categoryID;
}

export function SaveUrlParamsTool(toolID, data) {
    data.urlParamsToolID = toolID;
}

//----------------------------------General Functions--------------------------------

export function getOrganizationSchema() {
    let jsonLdOrganizationObj = {
        "@context": "http://schema.org",
        "@type": "Organization",
        "url": "https://power-tools.co.il/",
        "name": "השכרת כלי עבודה Power Tools",
        "logo": GetPowerToolsLogoIconColorLink(),
        "description": "השכרת כלי עבודה יומית או לפי שעות. השכרת פטיש חציבה, מקדחת יהלום, מהדק אדמה, השכרת מברגה או מקדחה פטישון וכלי עבודה נוספים.",
        "sameAs": [
            "https://www.facebook.com/PowerToolsRental",
            "https://www.youtube.com/channel/UC7xuqn0FV-nvPY4DkvT8z2g"
        ],
        "address": [
            {
                "@type": "PostalAddress",
                "streetAddress": "נחלת יצחק 28",
                "addressLocality": "תל אביב",
                "addressCountry": "ישראל",
                "telephone": "0524343983",
                "postalCode": "6744822"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "דיזנגוף 151",
                "addressLocality": "תל אביב",
                "addressCountry": "ישראל",
                "telephone": "0524343983",
                "postalCode": "6346128"
            }
        ],
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "32.07418317646121",
            "longitude": "34.799460202319594"
        },
        "openingHours": "Mo, Tu, We, Th, Fr, Sa, Su 01:00-01:00",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "0524343983"
        },
        "email": "mailto:powertoolsrentals@gmail.com",
        "foundingDate": "1984"
    }

    return jsonLdOrganizationObj;
}

export const TimeFiltersData = {
    UpTo24Hours: {
        filterId: "UpTo24Hours",
        filterName: "עד 24 שעות",
    },
    UpTo3Days: {
        filterId: "UpTo3Days",
        filterName: "2 - 3 ימים",
    },
    MoreThan3Days: {
        filterId: "MoreThan3Days",
        filterName: "יותר מ-3 ימים",
    }
}

//----------------------------------Images-------------------------------
export function GetImagesListForCategory(categoryId, removeMainImage) {
    let imagesList = categoriesImages(categoryId, true);
    if (removeMainImage)
        imagesList.shift();

    return imagesList;
}

export function getReviewProfileImg(profileImgId) {
    return profileReviewImages(profileImgId)[0];
}

export function GetCategoryMainImage(categoryID) {
    return categoriesImages(categoryID)[0];
}

export function GetCategoryMainImageFromPublicFolder(categoryID) {
    return categoriesImagesPublicFolder(categoryID)[0];
}

export function GetArticleMainImage(articleID) {
    return articlesImages(articleID)[0];
}

export function GetArticleImage(imageID) {
    return articlesImages(imageID)[0];
}

export function GetPowerToolsLogoIconColor() {
    return GeneralImages("PowerToolsLogoColor")[0];
}

export function GetPowerToolsLogoIconColorLink() {
    return "https://power-tools.co.il" + GetPowerToolsLogoIconColor().src;
}

export function GetPowerToolsHero() {
    return GeneralImages("PowerToolsHero")[0];
}

export function GetPowerToolsHeroWithTools() {
    return GeneralImages("PowerToolsHeroWithTools")[0];
}

export function GetPowerToolsHeroWithToolsLoogingLeft() {
    return GeneralImages("PowerToolsHeroWithToolsLoogingLeft")[0];
}

export function GetWhatsAppIcon() {
    return GeneralImages("whatsAppIcon")[0];
}

export function GetWhatsAppIconGrey() {
    return GeneralImages("whatsAppIconGrey")[0];
}

export function GetBluePhoneIcon() {
    return GeneralImages("bluePhoneIcon")[0];
}

export function GetArrowDownIcon() {
    return GeneralImages("arrowDownIcon")[0];
}

export function GetCutterAndPlierIcon() {
    return GeneralImages("cutterAndPlier")[0];
}

export function GetSawIcon() {
    return GeneralImages("saw")[0];
}

export function getQuotationMarkImage() {
    return GeneralImages("quotationMark")[0];
}

export function getCheckMarkImage() {
    return GeneralImages("checkMark")[0];
}

export function getFacebookIconGrey() {
    return GeneralImages("facebookIconGrey")[0];
}

export function getMessangerIconGrey() {
    return GeneralImages("messangerIconGrey")[0];
}

export function getInstagramIconGrey() {
    return GeneralImages("instagramIconGrey")[0];
}

export function getYoutubeIconGrey() {
    return GeneralImages("youtubeIconGrey")[0];
}

export function getSelectPowerToolForRentIconBlue() {
    return GeneralImages("selectPowerToolForRentIconBlue")[0];
}

export function getSelectPowerToolForRentIconOrange() {
    return GeneralImages("selectPowerToolForRentIconOrange")[0];
}

export function Get404ImageSrcSet() {
    return ErrorPage404ImageSrcSet();
}

export function GetFilterImageObj(filterId) {
    return FilterImage(filterId)[0];
}

export function GetToolBoxGreyBackground(filterId) {
    return GeneralImages("greyBackground")[0];
}

// -------------------------------mobile footer icons------------------------
export function getWazeIconBlue() {
    return GeneralImages("wazeBlueBg")[0];
}

export function getYoutubeIconBlue() {
    return GeneralImages("youtubeGreenBlueBg")[0];
}

export function getFacebookIconBlue() {
    return GeneralImages("facebookIconBlue")[0];
}

// -------------------------------toolPageIcons------------------------
export function getPhoneIconGreenBg() {
    return GeneralImages("phoneGreenBg")[0];
}

export function getPhoneIconBlueBg() {
    return GeneralImages("phoneBlueBg")[0];
}

export function getWhatsappIconGreenBg() {
    return GeneralImages("whatsappGreenBg")[0];
}

export function getWhatsappIconBlueBg() {
    return GeneralImages("whatsappBlueBg")[0];
}

export function getMessageIconGreenBg() {
    return GeneralImages("messageGreenBg")[0];
}

export function getMessageIconBlueBg() {
    return GeneralImages("messageBlueBg")[0];
}

export function getNavigateIconGreenBg() {
    return GeneralImages("navigateGreenBg")[0];
}

export function getNavigateIconBlueBg() {
    return GeneralImages("navigateBlueBg")[0];
}

export function getZoomIconGreenBg() {
    return GeneralImages("zoomIconGreenBg")[0];
}

export function getZoomIconBlueBg() {
    return GeneralImages("zoomIconBlueBg")[0];
}

export function getNavBarMenuIcon() {
    return GeneralImages("NavBarMenuIcon")[0];
}

export function getXCloseIconLightGrey() {
    return GeneralImages("XCloseIconLightGrey")[0];
}

//----------------------------------About Us Images--------------------------------
export function getToolsStoreImage() {
    return AboutUsImages("toolStoreImage")[0];
}

export function getAboutUsOldToolDeskImage() {
    return AboutUsImages("oldToolDeskImage")[0];
}

export function getAboutUsDewaltImpactDriverDrillingImage() {
    return AboutUsImages("dewaltImpactDriverScrewing")[0];
}

export function getAboutUsClutterStorageImage() {
    return AboutUsImages("clutterStorageImage")[0];
}

export function getAboutUsCleanAndTidyStorageImage() {
    return AboutUsImages("cleanAndTidyStorageImage")[0];
}

export function getPriceIcon() {
    return AboutUsImages("priceIcon")[0];
}

export function getDiversityIcon() {
    return AboutUsImages("diversityIcon")[0];
}

export function getAvailabilityIcon() {
    return AboutUsImages("availabilityIcon")[0];
}

export function getAProfessionalIcon() {
    return AboutUsImages("professionalIcon")[0];
}

//----------------------------------Brands Logo Names--------------------------------
export function GetListOfAllBWLogosNames() {
    const listOfBWLogoNames = [];
    let sdfds = GetSawIcon();
    listOfBWLogoNames.push(sdfds);
    // let sdfs = GetMakitaBWLogoName();
    // listOfBWLogoNames.push();
    // listOfBWLogoNames.push(GetDewaltBWLogoName());
    // listOfBWLogoNames.push(GetBoschBWLogoName());
    // listOfBWLogoNames.push(GetBlackAndDeckerBWLogoName());
    return listOfBWLogoNames;
}

export function GetMakitaBWLogoName() {
    return GeneralImages("MakitaBWLogoName")[0];
}

export function GetDewaltBWLogoName() {
    return BrandLogos("DewaltBWLogoName")[0];
}

export function GetBoschBWLogoName() {
    return BrandLogos("BoschBWLogoName")[0];
}

export function GetBlackAndDeckerBWLogoName() {
    return BrandLogos("BlackAndDeckerBWLogoName")[0];
}
//-----------------------------------------------------------------------------------
