import { Dialog, makeStyles } from '@material-ui/core';
import React from 'react';
import Slide from "@material-ui/core/Slide";
import styled from 'styled-components';
import Image from 'next/image';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { myColors } from 'components/Styles/Colors';

const MyDialog = styled(Dialog)`
    .MuiBackdrop-root{
        background-color: rgba(0, 0, 0, 0.82)
    }
    .MuiDialog-paper{
        max-width: 80vw;
        max-height: 90vh;
        width: 80vw;
        height:90vh;
    }
`;

const useStyles = makeStyles((theme) => ({

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide timeout="19990" direction="up" ref={ref} {...props} />;
});

function MyFullScreenImageViewer(props) {
    const classes = useStyles();


    const handleClickOpen = () => {
        props.setIsFullScreenOpen(true);
    };

    const handleClose = () => {
        props.setIsFullScreenOpen(false);
    };

    let currImageToShow = props.imageToShow ? (
        <Image
            src={props.imageToShow.src}
            layout='responsive'
            objectFit="contain"
            width={600}
            height={600}
            alt={props.imageToShow.alt}
            title={props.imageToShow.title}
            placeholder="blur"
            blurDataURL={'/images/iconsAndLogos/logos/השכרת-כלי-עבודה-Power-Tools-Logo.svg'}
        />
    ) :
        null;

    return (
        <MyDialog
            open={props.isFullScreenOpen}
            TransitionComponent={Transition}
            keepMounted={true}
            scroll='body'
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <IconButton aria-label="close" onClick={handleClose}>
                <HighlightOffIcon fontSize="large" style={{ color: myColors.DarkBlueOuterSpace }} />
            </IconButton>

            <div style={{ margin: 'auto' }}>
                {currImageToShow}
            </div>


        </MyDialog>
    );
}

export default MyFullScreenImageViewer;