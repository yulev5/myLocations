import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core';
import Swiper from 'react-id-swiper';
import styled from 'styled-components';
import { getToolBoxes } from './ToolsBoxes';

const StyledSwiperContainer = styled.div`
    .swiper-container{
        position: absolute;
        left: 10px;
        right: 10px;
        min-height: 220px;
    }
    .swiper-slide{
            width: auto;
            margin-left: 20px;
    }
    .swiper-slide-active{
            flex-shrink: initial;
            width: auto;
            margin-left: 20px;
    }

    @media (min-width:960px){
        .swiper-container{
            position: absolute;
            left: 10px;
            right: 10px;
            height: 370px;
        }       
        .swiper-slide{
            width: auto;
            margin-left: 40px;
        }
        .swiper-slide-active{
            flex-shrink: initial;
            width: auto;
            margin-left: 40px;
        }
    }
    .swiper-scrollbar{
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        width: 1080px;
        text-align: center;
    }
`;

const useStyles = makeStyles((theme) => ({
    myContainerStyle: {
        minHeight: '220px',
        height: '40vw',
        [theme.breakpoints.up('md')]: {
            height: '360px',
        }
    },

    // CategoryBoxStyleNoMargin: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: '240px',
    //     height: '240px',
    //     boxSizing: 'border-box',
    //     backgroundImage: `url(${categoryBackground})`,
    //     boxShadow: '0px 3px 6px #00000029',
    //     borderRadius: '8px',
    //     '&:hover': {
    //         border: '6px solid #46C1C3',
    //         boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.2), 0px 3px 6px #00000029'
    //     }
    // },
}));

const ToolsSlider = ({ removeCurrentTool, className }) => {
    const classes = useStyles();
    let toolsBoxes = getToolBoxes(removeCurrentTool);
    // const toolsBoxes = useMemo(() => getToolBoxes(removeCurrentTool), [getToolBoxes, removeCurrentTool]);
    const params = {
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        //     hide: false
        // }
    }

    return (
        <StyledSwiperContainer>
            <div className={`${classes.myContainerStyle} ${className}`}>
                <Swiper
                    // key={Math.floor(Math.random() * 9999)}
                    // slidesOffsetBefore="1"
                    {...params}
                    freeMode='true'
                    slidesPerView='auto'
                    freeModeMomentum='false'>

                    {toolsBoxes}

                </Swiper>
            </div>
        </StyledSwiperContainer>
    );
}


export default ToolsSlider;