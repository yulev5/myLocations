import { makeStyles } from '@material-ui/core';
import Carousel from 'nuka-carousel';
import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { myColors } from 'components/Styles/Colors';

const useStyles = makeStyles((theme) => ({
    carouselStyle: {
        marginRight: '-10px',
        [theme.breakpoints.up('md')]: {
            marginRight: '0px',
        }
    },
    iframeContainerStyle: {
        display: 'block',
        margin: '0 auto',
        width: '85%',
        height: '400px',
        [theme.breakpoints.up('md')]: {
            height: '500px',
        }
    },
    buttonPrevStyle: {
        cursor: 'pointer',
        marginRight: '0px',
        marginLeft: '0px',
        fill: myColors.DarkBlueOuterSpaceDarker,
        [theme.breakpoints.up('md')]: {
            marginRight: '20px',
            marginLeft: '20px',
        }
    },
    buttonNextStyle: {
        cursor: 'pointer',
        marginRight: '-5px',
        marginLeft: '0px',
        fill: myColors.DarkBlueOuterSpaceDarker,
        [theme.breakpoints.up('md')]: {
            marginRight: '20px',
            marginLeft: '20px',
        }
    }
}));

function YoutubeVideosSlider(props) {
    const classes = useStyles();

    let videosList = [];

    props.content.map((youtubeVideoId, index) => {
        videosList.push(
            <div key={index}>
                <div className={classes.iframeContainerStyle}>
                    <iframe
                        allowFullScreen
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        width="100%"
                        height="100%"
                        type="text/html"
                        src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=0&fs=1&iv_load_policy=3&showinfo=1&rel=0&vq=hd720&cc_load_policy=0&start=0&end=0&vq=hd1080`}>
                    </iframe>
                </div>
            </div>
        );
    });

    return (

        <Carousel
            className={classes.carouselStyle}
            dragging={true}
            wrapAround={true}
            defaultControlsConfig={{
                pagingDotsStyle: {
                    fill: myColors.DarkBlueOuterSpaceDarker,
                }
            }}
            renderCenterLeftControls={({ previousSlide }) => (
                <ArrowBackIosIcon
                    className={classes.buttonPrevStyle}
                    onClick={previousSlide}
                    fontSize="large" />
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <ArrowForwardIosIcon
                    className={classes.buttonNextStyle}
                    onClick={nextSlide}
                    fontSize="large" />
            )}
        >
            {videosList}
        </Carousel>
    );
}

export default YoutubeVideosSlider;