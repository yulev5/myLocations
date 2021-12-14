export function categoriesImagesPublicFolder(categoryID) {
    switch (categoryID) {
        case "generators":
            return [
                {
                    src: `/images/tools/generators/GeneratorCatImages/השכרת-גנרטורים.png`,
                    alt: 'השכרת גנרטור',
                    title: 'השכרת גנרטורים בגדלים שונים למגוון עבודות',
                    width: '',
                    height: '',
                }
            ]
            break;
        case "hammers":
            return [
                {
                    src: `/images/tools/hammers/השכרת-פטישי-חציבה-קונגו.png`,
                    alt: 'השכרת פטיש חציבה',
                    title: 'השכרת פטישי חציבה בגדלים שונים למגוון עבודות'
                },
                {
                    src: `/images/tools/hammers/HammersCatPageImages/Demolition-Hammer-Chisel-Tile.jpg`,
                    alt: 'השכרת פטיש חציבה קטן',
                    title: 'בתמונה - השכרת פטיש חציבה קטן לקילוף אריחים מקירות'
                },
                {
                    src: `/images/tools/hammers/HammersCatPageImages/Demolition-Hammer-Concrete.jpg`,
                    alt: 'השכרת פטיש חציבה 10 קילו',
                    title: 'בתמונה - פטיש חציבה מהשכרה לחפירה בבטון לפני הוספת מוטות חיזוק מברזל'
                },
                {
                    src: `/images/tools/hammers/HammersCatPageImages/Demolition-Hammer-Concrete-wall.jpg`,
                    alt: 'השכרת פטיש חציבה בירושלים',
                    title: 'בתמונה - השכרת פטיש חציבה במשקל 5 קילו לחציבה בקיר בטון בירושלים לפני הדבקת אבן ירושלמית '
                },
                {
                    src: `/images/tools/hammers/HammersCatPageImages/Demolition-Hammer-Concrete-wall-drill.jpg`,
                    alt: 'קידוח קיר בטון בעזרת פטיש חציבה בינוני',
                    title: 'קידוח חורים בקיר בטון וסיתות בעזרת פטיש חציבה בגודל בינוני'
                },
                {
                    src: `/images/tools/hammers/HammersCatPageImages/Demolition-Hammer-floor.jpg`,
                    alt: 'השכרת פטיש חציבה בירושלים לחפירה והריסת רצפת בטון',
                    title: 'פטיש חציבה גדול במשקל 15 קילו בזמן עבודת חציבה והריסת רצפת בטון בירושלים'
                },
                {
                    src: `/images/tools/hammers/HammersCatPageImages/Demolition-Hammer-stone-chiseling.jpg`,
                    alt: 'קילוף וסיתות בקיר טיח בעזרת פטיש חציבה מהשכרה',
                    title: 'השכרת פטיש חציבה לקילוף טיח מקירות'
                },
                {
                    src: `/images/tools/hammers/HammersCatPageImages/Rental-of-Demolition-Hammer-Concrete-Ceiling.jpg`,
                    alt: 'עבודת סיתות כלפי מעלה עם פטיש חציבה 5 קילו מהשכרה',
                    title: 'עבודה נוחה גם כלפי מעלה עם פטיש חציבה בגודל המתאים לעבודה זאת במשקל 5 קילו'
                },
                {
                    src: `/images/tools/hammers/HammersCatPageImages/Rent-Demolition-Hammer-Concrete-Foor.jpg`,
                    alt: 'השכרת פטיש חציבה קונגו בירושלים או תל אביב',
                    title: 'השכרת פטיש חציבה קונגו גדול במיוחד לעבודות חציבה הקשות ביותר'
                }
            ]
            break;

        case "diamondDrills":
            return [
                {
                    src: `/images/tools/diamondDrills/השכרת-מקדחות-יהלום.png`,
                    alt: 'השכרת מקדחת יהלום',
                    title: 'השכרת מקדחות יהלום ידנית או על סטנד לקידוחים בבטון ואבן'
                }
            ]
            break;

        case "concreteTools":
            return [
                {
                    src: `/images/tools/concreteTools/concreteToolsCatImages/השכרת-כלי-עבודה-לבטון.png`,
                    alt: 'השכרת מערבל בטון, הליקופטר לבטון וכלי עבודה נוספים לבטון',
                    title: 'השכרת כלי עבודה וציוד לעבודה עם בטון'
                }
            ]
            break;

        case "groundCompactors":
            return [
                {
                    src: `/images/tools/groundCompactors/מהדקי-אדמה-גבקה-להשכרה.png`,
                    alt: 'השכרת מהדקי אדמה',
                    title: 'השכרת מהדקי אדמה'
                }
            ]
            break;

        case "polishMachines":
            return [
                {
                    src: `/images/tools/polishMachines/מכונת-פוליש-להשכרה.png`,
                    alt: 'השכרת מכונות פוליש לליטוש, שיוף וניקוי רצפות',
                    title: 'השכרת מכונות פוליש לניקוי רצפות, ליטוש ושיוף דקים, הברקת משטחים ועוד'
                }
            ]
            break;

        case "vacuumCleaners":
            return [
                {
                    src: `/images/tools/vacuumCleaner/metaboPulseVacuumCleaner/השכרת-שואב-אבק-תעשייתי.png`,
                    alt: 'השכרת שואבי אבק תעשייתיים',
                    title: 'השכרת שואבי אבק תעשייתיים'
                }
            ]
            break;

        case "waterPressureCleaners":
            return [
                {
                    src: `/images/tools/waterPressureCleaner/השכרת-מכונות-שטיפה-בלחץ-גרניק.png`,
                    alt: 'השכרת מכונות שטיפה',
                    title: 'השכרת מכונות שטיפה בלחץ גבוה - גרניק'
                }
            ]
            break;

        case "drillsAndDrivers":
            return [
                {
                    src: `/images/tools/drillsAndDrivers/השכרת-מקדחות-מברגות.png`,
                    alt: 'השכרת מקדחות, מברגות ומברגות אימפקט',
                    title: 'השכרת מקדחות מברגות ומברגות אימפקט לקידוחים במתכת, עץ, בטון ואבן, והברגת ברגים'
                }
            ]
            break;

        case "ceramicCuttersMachines":
            return [
                {
                    src: `/images/tools/ceramicCuttersMachines/ceramicMachineCategoryImages/מכונות-קרמיקה-להשכרה.png`,
                    alt: 'מכונות לחיתוך קרמיקה להשכרה',
                    title: 'השכרת מכונות לחיתוך קרמיקה, מכשירים מקצועיים לחיתוך קרמיקה של חברת סיגמא, מונטוליט או שטל'
                }
            ]
            break;

        case "ExtensionCords":
            return [
                {
                    src: `/images/tools/ExtensionCords/ExtensionCordsCatImages/השכרת-כבלים-מאריכים.png`,
                    alt: 'כבלים מאריכים להשכרה',
                    title: 'תופי כבלים מאריכים וכבלי חשמל להשכרה'
                }
            ]
            break;

        case "waterPumps":
            return [
                {
                    src: `/images/tools/waterPumps/waterPumpsCategoryImages/השכרת-משאבות-מים.png`,
                    alt: 'משאבות מים להשכרה',
                    title: 'משאבות מים להשכרה - השכרת משאבות מים'
                }
            ]
            break;

        case "sanders":
            return [
                {
                    src: `/images/tools/sanders/SanderCategoryImages/השכרת-מלטשות.png`,
                    alt: 'מלטשות להשכרה, מלטשת סיבובית, אקצנטרית, רוטטת או סרט לעץ מתכת בטון',
                    title: 'מלטשות להשכרה, מלטשת סיבובית, אקצנטרית, רוטטת או סרט לעץ מתכת בטון'
                }
            ]
            break;

        case "jigSaws":
            return [
                {
                    src: `/images/tools/jigsaws/השכרת-מסור-אנכי-גיגסו.png`,
                    alt: 'השכרת מסור גיגסו אנכי לחיתוך וניסור בתל אביב או ירושלים',
                    title: 'השכרת מסור גיגסו אנכי לחיתוך וניסור בתל אביב או ירושלים'
                }
            ]
            break;

        case "circularSaws":
            return [
                {
                    src: `/images/tools/circularsaws/categoryImages/מסור-עגול-להשכרה.png`,
                    alt: 'השכרת מסור עגול',
                    title: 'השכרת מסור עגול'
                }
            ]
            break;

        case "reciprocatingSaws":
            return [
                {
                    src: `/images/tools/reciprocateSaws/categoryImages/מסור-חרב-להשכרה.png`,
                    alt: 'השכרת מסור חרב',
                    title: 'השכרת מסור חרב'
                }
            ]
            break;

        case "chainSaws":
            return [
                {
                    src: `/images/tools/chainSaws/categoryImages/השכרת-מסור-שרשרת.png`,
                    alt: 'השכרת מסור שרשרת',
                    title: 'השכרת מסור שרשרת'
                }
            ]
            break;

        default:
            return [
                {
                    src: `/images/tools/concreteTools/concreteToolsCatImages/השכרת-מערבל-בטון.png`,
                    alt: 'השכרת מערבל בטון, הליקופטר לבטון וכלי עבודה נוספים לבטון',
                    title: 'השכרת מגוון כלי עבודה וציוד לעבודה עם בטון'
                }
            ]
            break;

    }
}

