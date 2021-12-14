import React, { useContext, useEffect } from 'react';
import MainComponentContainer from 'components/ContainerComponents/MainComponentContainer';
import { makeStyles, Grid, Container, Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core';
import Head from 'next/head';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import { UserContext } from 'contexts/MyContext';
import PriceListStepper from 'components/PriceListComponenets/PriceListStepper';
import MyBreadCrumbs from 'components/GeneralComponents/MyBreadCrumbs';
import { AddCategoriesListToData, AddCurrentCategoryDataToDataBycategoryID, TimeFiltersData } from 'assets/Database/DatabaseUtils';
import { GetAllCatagoriesFromMongo, GetToolsByPriceListFromMongo } from 'components/Utils/mongodb';
import Image from 'next/image'
import Link from 'next/link';


const useStyles = makeStyles((theme) => ({
    H1Style: {
        lineHeight: '63px',
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight700Bold,
        fontSize: myFontSizes.TextFontSize28,
        margin: '30px 0',
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize48,
        }
    },
    tableContainer: {
        margin: '50px 0 20px 0',
        overflow: 'hidden',
    },
    rowHeader: {
        backgroundColor: myColors.TurquoisePelorous,
    },
    leftBorder: {
        borderLeft: `solid 1px ${myColors.LightGreyWildSand}`
    },
    textTableHeader: {
        fontWeight: myFontWeights.Weight700Bold,
        padding: '6px 2px 6px 2px',
    },
    textTableCell: {
        textAlign: 'center',
        padding: '6px 2px 6px 2px',
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize18,
        }
    },
    H2Style: {
        fontWeight: myFontWeights.Weight700Bold,
        fontSize: myFontSizes.TextFontSize18,
    },
    filtersContainer: {
        margin: '30px 8px 30px 8px',
        [theme.breakpoints.up('md')]: {
            margin: '50px 0px 50px 0px',
        }
    },
    grid: {
        width: '100%',
        margin: 'auto',
        [theme.breakpoints.up('md')]: {
            width: 'auto',
            maxWidth: 'none',
        }
    },
    row: {
        [theme.breakpoints.up('md')]: {
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: myColors.LightGreyWildSand
            }
        }
    },
    imgStyle: {
        minWidth: '90px !important'
    },

    gridToolLine: {
        width: '100%'
    },
    imageContainer: {
        paddingRight: '10px',
        margin: 'auto',
        width: '80px',
        [theme.breakpoints.up('md')]: {
            width: '200px'
        }
    },
    underTableText: {
        textAlign: 'right',
        fontSize: myFontSizes.TextFontSize13,
        marginBottom: '20px',
    },
}));

export async function getStaticProps(context) {
    const tools = await GetToolsByPriceListFromMongo(context);
    const categories = await GetAllCatagoriesFromMongo();

    return {
        props: {
            categories: categories,
            tools: tools,
            timeFilterID: context.params.timeFilterID,
            categoryID: context.params.categoryID
        },
        revalidate: 1,
    }
}


