import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from "react-redux"
import { setContext, deleteCategory } from "../../redux/actions/main"
import { CATEGORY_SELECTED, DELETE_CATEGORY, INITIAL_CONTEXT } from '../../redux/contextTypes';

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
        width: '50%'
    }
}));

function Delete(props) {
    const classes = useStyles();
    const { categories, currentSelectedCategory, currentContext, setContext } = props

    let currentEditingCategory = categories.find(cat => cat.id == currentSelectedCategory)

    function handleSubmit(event) {
        debugger;
        event.preventDefault();
        deleteCategory(currentEditingCategory.id)
        // setContext(INITIAL_CONTEXT);
    }

    function cancelDeleting() {
        setContext(CATEGORY_SELECTED);
    }

    return (
        <>
            {currentContext === DELETE_CATEGORY &&
                (
                    <form className={classes.formContainer} onSubmit={handleSubmit}>
                        <Typography variant="h6" className={classes.header}>Delete {currentEditingCategory.name} Category?</Typography>

                        <Button className={classes.button} variant="contained" type="submit">Delete</Button>
                        <Button className={classes.button} variant="contained" onClick={() => cancelDeleting()}>Cancel</Button>
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
    deleteCategory,
}


export default connect(mapStateToProps, mapDispatchToProps)(Delete)