export function FilterImage(filterId) {
    switch (filterId) {
        case "5KG":
            return [
                {
                    src: `/images/filterImages/weightFilterImages/kilogram_weight_5.svg`,
                    alt: '5 ק"ג',
                    title: '5 ק"ג'
                }
            ]
            break;

        case "7.5KG":
            return [
                {
                    src: `/images/filterImages/weightFilterImages/kilogram_weight_7.5.svg`,
                    alt: '7.5 ק"ג',
                    title: '7.5 ק"ג'
                }
            ]
            break;

        case "10KG":
            return [
                {
                    src: `/images/filterImages/weightFilterImages/kilogram_weight_10.svg`,
                    alt: '10 ק"ג',
                    title: '10 ק"ג'
                }
            ]
            break;

        case "20KG":
            return [
                {
                    src: `/images/filterImages/weightFilterImages/kilogram_weight_20.svg`,
                    alt: '20 ק"ג',
                    title: '20 ק"ג'
                }
            ]
            break;

        case "30KG":
            return [
                {
                    src: `/images/filterImages/weightFilterImages/kilogram_weight_30.svg`,
                    alt: '30 ק"ג',
                    title: '30 ק"ג'
                }
            ]
            break;

        case "timeFilterIcon":
            return [
                {
                    src: `/images/filterImages/timeFilterImages/Time_Filter.svg`,
                    alt: '',
                    title: ''
                }
            ]
            break;

        case "diameterMax3":
            return [
                {
                    src: `/images/filterImages/diameterFilterImages/diameterMax3.svg`,
                    alt: 'עד " 3 אינצ\' 7.5 ס"מ',
                    title: 'עד "3 אינצ\' 7.5 ס"מ'
                }
            ]
            break;

        case "diameter3To6":
            return [
                {
                    src: `/images/filterImages/diameterFilterImages/diameter3To6.svg`,
                    alt: '7-15 אינץ\' - 3-6 ס"מ',
                    title: '7-15 אינץ\' - 3-6 ס"מ'
                }
            ]
            break;

        case "diameter6To12":
            return [
                {
                    src: `/images/filterImages/diameterFilterImages/diameter6To12.svg`,
                    alt: '6-12 אינץ\'- 15-30 ס"מ',
                    title: '6-12 אינץ\'- 15-30 ס"מ'
                }
            ]
            break;

    }
}

