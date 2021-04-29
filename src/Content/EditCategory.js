import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useRef } from 'react';
import { connect } from "react-redux"
import { setContext, addCategory } from "../../redux/actions/main"
import { ADD_NEW_CATEGORY, EDIT_CATEGORY, INITIAL_CONTEXT } from '../../redux/contextTypes';

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

function EditCategory(props) {
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
        categories: state.categories.categories,
        currentSelectedCategory: state.selectedCategoryReducer.currentSelectedCategory,
        currentContext: state.contextReducer.currentContext
    }
}

const mapDispatchToProps = {
    setContext,
    addCategory
}


export default connect(mapStateToProps, mapDispatchToProps)(EditCategory)