function index(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);
    const { categories, tools, categoryID, timeFilterID } = props;

    data.generalPageBreadCrumb = "מחירון השכרת כלי עבודה";
    data.urlPostFix = "rentals/price-list/";

    AddCategoriesListToData(categories, data);
    AddCurrentCategoryDataToDataBycategoryID(categoryID, data);

    useEffect(() => {
        storeData(data);
    }, [])

    const rows = tools.map((tool, index) => {
        let selectedTimeText = "";
        let priceForSelectedTime = "";
        switch (timeFilterID) {
            case TimeFiltersData.UpTo24Hours.filterId:
                selectedTimeText = TimeFiltersData.UpTo24Hours.filterName;
                priceForSelectedTime = tool.UpTo24Hours;
                break;
            case TimeFiltersData.UpTo3Days.filterId:
                selectedTimeText = TimeFiltersData.UpTo3Days.filterName;
                priceForSelectedTime = tool.UpTo3Days;
                break;
            case TimeFiltersData.MoreThan3Days.filterId:
                selectedTimeText = TimeFiltersData.MoreThan3Days.filterName;
                priceForSelectedTime = tool.MoreThan3Days;
                break;
        }
        let href = `/rentals/${categoryID}/${tool.urlPostFix}`;

        return (
            <Link href={href} passHref key={index}>
                <TableRow key={index} className={classes.row}>
                    <TableCell className={classes.textTableCell}>
                        <div className={classes.imageContainer}>
                            <Image
                                sizes={`(min-width: 960px) 200px, 80px`}
                                src={tool.images[0].src}
                                width={tool.images[0].width}
                                height={tool.images[0].height}
                                alt={tool.images[0].alt}
                                layout="responsive"
                            />
                        </div>
                    </TableCell>
                    <TableCell className={classes.textTableCell}>{tool.nameWithoutRentalText}</TableCell>
                    <TableCell style={{ paddingRight: '10px', paddingLeft: '10px' }} className={classes.textTableCell}>{selectedTimeText}</TableCell>
                    <TableCell className={classes.textTableCell}>{`${priceForSelectedTime} \u20AA`}</TableCell>
                    <TableCell className={classes.textTableCell} style={{ width: '20px', padding: '0px' }}>{
                        <Button variant="contained" style={{ margin: '6px 4px 6px 6px', padding: '3px 6px', backgroundColor: myColors.LightGreyWildSand, fontWeight: myFontWeights.Weight700Bold }} size="small">פרטים נוספים</Button>
                    }</TableCell>
                </TableRow>
            </Link>
        );
    });

    return (
        <MainComponentContainer>
            <Head>
                <title>{`מחיר השכרת ${data.currentCategoryData.HebrewNameSingle} - בחר לכמה זמן נדרש הכלי? לצפייה במחירון`}</title>
                <meta name="description" content={`מחירון ורשימת ${data.currentCategoryData.HebrewName} להשכרה - השכרת בתל אביב או בירושלים | אפשרות למשלוחים`} />
                <meta name="keywords" content={"מחירון השכרת כלי עבודה"} />
            </Head>

            <Container>
                <MyBreadCrumbs />
                <Typography component="h1" className={classes.H1Style}>מחיר השכרה של {data.currentCategoryData.HebrewNameSingle}</Typography>
                <PriceListStepper currentStep={4} toolTipText="מחיר ההשכרה של כלי העבודה שבחרת" />

                <TableContainer className={classes.tableContainer} component={Paper}>
                    <Table size="small">
                        <TableHead>
                            <TableRow className={classes.rowHeader}>
                                <TableCell align="center" className={`${classes.textTableHeader} ${classes.leftBorder}`} style={{ borderLeft: `solid 1px ${myColors.LightGreyWildSand}` }}>
                                    תמונה
                                </TableCell>
                                <TableCell align="center" className={`${classes.textTableHeader} ${classes.leftBorder}`}>
                                    דגם
                                </TableCell>
                                <TableCell align="center" className={`${classes.textTableHeader} ${classes.leftBorder}`} style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                                    זמן השכרה
                                </TableCell>
                                <TableCell align="center" className={`${classes.textTableHeader} ${classes.leftBorder}`} style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                                    מחיר
                                </TableCell>
                                <TableCell style={{ width: '20px', fontWeight: myFontWeights.Weight700Bold }}>
                                    פרטים
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography component="p" className={classes.underTableText}>*המחירים לא כוללים מע"מ</Typography>
            </Container>
        </MainComponentContainer >
    );
}

export default index;

