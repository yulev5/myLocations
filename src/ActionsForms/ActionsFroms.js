import { makeStyles } from '@material-ui/core';
import React from 'react';
import ViewCategoryDetails from './ViewCategoryDetails';
import NoActionMessages from './NoActionMessages';
import Delete from './Delete';
import AddOrEditCategory from './AddOrEditCategory';
import { connect } from "react-redux"
import { ADD_NEW_CATEGORY, CATEGORY_SELECTED, DELETE_CATEGORY, EDIT_CATEGORY, INITIAL_STATE, VIEW_CATEGORY_DETAILS } from '../../redux/appStateTypes';

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



function ActionsForms({ appState, selectedCat }) {
    const classes = useStyles();

    function renderSwitch() {
        switch (appState) {
            case ADD_NEW_CATEGORY:
            case EDIT_CATEGORY:
                return (< AddOrEditCategory appState={appState} selectedCat={selectedCat} />);

            case VIEW_CATEGORY_DETAILS:
                return (<ViewCategoryDetails selectedCat={selectedCat} />);

            case DELETE_CATEGORY:
                return (<Delete selectedCat={selectedCat}/>);

            case CATEGORY_SELECTED:
            case INITIAL_STATE:
                return (<NoActionMessages />);
        }
    }


    return (
        <div className={classes.contentContainer}>
            {renderSwitch()}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        appState: state.appStateReducer.currentAppState,
    }
}

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(ActionsForms)