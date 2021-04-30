import React from 'react';
import { AppBar, Container, Divider, makeStyles, Toolbar, Typography } from '@material-ui/core';
import AppBarButtons from './AppBarButtons';
import { connect } from "react-redux"

const useStyles = makeStyles((theme) => ({
    appBar: {
        width: '100vw'
    },
    title:{
        fontSize:'16px',
        minWidth: '40px',
        [theme.breakpoints.up('md')]: {
            minWidth: '100px',
            fontSize:'20px',
          },
    }
}));

function MyLocationsAppBar({ categories, currentSelectedCategory }) {
    const classes = useStyles();

    let appBarTitle = "Categories";
    if (currentSelectedCategory) {
        appBarTitle = categories.find(cat => cat.id == currentSelectedCategory).name;
    }

    return (
        <>
            <AppBar position="sticky" className={classes.appBar}>
                <Container>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            {appBarTitle}
                        </Typography>
                        <Divider orientation="vertical" flexItem style={{ marginLeft: '10px', backgroundColor: '#fff' }} />

                        <AppBarButtons />

                    </Toolbar>
                </Container>
            </AppBar>

        </>
    );
}

const mapStateToProps = state => {
    return {
        categories: state.categoriesReducer.categories,
        currentSelectedCategory: state.selectedCategoryReducer.currentSelectedCategory,
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(MyLocationsAppBar)