//----------------------------------------
//--------End of new Image objects--------
//----------------------------------------
export function GeneralImages(imageID) {
    switch (imageID) {
        case "whatsAppIcon":
            return [
                {
                    src: '/images/iconsAndLogos/icons/צור-קשר-בהודעת-ווסאפ-טלפון-השכרת-כלי-עבודה.svg',
                    alt: 'כתוב לנו הודעה בוואסאפ',
                    title: 'צור איתנו קשר ע"י שליחת הודעה בוואסאפ'
                }
            ]
            break;
        case "whatsAppIconGrey":
            return [
                {
                    src: '/images/iconsAndLogos/icons/whatsapp-Icon-Power-Tools-Rentals-Grey.svg',
                    alt: 'כתוב לנו הודעה בוואסאפ',
                    title: 'צור איתנו קשר ע"י שליחת הודעה בוואסאפ'
                }
            ]
            break;
        case "bluePhoneIcon":
            return [
                {
                    src: '/images/iconsAndLogos/icons/bluePhoneIcon.svg',
                    alt: 'טלפון השכרת כלי עבודה',
                    title: 'טלפון השכרת כלי עבודה'
                }
            ]
            break;
        case "facebookIconGrey":
            return [
                {
                    src: '/images/iconsAndLogos/icons/facebook-logo-grey.svg',
                    alt: 'דף הפייסבוק שלנו',
                    title: 'צפה וכתוב לנו הודעה בדף הפייסבוק שלנו'
                }
            ]
            break;
        case "messangerIconGrey":
            return [
                {
                    src: '/images/iconsAndLogos/icons/messanger-icon-Grey.svg',
                    alt: 'כתוב לנו הודעה בפייסבוק',
                    title: 'כתוב לנו הודעה בפייסבוק'
                }
            ]
            break;
        case "instagramIconGrey":
            return [
                {
                    src: '/images/iconsAndLogos/icons/instagram-logo-grey.svg',
                    alt: 'כתוב לנו הודעה וצפה בדף האינסטגרם',
                    title: 'כתוב לנו הודעה וצפה בדף האינסטגרם'
                }
            ]
            break;
        case "youtubeIconGrey":
            return [
                {
                    src: '/images/iconsAndLogos/icons/youtube-logo-grey.svg',
                    alt: 'צפה בוידאו וסרטונים של כלי עבודה מהשכרה בערוץ היוטיוב שלנו',
                    title: 'צפה בוידאו וסרטונים של כלי עבודה מהשכרה בערוץ היוטיוב שלנו'
                }
            ]
            break;
        case "PowerToolsLogoColor":
            return [
                {
                    src: '/images/iconsAndLogos/logos/השכרת-כלי-עבודה-Power-Tools-Logo.svg',
                    alt: 'השכרת כלי עבודה - Power-Tools.co.il',
                    title: 'השכרת כלי עבודה, ציוד וכלים בתל אביב וירושלים'
                }
            ]
            break;
        case "PowerToolsHero":
            return [
                {
                    src: '/images/iconsAndLogos/logos/power-tools-hero.svg',
                    alt: 'השכרת כלי עבודה - מקצועיים בתחום כמו הגיבור שלנו :)',
                    title: 'השכרת כלי עבודה - מקצועיים בתחום כמו הגיבור שלנו :)'
                }
            ]
            break;

        case "PowerToolsHeroWithTools":
            return [
                {
                    src: `/images/iconsAndLogos/logos/השכרת-כלי-עבודה-ציוד-כלים-כלי-בניין-להשכרה.svg`,
                    alt: 'השכרת כלי עבודה - ציוד, כלים, כלי בניין וכלי בנייה להשכרה',
                    title: 'השכרת כלי עבודה - ציוד, כלים, כלי בניין וכלי בנייה להשכרה'
                }
            ]
            break;

        case "PowerToolsHeroWithToolsLoogingLeft":
            return [
                {
                    src: '/images/iconsAndLogos/logos/power-tools-hero-with-tools-looking-left.svg',
                    alt: 'השכרת כלי עבודה - מקצועיים בתחום כמו הגיבור שלנו :)',
                    title: 'השכרת כלי עבודה - מקצועיים בתחום כמו הגיבור שלנו :)'
                }
            ]
            break;

        case "arrowDownIcon":
            return [
                {
                    src: '/images/iconsAndLogos/icons/arrow-down.svg',
                    alt: 'גלול מטה לצפייה ברשימת כלי עבודה להשכרה',
                    title: 'גלול מטה לצפייה ברשימת כלי עבודה להשכרה, ובחירת הקטגוריה של כלי העבודה שאתה מחפש'
                }
            ]
            break;

        case "cutterAndPlier":
            return [
                {
                    src: '/images/iconsAndLogos/logos/CutterAndPlier.svg',
                    alt: 'שכור את כלי העבודה',
                    title: 'בחר את כלי העבודה שאתה זקוק לו מתוך מגוון כלי העבודה להשכרה באתר - שכור אותו'
                }
            ]
            break;

        case "saw":
            return [
                {
                    src: '/images/iconsAndLogos/logos/Saw.svg',
                    alt: 'בצע את העבודה',
                    title: 'בצע את העבודה עם כלי העבודה שהשכרת'
                }
            ]
            break;
        case "MakitaBWLogoName":
            return [
                {
                    src: '/images/logosNamesBW/makita-power-tools-rental-logo-name-bw.svg',
                    alt: 'השכרת כלי עבודה מקיטה',
                    title: 'השכרת כלי עבודה מקצועיים של חברת מקיטה '
                }
            ]
            break;

        case "quotationMark":
            return [
                {
                    src: `/images/iconsAndLogos/icons/quotes.svg`,
                    alt: 'חוות דעת עלינו - שירות מקצועי ולקוחות מרוצים',
                    title: 'חוות דעת עלינו - שירות מקצועי ולקוחות מרוצים'
                }
            ]
            break;

        case "checkMark":
            return [
                {
                    src: '/images/iconsAndLogos/icons/check_box.svg',
                }
            ]
            break;

        // -------------------------------toolPageIcons------------------------
        case "phoneGreenBg":
            return [
                {
                    src: '/images/toolPageIcons/phoneGreenBg.svg',
                    alt: 'לחץ כדי להתקשר לחנות',
                    title: 'לחץ כדי להתקשר לחנות',
                }
            ]
            break;
        case "phoneBlueBg":
            return [
                {
                    src: '/images/toolPageIcons/phoneBlueBg.svg',
                    alt: 'לחץ כדי להתקשר לחנות',
                    title: 'לחץ כדי להתקשר לחנות',
                }
            ]
            break;
        case "whatsappGreenBg":
            return [
                {
                    src: '/images/toolPageIcons/whatsappGreenBg.svg',
                    alt: 'לחץ לשליחת הודעת וואטסאפ מהירה',
                    title: 'לחץ לשליחת הודעת וואטסאפ מהירה',
                }
            ]
            break;
        case "whatsappBlueBg":
            return [
                {
                    src: '/images/toolPageIcons/whatsappBlueBg.svg',
                    alt: 'לחץ לשליחת הודעת וואטסאפ מהירה',
                    title: 'לחץ לשליחת הודעת וואטסאפ מהירה',
                }
            ]
            break;
        case "messageGreenBg":
            return [
                {
                    src: '/images/toolPageIcons/messageGreenBg.svg',
                    alt: 'לחץ לשליחת הודעה מהירה',
                    title: 'לחץ לשליחת הודעה מהירה'
                }
            ]
            break;
        case "messageBlueBg":
            return [
                {
                    src: '/images/toolPageIcons/messageBlueBg.svg',
                    alt: 'לחץ לשליחת הודעה מהירה',
                    title: 'לחץ לשליחת הודעה מהירה'
                }
            ]
            break;
        case "navigateGreenBg":
            return [
                {
                    src: '/images/toolPageIcons/navigateGreenBg.svg',
                    alt: 'לחץ לניווט לחנות',
                    title: 'לחץ לניווט לחנות או צפייה במפה, כתובת והוראות הגעה'
                }
            ]
            break;
        case "navigateBlueBg":
            return [
                {
                    src: '/images/toolPageIcons/navigateBlueBg.svg',
                    alt: 'לחץ לניווט לחנות',
                    title: 'לחץ לניווט לחנות או צפייה במפה, כתובת והוראות הגעה'
                }
            ]
            break;

        case "zoomIconGreenBg":
            return [
                {
                    src: '/images/iconsAndLogos/icons/zoomImageGreen.svg',
                    alt: 'לחץ להגדלת התמונה',
                    title: 'לחץ להגדלת התמונה'
                }
            ]
            break;
        case "zoomIconBlueBg":
            return [
                {
                    src: '/images/iconsAndLogos/icons/zoomImageBlue.svg',
                    alt: 'לחץ להגדלת התמונה',
                    title: 'לחץ כאן להגדלת התמונה'
                }
            ]
            break;
        case "NavBarMenuIcon":
            return [
                {
                    src: '/images/iconsAndLogos/icons/NavBarMenuIcon.svg',
                    alt: 'לחץ כאן לפתיחת תפריט השכרת כלי עבודה',
                    title: 'לחץ כאן לפתיחת תפריט השכרת כלי עבודה'
                }
            ]
            break;
        case "XCloseIconLightGrey":
            return [
                {
                    src: '/images/iconsAndLogos/icons/XCloseIconLightGrey.svg',
                    alt: 'לחץ לסגירת התפריט',
                    title: 'לחץ לסגירת התפריט'
                }
            ]
            break;
        case "wazeBlueBg":
            return [
                {
                    src: '/images/iconsAndLogos/logos/wazeBlueBg.svg',
                    alt: 'לחץ לניווט waze לחנות',
                    title: 'לחץ לניווט waze לחנות'
                }
            ]
            break;
        case "youtubeGreenBlueBg":
            return [
                {
                    src: '/images/iconsAndLogos/logos/youtube-logo-Green-blueBG.svg',
                    alt: 'לחץ לערוץ היוטיוב שלנו של השכרת כלי עבודה',
                    title: 'לחץ לערוץ היוטיוב שלנו של השכרת כלי עבודה',
                }
            ]
            break;
        case "facebookIconBlue":
            return [
                {
                    src: '/images/iconsAndLogos/logos/facebook-logo-Green-blueBG.svg',
                    alt: 'לחץ כדי להגיע לדף הפייסבוק שלנו',
                    title: 'לחץ כדי להגיע לדף הפייסבוק שלנו',
                }
            ]
            break;

        case "selectPowerToolForRentIconBlue":
            return [
                {
                    src: '/images/iconsAndLogos/icons/selectPowerToolForRentIconBlue.svg',
                    alt: 'לחץ כדי לבחור כלי מתוך מגוון כלי העבודה להשכרה',
                    title: 'לחץ כדי לבחור כלי מתוך מגוון כלי העבודה להשכרה',
                }
            ]
            break;

        case "selectPowerToolForRentIconOrange":
            return [
                {
                    src: '/images/iconsAndLogos/icons/selectPowerToolForRentIconOrange.svg',
                    alt: 'לחץ כדי לבחור כלי מתוך מגוון כלי העבודה להשכרה',
                    title: 'לחץ כדי לבחור כלי מתוך מגוון כלי העבודה להשכרה',
                }
            ]
            break;

            case "greyBackground":
                return [
                    {
                        src: '/images/backgrounds/greyBackground.jpg',
                    }
                ]
                break;
    }
}

