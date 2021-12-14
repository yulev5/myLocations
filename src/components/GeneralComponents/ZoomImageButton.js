import { makeStyles } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../contexts/MyContext';
import { backgourndColorLightGreyWildSand } from '../Styles/MyStyles';
import MyFullScreenImageViewer from './MyFullScreenImageViewer';

const useStyles = makeStyles((theme) => ({
    containerDivStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        boxShadow: '0px 3px 6px #00000029',
        cursor: 'pointer'
    },
    backgourndColorLightGreyWildSand,
}));

function ZoomImageButton({ icon, iconHovered, width, height, className, iconWidth, iconHeight, imagesList }) {
    const classes = useStyles();
    const [isHovered, setIsHovered] = useState(false);
    //using context to know current viewed image in the slider
    const { currentimageSlider, storeCurrentimageSlider } = useContext(UserContext);
    const [isFullScreenOpen, setIsFullScreenOpen] = useState(false);

    width = width + "px";
    height = height + "px";
    iconWidth = iconWidth + "px";
    iconHeight = iconHeight + "px";
    let iconToShow = isHovered ? iconHovered : icon;

    function handleHoverChanged(hoverStatus) {
        setIsHovered(hoverStatus);
    }

    function zoomClicked() {
        setIsFullScreenOpen(!isFullScreenOpen);
    }

    return (
        <>
            <div
                className={`${className} ${classes.containerDivStyle} ${classes.backgourndColorLightGreyWildSand}`}
                style={{ width: width, height: height }}
                onMouseEnter={() => handleHoverChanged(true)}
                onMouseLeave={() => handleHoverChanged(false)}
                onClick={() => zoomClicked()}>
                <img
                    style={{ width: iconWidth, height: iconHeight }}
                    src={iconToShow.src}
                    alt={iconToShow.alt}
                    title={iconToShow.title}
                />
            </div>

            {isFullScreenOpen
                && <MyFullScreenImageViewer isFullScreenOpen={isFullScreenOpen} setIsFullScreenOpen={setIsFullScreenOpen} imageToShow={imagesList[currentimageSlider]} />
            }
        </>
    );
}

export default ZoomImageButton;