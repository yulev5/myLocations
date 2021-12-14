import { makeStyles } from '@material-ui/core';
import React from 'react';
import ReactPlayer from 'react-player'
import LazyLoad from 'react-lazyload';

const useStyles = makeStyles((theme) => ({
    iframe: {
        width: '260px',
        height: '260px',
        margin: 'auto'
    },
}));

function YoutubeSingleVideo(props) {
    const classes = useStyles();

    return (
        <LazyLoad once height={260} offset={400}>
            <ReactPlayer
                className={classes.iframe}
                controls
                width={props.width}
                height={props.height}
                url={`https://www.youtube.com/embed/${props.videoID}?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&vq=hd720&cc_load_policy=0&start=0&end=0&vq=hd1080`}
            />
        </LazyLoad>
    );
}

export default YoutubeSingleVideo;