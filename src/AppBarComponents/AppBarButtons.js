import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { connect } from "react-redux"
import { setContext } from "../../redux/actions/main"
import { ADD_NEW_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY, INITIAL_CONTEXT, VIEW_CATEGORY_DETAILS } from '../../redux/contextTypes';

const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: '6px',
        fontSize:'12px',
        [theme.breakpoints.up('md')]: {
            fontSize:'14px',
            marginLeft: '10px',
          },
    },
}));

function AppBarButtons({ setContext, currentContext }) {
    const classes = useStyles();

    return (
        <>
            {currentContext === INITIAL_CONTEXT || currentContext === ADD_NEW_CATEGORY ?
                <Button className={classes.button} color="inherit" variant="outlined" onClick={() => { setContext(ADD_NEW_CATEGORY) }}>
                    + Add New Category
                </Button>
                :
                (
                    <>
                        <Button className={classes.button} color="inherit" variant="outlined" onClick={() => { setContext(EDIT_CATEGORY) }}>
                            Edit
                        </Button>

                        <Button className={classes.button} color="inherit" variant="outlined" onClick={() => { setContext(VIEW_CATEGORY_DETAILS) }}>
                            View Details
                        </Button>

                        <Button className={classes.button} color="inherit" variant="outlined" onClick={() => { setContext(DELETE_CATEGORY) }}>
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
        currentContext: state.contextReducer.currentContext,
    }
}

const mapDispatchToProps = {
    setContext,
}


export default connect(mapStateToProps, mapDispatchToProps)(AppBarButtons)