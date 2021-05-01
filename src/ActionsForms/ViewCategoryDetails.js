import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from "react-redux"
import { CATEGORY_SELECTED, VIEW_CATEGORY_DETAILS } from '../../redux/contextTypes';
import { setContext } from "../../redux/actions/main"

const useStyles = makeStyles((theme) => ({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '350px',
    },
    header: {
        textAlign: 'center',
        fontWeight: '500',
        marginTop: '20px',
    },
    textField: {
        width: '50%',
        marginTop: '40px',
    },
    button: {
        marginTop: '40px',
        width: '50%'
    }
}));

function ViewCategoryDetails({ categories, currentSelectedCategoryId, currentContext, setContext }) {
    const classes = useStyles();

    let currentViewingCategory = categories.find(cat => cat.id == currentSelectedCategoryId)

    function handleSubmit(event) {
        event.preventDefault();
        setContext(CATEGORY_SELECTED);
    }
    
    return (
        <>
            {currentContext === VIEW_CATEGORY_DETAILS &&
                (
                    <form className={classes.formContainer} onSubmit={handleSubmit}>
                        <Typography variant="h6" className={classes.header}>Category {currentViewingCategory.name} Details:</Typography>
                        <Typography style={{ marginTop: '30px' }}>Name: {currentViewingCategory.name}</Typography>
                        <Button className={classes.button} variant="contained" type="submit">Close</Button>
                    </form>
                )
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        categories: state.categoriesReducer.categories,
        currentSelectedCategoryId: state.selectedCategoryReducer.currentSelectedCategoryId,
        currentContext: state.contextReducer.currentContext
    }
}

const mapDispatchToProps = {
    setContext,
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewCategoryDetails)