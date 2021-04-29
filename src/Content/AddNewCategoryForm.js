import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useRef } from 'react';
import { connect } from "react-redux"
import { setContext, addCategory } from "../../redux/actions/main"
import { ADD_NEW_CATEGORY, INITIAL_CONTEXT } from '../../redux/contextTypes';

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

function AddNewCategoryForm(props) {
    const classes = useStyles();
    const { currentContext, setContext, addCategory } = props
    const catNameRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        addCategory({ name: catNameRef.current.value, id: 'id-' + (new Date()).getTime() });
        setContext(INITIAL_CONTEXT);
    }

    function cancelAddingNewCat() {
        setContext(INITIAL_CONTEXT);
    }

    return (
        <>
            {currentContext === ADD_NEW_CATEGORY &&
                (
                    <form className={classes.formContainer} onSubmit={handleSubmit}>
                        <Typography variant="h6" className={classes.header}>Add New Category</Typography>
                        <TextField required autoFocus inputRef={catNameRef} className={classes.textField} label="Category Name" variant="outlined" />
                        <Button className={classes.button} variant="contained" type="submit">Add</Button>
                        <Button className={classes.button} variant="contained" onClick={() => cancelAddingNewCat()}>Cancel</Button>
                    </form>
                )
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        currentContext: state.contextReducer.currentContext
    }
}

const mapDispatchToProps = {
    setContext,
    addCategory
}


export default connect(mapStateToProps, mapDispatchToProps)(AddNewCategoryForm)