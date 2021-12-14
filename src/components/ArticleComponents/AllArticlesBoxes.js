import { makeStyles } from '@material-ui/core';
import React from 'react';
import { getArticleCardsFromArticleList } from '../../assets/Articles/ArticlesDatabase';

const useStyles = makeStyles((theme) => ({
    articlesBoxesContainer: {
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        }
    },
    singleArticleBoxStyle: {
        marginBottom: '30px',
        [theme.breakpoints.up('md')]: {
            marginLeft: '48px',
            marginBottom: '0px',
        }
    },
    singleArticleBoxStyleLast: {

    },
}));

function AllArticlesBoxes(props) {
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
        <div className={`${props.className} ${classes.articlesBoxesContainer}`}>
            {listOfArticleCards}
        </div>
    );
}

export default AllArticlesBoxes;