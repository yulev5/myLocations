import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { connect } from "react-redux"
import { setContext } from "../../redux/actions/main"
import { ADD_NEW_CATEGORY } from '../../redux/contextTypes';

const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: '10px'
    },
}));

function AppBarButtons(props) {
    const classes = useStyles();
    const { currentContext, setContext, currentSelectedCategory } = props

    return (
        <>
            {!currentSelectedCategory &&
                <Button className={classes.button} color="inherit" variant="outlined" onClick={() => { setContext(ADD_NEW_CATEGORY) }}>
                    + Add New Category
                </Button>
            }
        </>
    );
}

const mapStateToProps = state => {
    return {
        currentContext: state.contextReducer.currentContext,
        currentSelectedCategory: state.selectedCategoryReducer.currentSelectedCategory,
    }
}

const mapDispatchToProps = {
    setContext,
}


export default connect(mapStateToProps, mapDispatchToProps)(AppBarButtons)