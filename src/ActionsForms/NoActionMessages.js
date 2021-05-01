import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from "react-redux"
import { ADD_NEW_CATEGORY, CATEGORY_SELECTED, INITIAL_CONTEXT } from '../../redux/contextTypes';

const useStyles = makeStyles((theme) => ({
    messageContainer: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

function NoActionMessages(props) {
    const classes = useStyles();
    const { categories, currentContext } = props

    let message = "";
    if (!currentContext) {
        message = "Click on +Add new Category button";
        if (categories.length !== 0) {
            message = message + " or select category from the list."
        }
    } else {
        message = "Select an action from the toolbar or deselect the category"
    }

    return (
        <>
            {(!currentContext || currentContext === CATEGORY_SELECTED) &&
                (
                    <div className={classes.messageContainer}>
                        <Typography style={{ textAlign: 'center' }}>
                            {message}
                        </Typography>
                    </div>
                )
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        categories: state.categoriesReducer.categories,
        currentContext: state.contextReducer.currentContext
    }
}

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(NoActionMessages)