export function AboutUsImages(imageId) {
    switch (imageId) {
        case "toolStoreImage":
            return [
                {
                    src: `/images/aboutUsImages/ourToolsStore.jpg`,
                    alt: 'יותר מ-30 שנות ניסיון וותק במכירה והשכרת כלי עבודה',
                    title: 'תמונה מהחנות הראשונה שלנו בירושלים עם וותק של יותר מ-30 שנה במכירה והשכרת כלי עבודה'
                }
            ]
            break;
        case "oldToolDeskImage":
            return [
                {
                    src: '/images/aboutUsImages/power-tools-rentals-how-it-started.jpg',
                    alt: 'איך הכל התחיל - השכרת כלי עבודה בצורה מקצועית שהתפתחה במשך השנים',
                    title: 'איך הכל התחיל - השכרת כלי עבודה בצורה מקצועית שהתפתחה במשך 40 שנה'
                }
            ]
            break;
        case "dewaltImpactDriverScrewing":
            return [
                {
                    src: '/images/aboutUsImages/drilling-with-drill-driver-rental.jpg',
                    alt: 'ממכירה של מגוון כלי עבודה במחלקות שונות - ועד השכרת מגוון עצום של כלים וציוד',
                    title: 'ממכירה של מגוון כלי עבודה במחלקות שונות - ועד השכרת מגוון עצום של כלים וציוד'
                }
            ]
            break;

        case "clutterStorageImage":
            return [
                {
                    src: '/images/aboutUsImages/clutter-storage-renting-power-tools-solution.jpg',
                    alt: 'השכרה לעומת קנייה של כלי עבודה - פתרון מצוין לבעיית תחזוקה, הוצאה כספית גדולה וכלי עבודה שנדרש רק לעיתים נדירות',
                    title: 'השכרה לעומת קנייה של כלי עבודה - פתרון מצוין לבעיית תחזוקה, הוצאה כספית גדולה וכלי עבודה שנדרש רק לעיתים נדירות'
                }
            ]
            break;

        case "cleanAndTidyStorageImage":
            return [
                {
                    src: '/images/aboutUsImages/tidy-storage-for-power-tools-for-rent.jpg',
                    alt: 'השכרת כלי עבודה - כאן באתר תוכל למצוא את כל המידע שאתה צריך',
                    title: 'השכרת כלי עבודה - כאן באתר תוכל למצוא את כל המידע שאתה צריך ולהבין איזה כלי עבודה מתאים לך להשכרה'
                }
            ]
            break;

        case "priceIcon":
            return [
                {
                    src: '/images/iconsAndLogos/logos/price.svg',
                    alt: 'מחיר זול ומשתלם',
                    title: 'מחיר זול ומשתלם'
                }
            ]
            break;

        case "diversityIcon":
            return [
                {
                    src: '/images/iconsAndLogos/logos/diversity.svg',
                    alt: 'מאגר כלים וציוד להשכרה',
                    title: 'מאגר כלים וציוד להשכרה'
                }
            ]
            break;

        case "availabilityIcon":
            return [
                {
                    src: '/images/iconsAndLogos/logos/availability.svg',
                    alt: 'זמין תמיד להשכרה מהירה',
                    title: 'זמין תמיד להשכרה מהירה'
                }
            ]
            break;

        case "professionalIcon":
            return [
                {
                    src: '/images/iconsAndLogos/logos/professional.svg',
                    alt: 'כלי עבודה מקצועיים להשכרה',
                    title: 'כלי עבודה מקצועיים להשכרה'
                }
            ]
            break;
    }
}

