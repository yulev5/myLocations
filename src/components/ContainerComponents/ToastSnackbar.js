import React, { useContext, useEffect } from 'react';
import { makeStyles, SnackbarContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components'
import { myColors } from 'components/Styles/Colors';
import { UserContext } from 'contexts/MyContext';

const StyledDiv = styled.div`
    .MuiSnackbarContent-action{
        justify-content: space-between;
        margin-left: 0px;
    }
    .MuiSnackbarContent-message{
        flex-grow:1;
        text-align: center;
    }
`;

const useStyles = makeStyles((theme) => ({
    snackbar: {
        marginTop: '50px',
        [theme.breakpoints.up('md')]: {
            marginTop: '0px',
        },
    },
    snackbarContent: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '90%',
        whiteSpace: 'pre',
        [theme.breakpoints.up('md')]: {
            width: '600px'
        },
    },
    action: {
        marginLeft: '0px',
        color: myColors.SuperLightGreyWhite,
    }
}));

function ToastSnackbar(props) {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        // if (reason === 'clickaway') {
        //     return;
        // }

        setOpen(false);
    };

    useEffect(() => {
        if (!data.ToastSnackbarShowed) {
            setTimeout(() => {
                setOpen(true);
            }, 1000);
            data.ToastSnackbarShowed = true;
            storeData(data);
        }
    }, []);

    return (
        <StyledDiv>
            <Snackbar
                className={classes.snackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
            >
                <SnackbarContent
                    className={classes.snackbarContent}
                    message="חג שמח!   פתוחים גם בפסח להשכרת כלי עבודה"
                    action={
                        <IconButton className={classes.action} size="small" aria-label="close" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    }
                />

            </Snackbar>
        </StyledDiv>
    );
}

export default ToastSnackbar;