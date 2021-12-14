import { makeStyles } from '@material-ui/core';
import CategoryBox from 'components/MainPageComponents/CategoryBox';
import { UserContext } from 'contexts/MyContext';
import React, { useContext } from 'react';

const useStyles = makeStyles((theme) => ({
    mobileSliderContainer: {
        display: 'flex',
        height: 'auto',
        paddingBottom: '20px',
        marginRight: '10px',
        marginLeft: '10px',
        overflowX: 'scroll',
    },
    categoryBoxStyle: {
        marginLeft: '16px'
    },
}));

function MainCategoriesMobileSlider(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);

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
                <CategoryBox
                    key={key + i}
                    className={classes.categoryBoxStyle}
                    category={data.superCategories[key].categories[i]} />
            )
        }
    }

    return (
        <div className={props.className}>
            <div className={`${classes.mobileSliderContainer}`}>
                {listOfCategoriesBoxes}
            </div>
        </div>
    );
}

export default MainCategoriesMobileSlider;