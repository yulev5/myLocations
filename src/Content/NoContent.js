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

function NoContent(props) {
    const classes = useStyles();
    const { categories, currentContext } = props

    let message = "";
    if (!currentContext) {
        message = "Click on +Add new Category button";
        if (categories.length !== 0) {
            message = message + " or select category from the list."
        }
    }

    return (
        <>
            {!currentContext &&
                (
                    <div className={classes.messageContainer}>
                        <Typography>
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
        categories: state.categories.categories,
        currentContext: state.contextReducer.currentContext
    }
}

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(NoContent)