export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { categoryID: 'hammers', filterID: '5KG', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'hammers', filterID: '7.5KG', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'hammers', filterID: '10KG', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'hammers', filterID: '20KG', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'hammers', filterID: '30KG', timeFilterID: 'UpTo24Hours' } },

            { params: { categoryID: 'hammers', filterID: '5KG', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'hammers', filterID: '7.5KG', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'hammers', filterID: '10KG', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'hammers', filterID: '20KG', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'hammers', filterID: '30KG', timeFilterID: 'UpTo3Days' } },

            { params: { categoryID: 'hammers', filterID: '5KG', timeFilterID: 'MoreThan3Days' } },
            { params: { categoryID: 'hammers', filterID: '7.5KG', timeFilterID: 'MoreThan3Days' } },
            { params: { categoryID: 'hammers', filterID: '10KG', timeFilterID: 'MoreThan3Days' } },
            { params: { categoryID: 'hammers', filterID: '20KG', timeFilterID: 'MoreThan3Days' } },
            { params: { categoryID: 'hammers', filterID: '30KG', timeFilterID: 'MoreThan3Days' } },


            { params: { categoryID: 'diamond-drills', filterID: 'diameterMax3', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'diamond-drills', filterID: 'diameter3To6', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'diamond-drills', filterID: 'diameter6To12', timeFilterID: 'UpTo24Hours' } },

            { params: { categoryID: 'diamond-drills', filterID: 'diameterMax3', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'diamond-drills', filterID: 'diameter3To6', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'diamond-drills', filterID: 'diameter6To12', timeFilterID: 'UpTo3Days' } },

            { params: { categoryID: 'diamond-drills', filterID: 'diameterMax3', timeFilterID: 'MoreThan3Days' } },
            { params: { categoryID: 'diamond-drills', filterID: 'diameter3To6', timeFilterID: 'MoreThan3Days' } },
            { params: { categoryID: 'diamond-drills', filterID: 'diameter6To12', timeFilterID: 'MoreThan3Days' } },



            { params: { categoryID: 'ground-compactors', filterID: '1', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'ground-compactors', filterID: '1', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'ground-compactors', filterID: '1', timeFilterID: 'MoreThan3Days' } },

            { params: { categoryID: 'generators', filterID: '1', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'generators', filterID: '1', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'generators', filterID: '1', timeFilterID: 'MoreThan3Days' } },

            { params: { categoryID: 'concrete-tools', filterID: '1', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'concrete-tools', filterID: '1', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'concrete-tools', filterID: '1', timeFilterID: 'MoreThan3Days' } },

            { params: { categoryID: 'drills-drivers', filterID: '1', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'drills-drivers', filterID: '1', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'drills-drivers', filterID: '1', timeFilterID: 'MoreThan3Days' } },

            { params: { categoryID: 'polish-machines', filterID: '1', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'polish-machines', filterID: '1', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'polish-machines', filterID: '1', timeFilterID: 'MoreThan3Days' } },

            { params: { categoryID: 'vacuum-cleaner', filterID: '1', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'vacuum-cleaner', filterID: '1', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'vacuum-cleaner', filterID: '1', timeFilterID: 'MoreThan3Days' } },

            { params: { categoryID: 'water-pressure-cleaners', filterID: '1', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'water-pressure-cleaners', filterID: '1', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'water-pressure-cleaners', filterID: '1', timeFilterID: 'MoreThan3Days' } },

            { params: { categoryID: 'ceramic-cutters-machines-for-rent', filterID: '1', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'ceramic-cutters-machines-for-rent', filterID: '1', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'ceramic-cutters-machines-for-rent', filterID: '1', timeFilterID: 'MoreThan3Days' } },

            { params: { categoryID: 'extension-cords-for-rent', filterID: '1', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'extension-cords-for-rent', filterID: '1', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'extension-cords-for-rent', filterID: '1', timeFilterID: 'MoreThan3Days' } },

            { params: { categoryID: 'water-pumps', filterID: '1', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'water-pumps', filterID: '1', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'water-pumps', filterID: '1', timeFilterID: 'MoreThan3Days' } },

            { params: { categoryID: 'sanders-for-rent', filterID: '1', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'sanders-for-rent', filterID: '1', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'sanders-for-rent', filterID: '1', timeFilterID: 'MoreThan3Days' } },

            { params: { categoryID: 'jigsaws', filterID: '1', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'jigsaws', filterID: '1', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'jigsaws', filterID: '1', timeFilterID: 'MoreThan3Days' } },

            { params: { categoryID: 'circular-saws', filterID: '1', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'circular-saws', filterID: '1', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'circular-saws', filterID: '1', timeFilterID: 'MoreThan3Days' } },

            { params: { categoryID: 'reciprocating-saws', filterID: '1', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'reciprocating-saws', filterID: '1', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'reciprocating-saws', filterID: '1', timeFilterID: 'MoreThan3Days' } },

            { params: { categoryID: 'chain-saws', filterID: '1', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'chain-saws', filterID: '1', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'chain-saws', filterID: '1', timeFilterID: 'MoreThan3Days' } },

            { params: { categoryID: 'thermal-cameras', filterID: '1', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'thermal-cameras', filterID: '1', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'thermal-cameras', filterID: '1', timeFilterID: 'MoreThan3Days' } },

            { params: { categoryID: 'concrete-saws', filterID: '1', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'concrete-saws', filterID: '1', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'concrete-saws', filterID: '1', timeFilterID: 'MoreThan3Days' } },

            { params: { categoryID: 'grinders', filterID: '1', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'grinders', filterID: '1', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'grinders', filterID: '1', timeFilterID: 'MoreThan3Days' } },
            
            { params: { categoryID: 'laser-levels', filterID: '1', timeFilterID: 'UpTo24Hours' } },
            { params: { categoryID: 'laser-levels', filterID: '1', timeFilterID: 'UpTo3Days' } },
            { params: { categoryID: 'laser-levels', filterID: '1', timeFilterID: 'MoreThan3Days' } },
        ],
        fallback: false // fallback is set to false because we already know the slugs ahead of time
    }
}