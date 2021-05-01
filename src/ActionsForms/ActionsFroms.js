import { makeStyles } from '@material-ui/core';
import React from 'react';
import ViewCategoryDetails from './ViewCategoryDetails';
import NoActionMessages from './NoActionMessages';
import Delete from './Delete';
import AddOrEditCategory from './AddOrEditCategory';

const useStyles = makeStyles((theme) => ({
    contentContainer: {
        marginTop: '60px',
        height: '350px',
        borderRadius: '3px',
        boxShadow: '0 1px 6px rgb(32 33 36 / 28%)',
        width: '98%',
        [theme.breakpoints.up('md')]: {
            width: '48%',
        },
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


function ActionsForms() {
    const classes = useStyles();

    return (
        <div className={classes.contentContainer}>
            <AddOrEditCategory/>
            <ViewCategoryDetails />
            <Delete />
            <NoActionMessages />
        </div>
    );
}

export default ActionsForms;