export function BrandLogos(imageID) {
    switch (imageID) {
        case "MakitaBWLogoName":
            return [
                {
                    src: '/images/logosNamesBW/makita-power-tools-rental-logo-name-bw.svg',
                    alt: 'השכרת כלי עבודה מקיטה',
                    title: 'השכרת כלי עבודה מקצועיים של חברת מקיטה '
                }
            ]
            break;
        case "DewaltBWLogoName":
            return [
                {
                    src: '/images/logosNamesBW/dewalt-power-tools-rental-logo-name-bw.svg',
                    alt: 'השכרת כלי עבודה וציוד דיוולט',
                    title: 'השכרת כלי עבודה מקצועיים וציוד של חברת דיוולט'
                }
            ]
            break;
        case "BoschBWLogoName":
            return [
                {
                    src: '/images/logosNamesBW/bosch-tools-rental-logo-name-bw.svg',
                    alt: 'השכרת כלי עבודה בוש',
                    title: 'השכרת כלים, כלי עבודה וציוד של חברת בוש'
                }
            ]
            break;
        case "BlackAndDeckerBWLogoName":
            return [
                {
                    src: '/images/logosNamesBW/black-and-decker-rentals-logo-name-bw.svg',
                    alt: 'השכרת כלי עבודה בלק אנד דקר',
                    title: 'השכרת כלי עבודה וציוד של חברת בלק אנד דקר'
                }
            ]
            break;
    }
}

