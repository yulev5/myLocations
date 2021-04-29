import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useRef } from 'react';
import { connect } from "react-redux"
import { setContext, setCategory } from "../../redux/actions/main"
import { INITIAL_CONTEXT } from '../../redux/contextTypes';

const useStyles = makeStyles((theme) => ({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '60px',
        width: '100%',
        height: '350px',
        // border: '1px solid #aaa',
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
    buttonAdd: {
        marginTop: '40px',
        width: '50%'
    }
}));

function AddNewCategoryForm(props) {
    const classes = useStyles();
    const { currentContext, setContext, setCategory } = props
    const catNameRef = useRef();

    const addCategoryClicked = () => {
        setCategory([{ name: catNameRef.current.value }]);
        setContext(INITIAL_CONTEXT);
    }

    return (
        <>
            {currentContext &&
                (
                    <div className={classes.formContainer}>
                        <Typography variant="h6" className={classes.header}>Add New Category</Typography>
                        <TextField inputRef={catNameRef} className={classes.textField} label="Category Name" variant="outlined" />
                        <Button className={classes.buttonAdd} variant="contained" onClick={addCategoryClicked}>Add</Button>
                    </div>
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
    setCategory
}


export default connect(mapStateToProps, mapDispatchToProps)(AddNewCategoryForm)