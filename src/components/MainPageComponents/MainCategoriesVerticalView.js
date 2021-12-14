import { makeStyles } from '@material-ui/core';
import { isMobileOrTablet } from 'components/Utils/Utils';
import { UserContext } from 'contexts/MyContext';
import React, { useContext } from 'react';
import CategoryBox from './CategoryBox';

const useStyles = makeStyles((theme) => ({
    verticalCategoriesConatiner: {
        marginTop: '30px',
        [theme.breakpoints.up('md')]: {
            marginTop: '40px'
        }
    },
    categoriesLine: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
        marginRight: '20px',
        [theme.breakpoints.up('md')]: {
            marginBottom: '40px',
            justifyContent: 'flex-start',
        }

    },
    singleCategory: {
        marginLeft: '20px',
        [theme.breakpoints.up('md')]: {
            marginLeft: '40px'
        }
    },
}));

function MainCategoriesVerticalView(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);

    let categoriesSortedToLines = [];

    if (isMobileOrTablet()) {
        let numberOfCategoriesLines = Math.round(data.categories.length / 2);
        for (let i = 0; i < numberOfCategoriesLines; i++) {
            let currIndex = (i * 2);
            let middleIndex = (i * 2) + 1;

            categoriesSortedToLines.push(
                <div key={i} className={classes.categoriesLine}>
                    <div className={classes.singleCategory}>
                        <div className={classes.CoupleSwipersStyle} key={Math.floor(Math.random() * 9999)}>
                            <CategoryBox category={data.categories[currIndex]} />
                        </div>
                    </div>
                    {data.categories[middleIndex] ?
                        <div className={classes.singleCategory}>
                            <div className={classes.CoupleSwipersStyle} key={Math.floor(Math.random() * 9999)}>
                                <CategoryBox category={data.categories[middleIndex]} />
                            </div>
                        </div>
                        :
                        null
                    }
                </div>
            );
        }
    }
    else {
        let numberOfCategoriesLines = Math.ceil(data.categories.length / 4);
        for (let i = 0; i < numberOfCategoriesLines; i++) {
            let currIndex = (i * 4);
            let middleIndex = (i * 4) + 1;
            let thirdIndex = (i * 4) + 2;
            let fourthIndex = (i * 4) + 3;

            categoriesSortedToLines.push(
                <div key={i} className={classes.categoriesLine}>
                    <div className={classes.singleCategory}>
                        <div className={classes.CoupleSwipersStyle} key={Math.floor(Math.random() * 9999)}>
                            <CategoryBox category={data.categories[currIndex]} />
                        </div>
                    </div>
                    {data.categories[middleIndex] ?
                        <div className={classes.singleCategory}>
                            <div className={classes.CoupleSwipersStyle} key={Math.floor(Math.random() * 9999)}>
                                <CategoryBox category={data.categories[middleIndex]} />
                            </div>
                        </div>
                        :
                        null
                    }
                    {data.categories[thirdIndex] ?
                        <div className={classes.singleCategory}>
                            <div className={classes.CoupleSwipersStyle} key={Math.floor(Math.random() * 9999)}>
                                <CategoryBox category={data.categories[thirdIndex]} />
                            </div>
                        </div>
                        :
                        null
                    }
                    {data.categories[fourthIndex] ?
                        <div className={classes.singleCategory}>
                            <div className={classes.CoupleSwipersStyle} key={Math.floor(Math.random() * 9999)}>
                                <CategoryBox category={data.categories[fourthIndex]} />
                            </div>
                        </div>
                        :
                        null
                    }
                </div>
            );
        }
    }

    return (
        <div className={`${props.className} ${classes.verticalCategoriesConatiner}`}>
            {categoriesSortedToLines}
        </div>
    );
}

export default MainCategoriesVerticalView;