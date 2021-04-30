import React from 'react';
import { AppBar, Container, Divider, makeStyles, Toolbar, Typography } from '@material-ui/core';
import AppBarButtons from './AppBarButtons';
import { connect } from "react-redux"

const useStyles = makeStyles((theme) => ({
    appBar: {
        width: '100vw'
    },
}));

function MyLocationsAppBar({ categories, currentSelectedCategory }) {
    const classes = useStyles();

    debugger;
    let appBarTitle = "Categories";
    if (currentSelectedCategory) {
        appBarTitle = categories.find(cat => cat.id == currentSelectedCategory).name;
    }

    return (
        <>
            <AppBar position="sticky" className={classes.appBar}>
                <Container>
                    <Toolbar>
                        <Typography variant="h6" style={{ minWidth: '100px' }}>
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