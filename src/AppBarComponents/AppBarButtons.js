import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { connect } from "react-redux"
import { setAppState } from "../../redux/actions/main"
import { ADD_NEW_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY, INITIAL_STATE, VIEW_CATEGORY_DETAILS } from '../../redux/appStateTypes';

const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: '6px',
        fontSize: '12px',
        [theme.breakpoints.up('md')]: {
            fontSize: '14px',
            marginLeft: '10px',
        },
    },
}));

function AppBarButtons({ setAppState, appState }) {
    const classes = useStyles();

    return (
        <>
            {appState === INITIAL_STATE || appState === ADD_NEW_CATEGORY ?
                <Button className={classes.button} color="inherit" variant="outlined" onClick={() => { setAppState(ADD_NEW_CATEGORY) }}>
                    + Add New Category
                </Button>
                :
                (
                    <>
                        <Button className={classes.button} color="inherit" variant="outlined" onClick={() => { setAppState(EDIT_CATEGORY) }}>
                            Edit
                        </Button>

                        <Button className={classes.button} color="inherit" variant="outlined" onClick={() => { setAppState(VIEW_CATEGORY_DETAILS) }}>
                            View Details
                        </Button>

                        <Button className={classes.button} color="inherit" variant="outlined" onClick={() => { setAppState(DELETE_CATEGORY) }}>
                            Delete
                        </Button>
                    </>
                )
            }
        </>
    );
}

const mapStateToProps = state => {
    return {
        appState: state.appStateReducer.currentAppState,
    }
}

const mapDispatchToProps = {
    setAppState,
}


export default connect(mapStateToProps, mapDispatchToProps)(AppBarButtons)