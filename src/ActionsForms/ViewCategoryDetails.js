import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from "react-redux"
import { CATEGORY_SELECTED } from '../../redux/appStateTypes';
import { setAppState } from "../../redux/actions/main"

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

function ViewCategoryDetails({ setAppState, selectedCat}) {
    const classes = useStyles();

    function handleSubmit(event) {
        event.preventDefault();
        setAppState(CATEGORY_SELECTED);
    }

    return (
        <form className={classes.formContainer} onSubmit={handleSubmit}>
            <Typography variant="h6" className={classes.header}>Category {selectedCat.name} Details:</Typography>
            <Typography style={{ marginTop: '30px' }}>Name: {selectedCat.name}</Typography>
            <Button className={classes.button} variant="contained" type="submit">Close</Button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = {
    setAppState,
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewCategoryDetails)