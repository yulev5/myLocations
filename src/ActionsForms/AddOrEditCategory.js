import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useRef } from 'react';
import { connect } from "react-redux"
import { setAppState, addCategory, editCategory } from "../../redux/actions/main"
import { ADD_NEW_CATEGORY, CATEGORY_SELECTED, EDIT_CATEGORY, INITIAL_STATE } from '../../redux/appStateTypes';

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

function AddOrEditCategory({ appState, selectedCat, setAppState, addCategory, editCategory }) {
    const classes = useStyles();
    const textFieldRef = useRef();

    let formTitle = "";
    let buttonText = "";
    let textFieldHint = "";
    switch (appState) {
        case EDIT_CATEGORY:
            formTitle = `Edit Category: ${selectedCat.name}`
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
        switch (appState) {
            case EDIT_CATEGORY:
                editCategory({ name: textFieldRef.current.value, id: selectedCat.id });
                setAppState(CATEGORY_SELECTED);
                break;
            case ADD_NEW_CATEGORY:
                addCategory({ name: textFieldRef.current.value, id: (new Date()).getTime() });
                setAppState(INITIAL_STATE);
        }
    }

    function cancelAction() {
        switch (appState) {
            case EDIT_CATEGORY:
                setAppState(CATEGORY_SELECTED);
                break;
            case ADD_NEW_CATEGORY:
                setAppState(INITIAL_STATE);
        }
    }


    return (
        <form className={classes.formContainer} onSubmit={handleSubmit}>
            <Typography variant="h6" className={classes.header}>{formTitle}</Typography>
            <TextField required autoFocus inputRef={textFieldRef} className={classes.textField} label={textFieldHint} variant="outlined" />
            <Button className={classes.button} variant="contained" type="submit">{buttonText}</Button>
            <Button className={classes.button} variant="contained" onClick={() => cancelAction()}>Cancel</Button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        appState: state.appStateReducer.currentAppState,
    }
}

const mapDispatchToProps = {
    setAppState,
    addCategory,
    editCategory
}


export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditCategory)