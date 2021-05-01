import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from "react-redux"

const useStyles = makeStyles((theme) => ({
    messageContainer: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

function NoActionMessages({ categories, appState }) {
    const classes = useStyles();

    let message = "";
    if (!appState) {
        message = "Click on +Add new Category button";
        if (categories.length) {
            message = message + " or select category from the list."
        }
    } else {
        message = "Select an action from the toolbar or deselect the category"
    }

    return (
        <div className={classes.messageContainer}>
            <Typography style={{ textAlign: 'center' }}>
                {message}
            </Typography>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        categories: state.categoriesReducer.categories,
        appState: state.appStateReducer.currentAppState,
    }
}

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(NoActionMessages)