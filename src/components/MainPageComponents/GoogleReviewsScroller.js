import { makeStyles, Typography } from '@material-ui/core';
import { myFontSizes } from 'components/Styles/Sizes';
import React from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { myColors } from '../Styles/Colors';
import SingleReviewComponent from './SingleReviewComponent';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

//----------------------------
// https://swiperjs.com/react/
//----------------------------
// https://www.tutorialdocs.com/tutorial/swiper/api-controller.html
// https://swiperjs.com/svelte/

const StyledDiv = styled.div`
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


const useStyles = makeStyles((theme) => ({
    swiperStyle: {
        marginTop: '65px',
    },
    reviewSlideStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '460px',
        [theme.breakpoints.up('md')]: {
            height: '460px',
        }
    },
}));

function GoogleReviewsScroller(props) {
    const classes = useStyles();
    SwiperCore.use([Autoplay]);
    const params = {
        loop: true
    }

    const reviewsList = [
        {
            nameAndCity: "דן ק. רמת גן",
            profession: "שיפוצניק",
            imgId: "dan",
            review: "שכרתי מהדק אדמה להכנת השטח לפני הנחת דשא סינטטי בגינה, שירות מעולה, זול מאוד ויעיל. תודה רבה"
        },
        {
            nameAndCity: "עדי פ. תל אביב",
            profession: "אדריכלית",
            imgId: "adi",
            review: "שנה שלמה חיכיתי שבעלי יתלה את הטלויזיה שקנינו על הקיר, והיה לו את התירוץ הקבוע שאין לנו כלי עבודה שנקרא פטישון. הגעתי לאתר הזה השכרתי פטישון ועכשיו הטלויזיה תלויה על הקיר"
        },
        {
            nameAndCity: "אלעד י. ירושלים",
            profession: "מתקין מזגנים",
            imgId: "elad",
            review: "מקדחת היהלום שלי הייתה בתיקון אז שכרתי מקדחת יהלום חלופית, חייב לציין לטובה את האיכות, הנוחות והמחיר. אשתמש בשירות זה בהמשך שוב"
        }
    ]

    return (
        <StyledDiv>
            <Swiper
                className={classes.swiperStyle}
                {...params}
                autoplay={true}
                autoplay= {{
                    delay: '10000',
                    disableOnInteraction: 'false'
                }}
                spaceBetween={20}
                navigation
                pagination={{ clickable: false }}>

                {reviewsList.map((review, index) => {
                    return (
                        <SwiperSlide key={index} className={classes.reviewSlideStyle}>
                            <SingleReviewComponent reviewObj={review} />
                        </SwiperSlide>)

                })}
            </Swiper>
        </StyledDiv>
    );
}

export default GoogleReviewsScroller;