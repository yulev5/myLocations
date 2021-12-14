import { makeStyles } from '@material-ui/core';
import React, { useContext, useMemo } from 'react';
import { UserContext } from '../../contexts/MyContext';
import { getZoomIconBlueBg, getZoomIconGreenBg } from '../../assets/Database/DatabaseUtils';
import ToolImagesSlider from './ToolImagesSlider';
import ZoomImageButton from '../GeneralComponents/ZoomImageButton';
import styled from 'styled-components'
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    toolPicturesContainer: {
        width: '100%',
        marginRight: 'auto',
        marginLeft: 'auto',
        [theme.breakpoints.up('md')]: {
            width: '477px',
        }
    },
    innerContainer: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    blobBackgroundStyle: {
        margin: 'auto',
        position: 'absolute',
        marginTop: '14px',
        right: '0',
        left: '0',
        zIndex: '10',
        height: '250px',
        [theme.breakpoints.up('md')]: {
            width: '100%',
            marginTop: '70px',
        }
    },
    hideBlobStyle: {
        display: 'none'
    },
    toolImageStyle: {
        margin: 'auto',
        position: 'absolute',
        right: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '20',
    },
    zoomIconStyle: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            position: 'absolute',
            right: '0',
            left: '0',
            zIndex: '30',
        }
    },
    ToolImageSliderStyle: {
        height: '300px',
        [theme.breakpoints.up('md')]: {
            height: '390px',
        }
    },
}));

function ToolPicturesSection(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);
    const { currentImageSlider, setCurrentImageSlider } = useContext(UserContext);

    const { images } = data.currentTool;

    //dont show the blob if picture bg is not clear

    const showBlobImage = useMemo(() => {
        if (currentImageSlider != null
            && images[currentImageSlider] != null
            && images[currentImageSlider].hasClearBg != null
            && images[currentImageSlider].hasClearBg === false) {
            return false;
        }
        return true;
    }, [currentImageSlider, images]);


    const blobAltAndTitle = useMemo(() => (`תמונות של ${data.currentTool.nameWithoutRentalText} להשכרה`), [data, data.currentTool])
    const zoomImageBlue = useMemo(() => getZoomIconBlueBg(), []);
    const zoomImageGreen = useMemo(() => getZoomIconGreenBg(), []);

    return (
        <div className={classes.toolPicturesContainer}>

            <div className={classes.innerContainer}>
                {/* blob background */}
                {showBlobImage &&
                    <div className={classes.blobBackgroundStyle}>
                        <Image
                            src="/images/backgrounds/blobBg.png"
                            priority={true}
                            width={190}
                            height={100}
                            layout="responsive"
                            objectFit="contain"
                            title={blobAltAndTitle}
                            alt={blobAltAndTitle}/>
                    </div>
                }

                {/* images slider */}
                <div className={classes.toolImageStyle}>
                    <ToolImagesSlider
                        className={classes.ToolImageSliderStyle}
                        myKey={data.currentTool.id}
                        clearBg={true}
                        priority={true}
                        imagesList={images}
                        width={130}
                        height={100} />
                </div>

                {/* zoom button */}
                <ZoomImageButton
                    className={classes.zoomIconStyle}
                    icon={zoomImageBlue}
                    iconHovered={zoomImageGreen}
                    imagesList={images}
                    height="56" width="56"
                    iconHeight="32" iconWidth="32"
                />
            </div>
        </div>
    );
}

export default ToolPicturesSection;