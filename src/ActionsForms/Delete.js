import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from "react-redux"
import { setAppState, deleteCategory, saveSelectedCategory } from "../../redux/actions/main"
import { CATEGORY_SELECTED, INITIAL_STATE } from '../../redux/appStateTypes';

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

function Delete({ setAppState, deleteCategory, selectedCat, saveSelectedCategory }) {
    const classes = useStyles();

    function handleSubmit(event) {
        event.preventDefault();
        setAppState(INITIAL_STATE);
        saveSelectedCategory(null);
        deleteCategory(selectedCat.id);
    }

    function cancelDeleting() {
        setAppState(CATEGORY_SELECTED);
    }

    return (
        <form className={classes.formContainer} onSubmit={handleSubmit}>
            <Typography variant="h6" className={classes.header}>Delete {selectedCat.name} Category?</Typography>
            <Button className={classes.button} variant="contained" type="submit">Delete</Button>
            <Button className={classes.button} variant="contained" onClick={() => cancelDeleting()}>Cancel</Button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = {
    setAppState,
    deleteCategory,
    saveSelectedCategory
}


export default connect(mapStateToProps, mapDispatchToProps)(Delete)