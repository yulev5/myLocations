import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useRef } from 'react';
import { connect } from "react-redux"
import { setContext, editCategory } from "../../redux/actions/main"
import { CATEGORY_SELECTED, EDIT_CATEGORY } from '../../redux/contextTypes';

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
        width: '50%',
        marginTop: '40px',
    },
    button: {
        marginTop: '40px',
        width: '50%'
    }
}));

function EditCategory({ categories, currentSelectedCategory, currentContext, setContext, editCategory }) {
    const classes = useStyles();
    const catNewNameRef = useRef();

    let currentEditingCategory = categories.find(cat => cat.id == currentSelectedCategory)

    function handleSubmit(event) {
        event.preventDefault();
        editCategory({ name: catNewNameRef.current.value, id: currentEditingCategory.id });
        setContext(CATEGORY_SELECTED);
    }

    function cancelAddingNewCat() {
        setContext(CATEGORY_SELECTED);
    }

    return (
        <>
            {currentContext === EDIT_CATEGORY &&
                (
                    <form className={classes.formContainer} onSubmit={handleSubmit}>
                        <Typography variant="h6" className={classes.header}>Edit Category: {currentEditingCategory.name}</Typography>
                        <TextField required autoFocus inputRef={catNewNameRef} className={classes.textField} label="Insert new Category name" variant="outlined" />
                        <Button className={classes.button} variant="contained" type="submit">Save</Button>
                        <Button className={classes.button} variant="contained" onClick={() => cancelAddingNewCat()}>Cancel</Button>
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
    editCategory
}


export default connect(mapStateToProps, mapDispatchToProps)(EditCategory)