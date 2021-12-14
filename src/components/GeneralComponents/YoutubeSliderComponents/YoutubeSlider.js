import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import HeaderUnderLine from 'components/GeneralComponents/HeaderUnderLine';
import YoutubeSingleVideo from './YoutubeSingleVideo';

const useStyles = makeStyles((theme) => ({
    //Header
    HeaderAndUnderlineStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    otherToolsHeaderStyle: {
        color: myColors.TurquoisePelorous,
        fontWeight: myFontWeights.Weight700Bold,
        fontSize: myFontSizes.TextFontSize24,
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize32,
        }
    },
    HeaderUnderLineStyle: {
        marginTop: '12px',
        backgroundColor: myColors.TurquoisePelorous,
        width: '80px',
        height: '8px',
        [theme.breakpoints.up('md')]: {
            width: '182px',
        }
    },

    //Video
    videosScrollerContainer: {
        marginRight: '15px',
        marginTop: '40px',
        paddingBottom: '15px',
        marginBottom: '40px',
        height: '440px',
        overflowX: 'scroll',
        overflowY: 'hidden',
        whiteSpace: 'nowrap',
    },

    videoAndText: {
        height: '100%',
        display: 'inline-flex',
        flexDirection: 'column',
        marginLeft: '15px',
        borderRadius: '20px',
        border: `2px solid ${myColors.GreyPlatinium}`,
        padding: '20px 20px 0 20px',
        backgroundColor: myColors.LightGreyWildSand
    },
    videoTextsContainer: {
        height: '110px'
    },
    videoHeader: {
        textAlign: 'right',
        fontSize: myFontSizes.TextFontSize18,
        fontWeight: myFontWeights.Weight700Bold,
        marginBottom: '10px',
    },
    videoText: {
        width: '260px',
        whiteSpace: 'pre-line',
        textAlign: 'right',
        fontSize: myFontSizes.TextFontSize16,
        color: myColors.DarkBlueOuterSpace,
        marginBottom: '10px'
    }
}));


function YoutubeSlider({ videosData, headerTitle }) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.HeaderAndUnderlineStyle}>
                <Typography variant="h3" className={`${classes.otherToolsHeaderStyle}`}>
                    {headerTitle}
                </Typography>
                <HeaderUnderLine className={`${classes.HeaderUnderLineStyle}`} />
            </div>

            <div className={`${classes.videosScrollerContainer}`}>
                {videosData.map((video) => {
                    return (

                        <div className={classes.videoAndText} key={video.videoID}>
                            <div className={classes.videoTextsContainer}>
                                <Typography component="h3" className={classes.videoHeader}>{video.videoHeader}</Typography>
                                <Typography component="p" className={classes.videoText}>{video.videoText}</Typography>
                            </div>

                            <YoutubeSingleVideo width="260px" height="260px" videoID={video.videoID} />
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default YoutubeSlider;