export function ErrorPage404ImageSrcSet() {
    return [
        {
            src: '/images/iconsAndLogos/icons/Error404-1.png',
            alt: 'שגיאה בטעינת הדף',
            title: 'ארעה שגיאה בטעינת הדף שביקשת - המשך לדף הראשי'
        }
    ]
}


export function articlesImages(imageID) {
    switch (imageID) {
        case "rent-or-buy-a-power-tool":
            return [
                {
                    src: `/images/articlesImages/renting-or-buying-tools-which-is-better.jpg`,
                    alt: 'יתרונות בהשכרת כלי עבודה',
                    title: 'מהם היתרונות בהשכרה של כלי עבודה ומתי עדיף לקנות את הכלי'
                }
            ]
            break;
        case "tool-rental-find-the-nearest-location":
            return [
                {
                    src: `/images/articlesImages/tool-rental-find-the-nearest-location.jpg`,
                    alt: 'ירושלים? תל אביב? מצא נקודת השכרת כלי עבודה הקרובה ביותר אליך',
                    title: 'רשימת נקודות מהן ניתן לשכור כלי עבודה או להזמין משלוח'
                }
            ]
            break;
        case "the-differences-between-drills-demolition-hammer-rotary-hammer":
            return [
                {
                    src: `/images/articlesImages/the-differences-between-drills-demolition-hammer-rotary-ham.png`,
                    alt: 'מה ההבדל בין פטישון, מקדחה ופטיש חציבה',
                    title: 'גלה מה ההבדל בין פטישון, מקדחה ופטיש חציבה ואיזה כלי עבודה מתאים לכל סוג של עבודה'
                }
            ]
            break;
        case "concrete":
            return [
                {
                    src: `/images/articlesImages/concrete-1.jpg`,
                    alt: 'סוגי בטון שונים',
                    title: 'סוגים שונים של אבן ובטון איתם מתמודדים בעבודות שונות'
                }
            ]
            break;
        case "metal":
            return [
                {
                    src: `/images/articlesImages/Metal-1.jpg`,
                    alt: 'סוגי מתכת שונים',
                    title: 'סוגים שונים של מתכות, אותם בדרך כלל נרצה לקדוח או לחתוך'
                }
            ]
            break;
    }
}

export function profileReviewImages(profileImgId) {
    switch (profileImgId) {
        case "adi":
            return [
                {
                    src: `/images/reviewsProfiles/adi.png`,
                    alt: 'עדי - ביקורת על השכרת כלי עבודה',
                    title: 'עדי - ביקורת על השכרת כלי עבודה'
                }
            ]

        case "dan":
            return [
                {
                    src: `/images/reviewsProfiles/dan.png`,
                    alt: 'דן - ביקורת על השכרת כלי עבודה',
                    title: 'דן - ביקורת על השכרת כלי עבודה'
                }
            ]

        case "elad":
            return [
                {
                    src: `/images/reviewsProfiles/elad.png`,
                    alt: 'דן - ביקורת על השכרת כלי עבודה',
                    title: 'דן - ביקורת על השכרת כלי עבודה'
                }
            ]

        default:
            return [
                {
                    src: '/images/reviewsProfiles/emptyProfile.png',
                    alt: 'ביקורת על השכרת כלי עבודה',
                    title: 'ביקורת על השכרת כלי עבודה'
                }
            ]

    }
}

