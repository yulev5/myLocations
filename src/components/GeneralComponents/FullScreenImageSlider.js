// import { makeStyles } from '@material-ui/core';
import React from 'react';
import ImgsViewer from 'react-images-viewer'


// const useStyles = makeStyles((theme) => ({
// }));

function FullScreenImageSlider(props) {
    // const classes = useStyles();

    function OnClose() {
        props.zoomClicked();
    }

    return (
        <>
            <ImgsViewer
                imgs={props.imagesList}
                onClose={() => OnClose()}
                isOpen={props.isFullScreenOpen}
            />


            {/* {props.isFullScreenOpen && (
                <Lightbox
                    large={props.imagesList[0].src}
                    OnClose={() => OnClose()}
                />
            )} */}



        </>
    );
}

export default FullScreenImageSlider;