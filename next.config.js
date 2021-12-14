
const withImages = require('next-images')
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true'
// })
// const withCSS = require('@zeit/next-css')



//This is the signature of withPlugins
//module.exports = withPlugins([...plugins], nextConfiguration);


module.exports = withPlugins(
    [],
    {
        async redirects() {
            return [
                //-----------/-------------                
                {
                    source: '/sales/guest/:slug*',
                    destination: '/',
                    permanent: true
                },
                {
                    source: '/product-tag/885-m2/:slug*',
                    destination: '/',
                    permanent: true
                },
                {
                    source: '/cutter/mwhzt-zvvit/:slug*',
                    destination: '/',
                    permanent: true
                },
                {
                    source: '/cart',
                    destination: '/',
                    permanent: true
                },
                {
                    source: '/[categoryID]/[toolID]',
                    destination: '/',
                    permanent: true
                },
                {
                    source: '/rentals/[categoryID]',
                    destination: '/',
                    permanent: true
                },
                {
                    source: '/rentals/[categoryID]/[toolID]',
                    destination: '/',
                    permanent: true
                },
                {
                    source: '/sales/guest/form/',
                    destination: '/',
                    permanent: true
                },
                {
                    source: '/review/:slag*',
                    destination: '/',
                    permanent: true
                },

                //------------------------------------------------------------------------------------------------------
                //-----------/rentals/ground-compactors-------------                
                {
                    source: '/rentals/concrete-tools/ground-clamp-vibratory-plate-compactor-for-rent',
                    destination: '/rentals/ground-compactors/ground-clamp-vibratory-plate-compactor-for-rent',
                    permanent: true
                },

                //------------------------------------------------------------------------------------------------------
                //-----------/rentals/hammers-------------                
                {
                    source: '/tools-category/hammers',
                    destination: '/rentals/hammers',
                    permanent: true
                },
                {
                    source: '/hummers/:slug*',
                    destination: '/rentals/hammers',
                    permanent: true
                },
                {
                    source: '/product-category/%D7%A4%D7%98%D7%99%D7%A9%D7%99%D7%9D',
                    destination: '/rentals/hammers',
                    permanent: true
                },
                {
                    source: '/product-category/%D7%A4%D7%98%D7%99%D7%A9%D7%99-%D7%97%D7%A6%D7%99%D7%91%D7%94/:slug*',
                    destination: '/rentals/hammers',
                    permanent: true
                },

                //------------------------------------------------------------------------------------------------------
                //-----------/rentals/thermal-cameras-------------      
                {
                    source: '/rentals/thermal-cameras-rental',
                    destination: '/rentals/thermal-cameras',
                    permanent: true
                },

                //-----------/rentals/hammers/bosch-gsh-5e-------------                
                {
                    source: '/tools/BoschGSH5E',
                    destination: '/rentals/hammers/bosch-gsh-5e',
                    permanent: true
                },
                //-----------/rentals/hammers/makita-hammer-1200-------------                
                {
                    source: '/tools/MakitaHammer1200',
                    destination: '/rentals/hammers/makita-hammer-1200',
                    permanent: true
                },
                //-----------/rentals/hammers/makita-hm-1202k-------------                
                {
                    source: '/tools/MakitaHM1202K',
                    destination: '/rentals/hammers/makita-hm-1202k',
                    permanent: true
                },
                //-----------/rentals/hammers/bosch-gbh-11de-------------                
                {
                    source: '/tools/BoschGBH11DE',
                    destination: '/rentals/hammers/bosch-gbh-11de',
                    permanent: true
                },
                //-----------/rentals/hammers/bosch-gsh-27-------------                
                {
                    source: '/tools/BoschGSH27',
                    destination: '/rentals/hammers/bosch-gsh-27',
                    permanent: true
                },
                //-----------/rentals/hammers/makita-hammer-drill-2470-------------
                {
                    source: '/rentals/hammers/makita-hammer-drill-2470',
                    destination: '/rentals/drills-drivers/makita-hammer-drill-2470',
                    permanent: true
                },
                //-----------/rent-cordless-hammer-------------
                {
                    source: '/rentals/hammers/rent-cordless-hammer',
                    destination: '/rentals/drills-drivers/rent-cordless-hammer',
                    permanent: true
                },
                //----------------------------------Diamond Drills----------------------------------------------------------------
                //----------------------------/rentals/diamond-drills-------------------------------
                {
                    source: '/product-category/%D7%9E%D7%A7%D7%93%D7%97%D7%95%D7%AA-%D7%99%D7%94%D7%9C%D7%95%D7%9D/:slag*',
                    destination: '/rentals/diamond-drills',
                    permanent: true
                },

                {
                    source: '/rentals/price-list/diamond-drills/5KG',
                    destination: '/rentals/price-list/diamond-drills/diameterMax3',
                    permanent: true
                },
                {
                    source: '/rentals/price-list/diamond-drills/7.5KG',
                    destination: '/rentals/price-list/diamond-drills/diameter3To6',
                    permanent: true
                },
                {
                    source: '/rentals/price-list/diamond-drills/10KG',
                    destination: '/rentals/price-list/diamond-drills/diameter6To12',
                    permanent: true
                },
                {
                    source: '/rentals/price-list/diamond-drills/20KG',
                    destination: '/rentals/price-list/diamond-drills/diameter3To6',
                    permanent: true
                },
                {
                    source: '/rentals/price-list/diamond-drills/30KG',
                    destination: '/rentals/price-list/diamond-drills/diameter3To6',
                    permanent: true
                },

                //-----------/rentals/diamond-drills/makita-diamond-core-cup-drill-bit/-------------
                {
                    source: '/product-tag/dbm080/:slag*',
                    destination: '/rentals/diamond-drills/makita-diamond-core-cup-drill-bit',
                    permanent: true
                },
                {
                    source: '/product/%D7%9E%D7%A7%D7%93%D7%97%D7%AA-%D7%99%D7%94%D7%9C%D7%95%D7%9D-%D7%9E%D7%A7%D7%99%D7%98%D7%94-%D7%93%D7%92%D7%9D-makita-dbm080',
                    destination: '/rentals/diamond-drills/makita-diamond-core-cup-drill-bit',
                    permanent: true
                },


                //----------------------------------Generators----------------------------------------------------------------
                //----------------------------/rentals/generators-------------------------------
                {
                    source: '/product-category/%D7%92%D7%A0%D7%A8%D7%98%D7%95%D7%A8',
                    destination: '/rentals/generators',
                    permanent: true
                },
                {
                    source: '/product-category/%D7%92%D7%A0%D7%A8%D7%98%D7%95%D7%A8%D7%99%D7%9D',
                    destination: '/rentals/generators',
                    permanent: true
                },

                //----------------------------------Articles-------------------------------------------------------------
                //-----------/articles/-------------                
                {
                    source: '/articles/undefined',
                    destination: '/articles/tool-rental-find-the-nearest-location',
                    permanent: true
                },
                {
                    source: '/articles/[articleName]',
                    destination: '/articles/tool-rental-find-the-nearest-location',
                    permanent: true
                },

                //----------------------------------Price Lists-------------------------------------------------------------
                {
                    source: '/rentals/price-list/diamondDrills',
                    destination: '/rentals/price-list/diamond-drills',
                    permanent: true
                },
                {
                    source: '/rentals/price-list/drillsAndDrivers',
                    destination: '/rentals/price-list/drills-drivers',
                    permanent: true
                },
                {
                    source: '/rentals/price-list/concreteTools',
                    destination: '/rentals/price-list/concrete-tools',
                    permanent: true
                },
                {
                    source: '/rentals/price-list/polishMachines',
                    destination: '/rentals/price-list/polish-machines',
                    permanent: true
                },
                {
                    source: '/rentals/price-list/generators',
                    destination: '/rentals/price-list/generators/1',
                    permanent: true
                },
                {
                    source: '/rentals/price-list/concrete-tools',
                    destination: '/rentals/price-list/concrete-tools/1',
                    permanent: true
                },

                //----------------------------------Contact Page-------------------------------------------------------------
                {
                    source: '/contact',
                    destination: '/',
                    permanent: true
                },
            ]
        },
        env: {
            // testEnvVar: 'vallll'
        },
        images: {
            // deviceSizes: [130, 150, 180, 280, 320, 360, 414, 640, 750, 1080, 1200, 1920, 2048, 3840],
        },
    }
);

// module.exports = withPlugins(
//     [
//         [optimizedImages, {
//             inlineImageLimit: 512
//         }],
//         [withBundleAnalyzer, {

//         }]
//     ],
//     // Add here NextJS configurations

// );



// How to export using withPlugins:
// https://github.com/cyrilwanner/next-compose-plugins


//Add more image optimizer - responsive loader
//https://github.com/herrstucki/responsive-loader
//https://github.com/cyrilwanner/next-optimized-images#resize