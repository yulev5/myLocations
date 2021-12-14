import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { hoverDarkBlueOuterSpace } from '../Styles/MyStyles';
import HeaderUnderLine from '../GeneralComponents/HeaderUnderLine';
import ButtonBig from '../GeneralComponents/ButtonBig';
import { getArticleCardsFromArticleList } from '../../assets/Articles/ArticlesDatabase';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';

const useStyles = makeStyles((theme) => ({
    HeaderAndUnderlineStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '64px',
        [theme.breakpoints.up('md')]: {
            marginTop: '80px',
        }
    },
    articleLineHeaderStyle: {
        color: myColors.TurquoisePelorous,
        fontWeight: myFontWeights.Weight700Bold,
        fontSize: myFontSizes.TextFontSize24,
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize32,
        }
    },
    HeaderUnderLineStyle: {
        marginTop: '8px',
        backgroundColor: myColors.TurquoisePelorous,
        width: '80px',
        height: '8px',
        [theme.breakpoints.up('md')]: {
            width: '182px',
            marginTop: '12px',
        }
    },
    articlesBoxesContainer: {
        marginTop: '24px',
        marginRight: '27px',
        display: 'flex',
        justifyContent: 'flex-start',
        overflowX: 'scroll',
        height: '440px',
        [theme.breakpoints.up('md')]: {
            marginTop: '40px',
            marginRight: 'auto',
            justifyContent: 'center',
            height: 'auto',
            overflowX: 'visible',
        }
    },
    allArticlesButtonContainerStyle: {
        margin: '28px 0 64px 0',
        [theme.breakpoints.up('md')]: {
            margin: '60px 0 80px 0',
        }
    },
    buttonBigStyle: {
        width: '192px',
        height: '59px',
        [theme.breakpoints.up('md')]: {
            width: '158px',
            height: '56px',
        }
    },
    hoverDarkBlueOuterSpace,
    singleArticleBoxStyle: {
        marginLeft: '32px',
        [theme.breakpoints.up('md')]: {
            marginLeft: '48px'
        }
    },
    singleArticleBoxStyleLast: {
        marginLeft: '27px',
        [theme.breakpoints.up('md')]: {
            marginLeft: 'auto'
        }
    },
}));

function ArticleLine(props) {
    const classes = useStyles();

    let listOfArticleCards = getArticleCardsFromArticleList();
    for (var i = 0; i < listOfArticleCards.length; i++) {
        if (i === listOfArticleCards.length - 1) {
            listOfArticleCards[i] = React.cloneElement(listOfArticleCards[i], { className: classes.singleArticleBoxStyleLast })
        } else {
            listOfArticleCards[i] = React.cloneElement(listOfArticleCards[i], { className: classes.singleArticleBoxStyle })
        }
    };

    return (
        <>
            <div className={classes.HeaderAndUnderlineStyle}>
                <Typography variant="h3" className={`${classes.articleLineHeaderStyle}`}>
                    טיפים ומדריכים - מידע שימושי
                </Typography>
                <HeaderUnderLine className={`${classes.HeaderUnderLineStyle}`} />
            </div>

            <div className={classes.articlesBoxesContainer}>
                {listOfArticleCards}
            </div>

            <ButtonBig
                containerClassName={classes.allArticlesButtonContainerStyle}
                buttonClassName={classes.buttonBigStyle}
                href="/articles"
                text="לכל הכתבות"
                hover={`${classes.hoverDarkBlueOuterSpace}`} />
        </>
    );
}

export default ArticleLine;