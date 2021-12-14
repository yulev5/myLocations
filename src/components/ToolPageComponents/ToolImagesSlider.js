// https://swiperjs.com/get-started/
// https://kidjp85.github.io/doc/get-started/
// https://react-id-swiper.ashernguyen.site/
// react examples:
// https://react-id-swiper.ashernguyen.site/example/default
import React, { useCallback, useContext, useMemo } from 'react';
import Swiper, { Navigation, Pagination } from 'swiper';
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';
import { makeStyles } from '@material-ui/core/styles';
import { backgourndColorLightGreyWildSand } from '../Styles/MyStyles';
import styled from 'styled-components';
import { myColors } from '../Styles/Colors';
import { UserContext } from '../../contexts/MyContext';
import Image from 'next/image';
import useDimensions from 'react-cool-dimensions';

const StyledDiv = styled.div`
    .swiper-container{
        height: 100%;
    }
    .swiper-pagination{
        display: flex;
        justify-content: center;
        bottom: 0px;
        }
    .swiper-pagination-fraction{
        width: auto;
        top: 0px;
        }
    .swiper-pagination-bullet{
        background:${myColors.TurquoisePelorous}
    }
    .swiper-pagination-bullet-active{
        background: ${myColors.DarkBlueOuterSpace}
    }
    .swiper-button-prev{
        color: ${myColors.DarkBlueOuterSpaceDarker}
    }
    .swiper-button-next{
        color: ${myColors.DarkBlueOuterSpaceDarker}
    }
`;

const useStyles = makeStyles({
    divOuterContainer: {
        paddingBottom: '10px',
    },
    backgourndColorLightGreyWildSand,
    SliderContainerStyle: {
        height: '100%',
        width: '100%',
    },
    ImageDivStyle: {
        height: '96%',
        position: 'relative',
    },
    ImageStyle: {
        maxWidth: '100%',
        maxHeight: '100%',
        width: 'auto',
        height: 'auto',
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        margin: 'auto',
    }
});

export default function ToolImagesSlider({ imagesList, priority, width: propsWidth, height: propsHeight, myKey, clearBg, className }) {
    const classes = useStyles();
    const { currentimageSlider, storeCurrentimageSlider } = useContext(UserContext);

    let params = {
        Swiper,
        lazy: true,
        loop: false,
        modules: [Navigation, Pagination],
        spaceBetween: 30,
        on: {
            init: (swiper) => storeCurrentimageSlider(geSlideDataIndex(swiper)),
            slideChange: (swiper) => storeCurrentimageSlider(geSlideDataIndex(swiper))
        }
    }

    if (imagesList.length > 1) {
        params.pagination = {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: false
        };
        params.navigation = {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }

    const geSlideDataIndex = useCallback((swipe) => {
        var activeIndex = swipe.activeIndex;
        var slidesLen = swipe.slides.length;
        if (swipe.params.loop) {
            switch (swipe.activeIndex) {
                case 0:
                    activeIndex = slidesLen - 3;
                    break;
                case slidesLen - 1:
                    activeIndex = 0;
                    break;
                default:
                    --activeIndex;
            }
        }
        return activeIndex;
    }, []);

    const bakeImagesList = useCallback(() => {
        const jsxImagesList = [];
        const { observe, width } = useDimensions();

        imagesList.map((imageObj, index) => {
            jsxImagesList.push(
                <div className={classes.ImageDivStyle} key={index}>
                    <div className={classes.ImageStyle} key={imageObj.title}>
                        {currentimageSlider === index
                            && <Image
                                ref={observe}
                                sizes={(width !== undefined && width != 0) ? `${Math.round(width)}px` : '400px'}
                                src={imageObj.src}
                                priority={priority}
                                layout="responsive"
                                width={propsWidth}
                                height={propsHeight}
                                objectFit="contain"
                                title={imageObj.title}
                                alt={imageObj.alt}
                                placeholder="blur"
                                blurDataURL={'/images/iconsAndLogos/logos/השכרת-כלי-עבודה-Power-Tools-Logo.svg'}
                            />}
                    </div>
                </div>
            );
        });
        return jsxImagesList;
    }, [useDimensions, imagesList, currentimageSlider]);

    return (
        <StyledDiv
            key={myKey}
            className={`${classes.divOuterContainer} ${clearBg ? null : classes.backgourndColorLightGreyWildSand} ${className}`}>
            <ReactIdSwiperCustom className={classes.SliderContainerStyle} {...params}>
                {bakeImagesList()}
            </ReactIdSwiperCustom>
        </StyledDiv>
    )
}