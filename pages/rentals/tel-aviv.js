import React, { useContext, useEffect } from 'react';
import GoogleMapComponent from "../../src/components/GeneralComponents/GoogleMap";
import MainComponentContainer from '../../src/components/ContainerComponents/MainComponentContainer';
import { Typography, AppBar, TextField, NoSsr, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import Map from '../../src/components/GeneralComponents/GoogleMap2';
import MyBreadCrumbs from '../../src/components/GeneralComponents/MyBreadCrumbs';
import { GetAllCatagoriesFromMongo, SortOptions } from 'components/Utils/mongodb';
import { UserContext } from 'contexts/MyContext';
import { AddCategoriesListToData } from 'assets/Database/DatabaseUtils';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
    TypographyStyle: {
        textAlign: 'right'
    },
    InfoLineStyle: {
        display: 'flex'
    },
    MapContainer: {
        display: 'flex',
        width: '100%',
        textAlign: 'center',
    }

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

function TelAviv(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('1');
    const { data, storeData } = useContext(UserContext);
    const { categories } = props;

    AddCategoriesListToData(categories, data);

    const handleChange = (event, newValue) => {
        setValue(newValue);

    };

    let articleID = 'tel-aviv';
    let breadCrumbsData = {
        articleID: articleID,
        articleName: "השכרת כלי עבודה בתל אביב ואיזור המרכז",
        subfolderName: 'rentals',
    }

    return (
        <ThemeProvider theme={theme}>
            <MainComponentContainer>
                <Head>
                    <link href='https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css' rel='stylesheet' />
                </Head>

                <MyBreadCrumbs data={breadCrumbsData} />

                <Container>
                    <Typography variant={"h5"} className={classes.TypographyStyle} >מהסניף בתל אביב תוכל לשכור את כלי העבודה, אפשרות למשלוחים או לאיסוף עצמי</Typography>

                    <br />
                    <div className={classes.InfoLineStyle}>
                        <Typography variant={"subtitle1"} className={classes.TypographyStyle} >טלפון:</Typography>
                        <Typography variant={"subtitle1"} className={classes.TypographyStyle} >02-6512579</Typography>
                    </div>
                    <div className={classes.InfoLineStyle}>
                        <Typography variant={"subtitle1"} className={classes.TypographyStyle} >סלולרי:</Typography>
                        <Typography variant={"subtitle1"} className={classes.TypographyStyle} >052-4343983</Typography>
                    </div>

                    <br />

                    <Typography variant={"h5"} className={classes.TypographyStyle} >איזורי שכירות כלי עבודה לסניף זה</Typography>
                    <Typography variant={"subtitle1"} className={classes.TypographyStyle} >תל אביב: דרום תל אביב, פלורנטין, מרכז תל אביב, שפירא ועוד</Typography>
                    <Typography variant={"subtitle1"} className={classes.TypographyStyle} >איזור תל אביב והסביבה:יפו, בני ברק, חולון, הרצליה, מודיעין, רמלה, פתח תקווה, גבעתיים, רמת גן</Typography>

                    <br />


                    <Typography variant={"h5"} className={classes.TypographyStyle} >סוגי כלים להשכרה בסניף:</Typography>
                    <Typography variant={"subtitle1"} className={classes.TypographyStyle} >ציוד להשכרה, כלי גינון, פטישי חציבה, מקדחות יהלום, גנרטורים מכונות פוליש, וכלי עבודה נוספים</Typography>


                    <div className={classes.MapContainer}>
                        <Map />
                    </div>

                    <br />

                </Container>
            </MainComponentContainer>
        </ThemeProvider>
    );
}

export default TelAviv;