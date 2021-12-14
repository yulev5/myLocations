import { makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/MyContext';
import { getZoomIconBlueBg, getZoomIconGreenBg } from '../../assets/Database/DatabaseUtils';
import ZoomImageButton from '../GeneralComponents/ZoomImageButton';
import Image from 'next/image';
import ToolImagesSlider from 'components/ToolPageComponents/ToolImagesSlider';

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

function ElectricTablePicturesSection(props) {
    const classes = useStyles();
    const { currentimageSlider, storeCurrentimageSlider } = useContext(UserContext);

    let imagesList = props.electricTableData.images;

    //dont show the blob if picture bg is not clear
    let showBlobImage = true;
    if (currentimageSlider != null && imagesList[currentimageSlider] != null && imagesList[currentimageSlider].hasClearBg != null && imagesList[currentimageSlider].hasClearBg === false) {
        showBlobImage = false;
    }

    let blobAltAndTitle = `תמונות של ${props.electricTableData.nameWithoutRentalText}`;

    let zoomImageBlue = getZoomIconBlueBg();
    let zoomImageGreen = getZoomIconGreenBg();

    return (
        <div className={classes.toolPicturesContainer}>

            <div className={classes.innerContainer}>

                {/* blob background */}
                {showBlobImage &&
                    <div className={classes.blobBackgroundStyle}>
                        <Image
                            src="/images/backgrounds/blobBg.png"
                            priority={true}
                            layout="fill"
                            objectFit="contain"
                            title={blobAltAndTitle}
                            alt={blobAltAndTitle}
                        />
                    </div>
                }

                {/* images slider */}
                <div className={classes.toolImageStyle}>
                    <ToolImagesSlider
                        className={classes.ToolImageSliderStyle}
                        myKey={props.electricTableData.id}
                        clearBg={true}
                        priority={true}
                        imagesList={imagesList}
                        width={130}
                        height={100} />
                </div>

                {/* zoom button */}
                <ZoomImageButton
                    className={classes.zoomIconStyle}
                    icon={zoomImageBlue}
                    iconHovered={zoomImageGreen}
                    imagesList={imagesList}
                    height="56" width="56"
                    iconHeight="32" iconWidth="32"
                />
            </div>
        </div>
    );
}

export default ElectricTablePicturesSection;