export function categoriesImages(categoryID, requireAllImages) {
    switch (categoryID) {
        case "generators":
            return [
                {
                    src: '/images/tools/generators/GeneratorCatImages/השכרת-גנרטורים.png',
                    alt: 'השכרת גנרטור',
                    title: 'השכרת גנרטורים בגדלים שונים למגוון עבודות'
                }
            ]
            break;
        case "hammers":
            return [
                {
                    src: '/images/tools/hammers/השכרת-פטישי-חציבה-קונגו.png',
                    alt: 'השכרת פטיש חציבה',
                    title: 'השכרת פטישי חציבה בגדלים שונים למגוון עבודות'
                },
                {
                    src: '/images/tools/hammers/HammersCatPageImages/Demolition-Hammer-Chisel-Tile.jpg',
                    alt: 'השכרת פטיש חציבה קטן',
                    title: 'בתמונה - השכרת פטיש חציבה קטן לקילוף אריחים מקירות'
                },
                {
                    src: '/images/tools/hammers/HammersCatPageImages/Demolition-Hammer-Concrete.jpg',
                    alt: 'השכרת פטיש חציבה 10 קילו',
                    title: 'בתמונה - פטיש חציבה מהשכרה לחפירה בבטון לפני הוספת מוטות חיזוק מברזל'
                },
                {
                    src: '/images/tools/hammers/HammersCatPageImages/Demolition-Hammer-Concrete-wall.jpg',
                    alt: 'השכרת פטיש חציבה בירושלים',
                    title: 'בתמונה - השכרת פטיש חציבה במשקל 5 קילו לחציבה בקיר בטון בירושלים לפני הדבקת אבן ירושלמית '
                },
                {
                    src: '/images/tools/hammers/HammersCatPageImages/Demolition-Hammer-Concrete-wall-drill.jpg',
                    alt: 'קידוח קיר בטון בעזרת פטיש חציבה בינוני',
                    title: 'קידוח חורים בקיר בטון וסיתות בעזרת פטיש חציבה בגודל בינוני'
                },
                {
                    src: '/images/tools/hammers/HammersCatPageImages/Demolition-Hammer-floor.jpg',
                    alt: 'השכרת פטיש חציבה בירושלים לחפירה והריסת רצפת בטון',
                    title: 'פטיש חציבה גדול במשקל 15 קילו בזמן עבודת חציבה והריסת רצפת בטון בירושלים'
                },
                {
                    src: '/images/tools/hammers/HammersCatPageImages/Demolition-Hammer-stone-chiseling.jpg',
                    alt: 'קילוף וסיתות בקיר טיח בעזרת פטיש חציבה מהשכרה',
                    title: 'השכרת פטיש חציבה לקילוף טיח מקירות'
                },
                {
                    src: '/images/tools/hammers/HammersCatPageImages/Rental-of-Demolition-Hammer-Concrete-Ceiling.jpg',
                    alt: 'עבודת סיתות כלפי מעלה עם פטיש חציבה 5 קילו מהשכרה',
                    title: 'עבודה נוחה גם כלפי מעלה עם פטיש חציבה בגודל המתאים לעבודה זאת במשקל 5 קילו'
                },
                {
                    src: '/images/tools/hammers/HammersCatPageImages/Rent-Demolition-Hammer-Concrete-Foor.jpg',
                    alt: 'השכרת פטיש חציבה קונגו בירושלים או תל אביב',
                    title: 'השכרת פטיש חציבה קונגו גדול במיוחד לעבודות חציבה הקשות ביותר'
                }

            ]
            break;
        case "diamondDrills":
        case "diamond-drills":
            return [
                {
                    src: '/images/tools/diamondDrills/השכרת-מקדחות-יהלום.png',
                    alt: 'השכרת מקדחת יהלום',
                    title: 'השכרת מקדחות יהלום ידנית או על סטנד לקידוחים בבטון ואבן'
                }
            ]
            break;
        case "concreteTools":
        case "concrete-tools":
            return [
                {
                    src: '/images/tools/concreteTools/concreteToolsCatImages/השכרת-כלי-עבודה-לבטון.png',
                    alt: 'השכרת מערבל בטון, הליקופטר לבטון וכלי עבודה נוספים לבטון',
                    title: 'השכרת כלי עבודה וציוד לעבודה עם בטון'
                }
            ]
            break;

        case "groundCompactors":
        case "ground-compactors":
            return [
                {
                    src: '/images/tools/groundCompactors/מהדקי-אדמה-גבקה-להשכרה.png',
                    alt: 'השכרת מהדקי אדמה',
                    title: 'השכרת מהדקי אדמה'
                }
            ]
            break;

        case "polishMachines":
        case "polish-machines":
            return [
                {
                    src: '/images/tools/polishMachines/מכונת-פוליש-להשכרה.png',
                    alt: 'השכרת מכונות פוליש לליטוש, שיוף וניקוי רצפות',
                    title: 'השכרת מכונות פוליש לניקוי רצפות, ליטוש ושיוף דקים, הברקת משטחים ועוד'
                }
            ]
            break;

        case "vacuumCleaners":
        case "vacuum-cleaner":
            return [
                {
                    src: '/images/tools/vacuumCleaner/השכרת-שואבי-אבק.png',
                    alt: 'השכרת שואבי אבק תעשייתיים',
                    title: 'השכרת שואבי אבק תעשייתיים'
                }
            ]
            break;

        case "waterPressureCleaners":
        case "water-pressure-cleaners":
            return [
                {
                    src: '/images/tools/waterPressureCleaner/השכרת-מכונות-שטיפה-בלחץ-גרניק.png',
                    alt: 'השכרת מכונות שטיפה',
                    title: 'השכרת מכונות שטיפה בלחץ גבוה - גרניק'
                }
            ]
            break;

        case "drillsAndDrivers":
        case "drills-drivers":
            return [
                {
                    src: '/images/tools/drillsAndDrivers/השכרת-מקדחות-מברגות.png',
                    alt: 'השכרת מקדחות, מברגות ומברגות אימפקט',
                    title: 'השכרת מקדחות מברגות ומברגות אימפקט לקידוחים במתכת, עץ, בטון ואבן, והברגת ברגים'
                }
            ]
            break;

        case "ceramicCuttersMachines":
        case "ceramic-cutters-machines-for-rent":
            return [
                {
                    src: '/images/tools/ceramicCuttersMachines/ceramicMachineCategoryImages/מכונות-קרמיקה-להשכרה.png',
                    alt: 'מכונות לחיתוך קרמיקה להשכרה',
                    title: 'השכרת מכונות לחיתוך קרמיקה, מכשירים מקצועיים לחיתוך קרמיקה של חברת סיגמא, מונטוליט או שטל'
                }
            ]
            break;

        case "ExtensionCords":
        case "extension-cords-for-rent":
            return [
                {
                    src: '/images/tools/ExtensionCords/ExtensionCordsCatImages/השכרת-כבלים-מאריכים.png',
                    alt: 'כבלים מאריכים להשכרה',
                    title: 'תופי כבלים מאריכים וכבלי חשמל להשכרה'
                }
            ]
            break;
        case "waterPumps":
        case "water-pumps":
            return [
                {
                    src: '/images/tools/waterPumps/waterPumpsCategoryImages/השכרת-משאבות-מים.png',
                    alt: 'משאבות מים להשכרה',
                    title: 'משאבות מים להשכרה - השכרת משאבות מים'
                }
            ]
            break;

        case "sanders":
        case "sanders-for-rent":
            return [
                {
                    src: '/images/tools/sanders/SanderCategoryImages/השכרת-מלטשות.png',
                    alt: 'מלטשות להשכרה, מלטשת סיבובית, אקצנטרית, רוטטת או סרט לעץ מתכת בטון',
                    title: 'מלטשות להשכרה, מלטשת סיבובית, אקצנטרית, רוטטת או סרט לעץ מתכת בטון'
                }
            ]
            break;

        case "jigSaws":
        case "jigsaws":
            return [
                {
                    src: '/images/tools/jigsaws/השכרת-מסורים-אנכיים-לעץ-מתכת.png',
                    alt: 'השכרת מסור גיגסו אנכי לחיתוך וניסור בתל אביב או ירושלים',
                    title: 'השכרת מסור גיגסו אנכי לחיתוך וניסור בתל אביב או ירושלים'
                }
            ]
            break;

        case "circularSaws":
        case "circular-saws":
            return [
                {
                    src: '/images/tools/circularsaws/categoryImages/מסורים-עגולים-להשכרה.png',
                    alt: 'השכרת מסור עגול',
                    title: 'השכרת מסור עגול'
                }
            ]
            break;

        case "reciprocatingSaws":
        case "reciprocating-saws":
            return [
                {
                    src: '/images/tools/reciprocateSaws/categoryImages/מסור-חרב-להשכרה.png',
                    alt: 'השכרת מסור חרב',
                    title: 'השכרת מסור חרב'
                }
            ]
            break;

        case "chainSaws":
        case "chain-saws":
            return [
                {
                    src: '/images/tools/chainSaws/categoryImages/מסור-שרשרת-להשכרה.png',
                    alt: 'השכרת מסור שרשרת',
                    title: 'השכרת מסור שרשרת'
                }
            ]
            break;
        case "thermal-cameras":
            return [
                {
                    src: '/images/tools/thermalCameras/השכרת-מצלמות-תרמיות-חום-לאיתור-נזילות.png',
                    alt: 'השכרת מצלמה תרמית',
                    title: 'השכרת מצלמה תרמית'
                }
            ]
            break;

        case "concrete-saws":
            return [
                {
                    src: '/images/tools/concreteSaws/catImages/השכרת-מסורים-לבטון.png',
                    alt: 'השכרת מסור לבטון',
                    title: 'השכרת מסור לבטון'
                }
            ]
            break;

        case "grinders":
            return [
                {
                    src: '/images/tools/grinders/משחזות-זווית-דיסק-להשכרה.png',
                    alt: 'השכרת משחזת זווית - דיסק',
                    title: 'השכרת משחזת זווית'
                }
            ]
            break;

        case "laser-levels":
            return [
                {
                    src: '/images/tools/laserLevels/catImages/פלסי-לייזר-להשכרה.png',
                    alt: 'השכרת פלס לייזר',
                    title: 'השכרת פלס לייזר'
                }
            ]
            break;

        default:
            return [
                {
                    src: '/images/tools/concreteTools/ShatalM150E/השכרת-מערבל-בטון.png',
                    alt: 'השכרת מערבל בטון, הליקופטר לבטון וכלי עבודה נוספים לבטון',
                    title: 'השכרת מגוון כלי עבודה וציוד לעבודה עם בטון'
                }
            ]
            break;

    }
}