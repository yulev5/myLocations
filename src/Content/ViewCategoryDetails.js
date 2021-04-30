import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useRef } from 'react';
import { connect } from "react-redux"
import { INITIAL_CONTEXT, VIEW_CATEGORY_DETAILS } from '../../redux/contextTypes';
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

function ViewCategoryDetails(props) {
    const classes = useStyles();
    const { categories, currentSelectedCategory, currentContext, setContext, addCategory } = props
    const catNewNameRef = useRef();

    let currentEditingCategory = categories.find(cat => cat.id == currentSelectedCategory)

    function handleSubmit(event) {
        event.preventDefault();
        addCategory({ name: catNewNameRef.current.value, id: currentEditingCategory.id });
        setContext(INITIAL_CONTEXT);
    }

    function cancelAddingNewCat() {
        setContext(INITIAL_CONTEXT);
    }

    return (
        <>
            {currentContext === VIEW_CATEGORY_DETAILS &&
                (
                    <form className={classes.formContainer} onSubmit={handleSubmit}>
                        <Typography variant="h6" className={classes.header}>Category {currentEditingCategory.name} Details:</Typography>
                        <Typography style={{ marginTop: '30px' }}>Name: {currentEditingCategory.name}</Typography>
                        <Button className={classes.button} variant="contained" onClick={() => cancelAddingNewCat()}>Close</Button>
                    </form>
                )
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        categories: state.categoriesReducer.categories,
        currentSelectedCategory: state.selectedCategoryReducer.currentSelectedCategory,
        currentContext: state.contextReducer.currentContext
    }
}

const mapDispatchToProps = {
    setContext,
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewCategoryDetails)