import { makeStyles } from '@material-ui/core';
import { UserContext } from 'contexts/MyContext';
import React, { useContext } from 'react';
import Swiper from 'react-id-swiper';
import styled from 'styled-components';
import CategoryBox from './CategoryBox';
import { myColors } from 'components/Styles/Colors';

const StyledSwiperContainer = styled.div`
    .swiper-container{
        position: absolute;
        left: 10px;
        right: 10px;
        height: 153px;
    }

    @media (min-width:960px){
        .swiper-container{
            position: absolute;
            left: 10px;
            right: 10px;
            height: 260px;
        }       
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
    .swiper-scrollbar{
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        width: 1080px;
        text-align: center;
    }

    .swiper-button-next { 
        color: ${myColors.DarkBlueOuterSpaceDarker};
        background-color: rgb(0,0,0,0.15);
        border-radius: 4px;
    }
    .swiper-button-prev { 
        color: ${myColors.DarkBlueOuterSpaceDarker};
        background-color: rgb(0,0,0,0.15);
        border-radius: 4px;
    }
`;

const useStyles = makeStyles((theme) => ({
    myContainerStyle: {
        height: '260px',
    },
    SwiperStyle: {
        height: '260px',
    },
    CoupleSwipersStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '240px',
    },
}));

function MainCategoriesSlider(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);

    const params = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    }

    const listOfCategoriesBoxes = [];
    for (var key of Object.keys(data.superCategories)) {
        //for each --super-- category 
        //loop through the categories list for this super
        for (let i = 0; i < data.superCategories[key].categories.length; i++) {
            // //If we display a list of categories in category page -  Dont add current Category to the list 
            if (props.removeCurrentCat &&
                data.currentCategoryData.urlPostFix &&
                data.currentCategoryData.urlPostFix === data.superCategories[key].categories[i].urlPostFix) {
                continue;
            }

            listOfCategoriesBoxes.push(
                <div className={classes.CoupleSwipersStyle} key={data.superCategories[key].categories[i].id}>
                    <CategoryBox category={data.superCategories[key].categories[i]} />
                </div>
            )
        }
    }

    return (
        <StyledSwiperContainer>
            <div className={`${classes.myContainerStyle} ${props.className}`}>
                <Swiper
                    {...params}
                    key={classes.myContainerStyle}
                    className={classes.SwiperStyle}
                    freeMode='true'
                    slidesPerView='auto'
                    freeModeMomentum='false'>
                    {listOfCategoriesBoxes}
                </Swiper>
            </div>
        </StyledSwiperContainer>
    );
}


export default MainCategoriesSlider;