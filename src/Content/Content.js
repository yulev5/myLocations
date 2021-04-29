import { makeStyles } from '@material-ui/core';
import React from 'react';
import AddNewCategoryForm from './AddNewCategoryForm';
import EditCategory from './EditCategory';
import ViewCategoryDetails from './ViewCategoryDetails';
import NoContent from './NoContent';
import Delete from './Delete';

const useStyles = makeStyles((theme) => ({
    contentContainer: {
        marginTop: '60px',
        width: '48%',
        height: '350px',
        borderRadius: '3px',
        boxShadow: '0 1px 6px rgb(32 33 36 / 28%)',
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


function Content(props) {
    const classes = useStyles();

    return (
        <div className={classes.contentContainer}>
            <AddNewCategoryForm />
            <EditCategory />
            <ViewCategoryDetails />
            <Delete />
            <NoContent />
        </div>
    );
}

export default Content;