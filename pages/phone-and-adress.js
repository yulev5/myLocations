import React, { useContext, useEffect } from 'react';
import MainComponentContainer from '../src/components/ContainerComponents/MainComponentContainer';
import { Typography, Paper, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GetAllCatagoriesFromMongo, SortOptions } from 'components/Utils/mongodb';
import { UserContext } from 'contexts/MyContext';
import { AddCategoriesListToData } from 'assets/Database/DatabaseUtils';

const useStyles = makeStyles((theme) => ({
    branchSection: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    branchContainer: {
        height: '200px',
        paddingTop: '10px'
    }
}));


export async function getStaticProps(context) {
    //change to make it build
    const categories = await GetAllCatagoriesFromMongo(SortOptions.popularity);
    return {
        props: {
            categories: categories,
        },
        revalidate: 1,
    }
}

function PhoneAndAdress(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);
    const { categories } = props;

    AddCategoriesListToData(categories, data);
    
    return (
        <MainComponentContainer>

            <Container>
                <div className={classes.branchContainer}>
                    <Paper className={classes.branchSection}>
                        <Typography component="h2" variant="h5">השכרת כלי עבודה</Typography>
                    </Paper>
                </div>
                
                <div className={classes.branchContainer}>
                    <Paper className={classes.branchSection}>
                        השכרת כלי עבודה
                    </Paper>
                </div>

            </Container>
        </MainComponentContainer>
    );
}

export default PhoneAndAdress;