import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useRef } from 'react';
import { connect } from "react-redux"
import { setContext, addCategory, editCategory } from "../../redux/actions/main"
import { ADD_NEW_CATEGORY, CATEGORY_SELECTED, EDIT_CATEGORY, INITIAL_CONTEXT } from '../../redux/contextTypes';

const useStyles = makeStyles((theme) => ({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
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
        marginTop: '40px',
        width: '80%',
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
    },
    button: {
        marginTop: '40px',
        width: '80%',
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
    }
}));

function AddOrEditCategory({ currentContext, setContext, categories, currentSelectedCategory, addCategory, editCategory }) {
    const classes = useStyles();
    const textFieldRef = useRef();

    let formTitle = "";
    let buttonText = "";
    let textFieldHint = "";
    let currentEditingCategory = null;
    switch (currentContext) {
        case EDIT_CATEGORY:
            currentEditingCategory = categories.find(cat => cat.id == currentSelectedCategory)
            formTitle = `Edit Category: ${currentEditingCategory.name}`
            buttonText = "Save";
            textFieldHint = "Insert new Category name"
            break;
        case ADD_NEW_CATEGORY:
            formTitle = "Add New Category";
            buttonText = "Add";
            textFieldHint = "Category Name"
            break;
    }

    function handleSubmit(event) {
        event.preventDefault();
        switch (currentContext) {
            case EDIT_CATEGORY:
                editCategory({ name: textFieldRef.current.value, id: currentEditingCategory.id });
                setContext(CATEGORY_SELECTED);
                break;
            case ADD_NEW_CATEGORY:
                addCategory({ name: textFieldRef.current.value, id: (new Date()).getTime() });
                setContext(INITIAL_CONTEXT);
        }
    }

    function cancelAction() {
        switch (currentContext) {
            case EDIT_CATEGORY:
                setContext(CATEGORY_SELECTED);
                break;
            case ADD_NEW_CATEGORY:
                setContext(INITIAL_CONTEXT);
        }
    }



    return (
        <>
            {(currentContext === ADD_NEW_CATEGORY || currentContext === EDIT_CATEGORY) &&
                (
                    <form className={classes.formContainer} onSubmit={handleSubmit}>
                        <Typography variant="h6" className={classes.header}>{formTitle}</Typography>
                        <TextField required autoFocus inputRef={textFieldRef} className={classes.textField} label={textFieldHint} variant="outlined" />
                        <Button className={classes.button} variant="contained" type="submit">{buttonText}</Button>
                        <Button className={classes.button} variant="contained" onClick={() => cancelAction()}>Cancel</Button>
                    </form>
                )
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        currentContext: state.contextReducer.currentContext,
        categories: state.categoriesReducer.categories,
        currentSelectedCategory: state.selectedCategoryReducer.currentSelectedCategory,
        currentContext: state.contextReducer.currentContext
    }
}

const mapDispatchToProps = {
    setContext,
    addCategory,
    editCategory
}


export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditCategory)