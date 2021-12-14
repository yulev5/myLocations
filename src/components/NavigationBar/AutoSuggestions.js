import { Divider, List, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core';
import Link from 'next/link';
import React, { useContext } from 'react';
import { GetCategoryMainImage } from '../../assets/Database/DatabaseUtils';
import { UserContext } from '../../contexts/MyContext';
import { textColorDarkBlueOuterSpace, TextFontSize18, TextFontWeight700Bold } from '../Styles/MyStyles';

const useStyles = makeStyles((theme) => ({
    placeHolderSearchText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    TextFontSize18,
    textColorDarkBlueOuterSpace,
    suggestionsListDiv: {
        display: 'flex',
        flexDirection: 'column'
    },
    resultListItemText: {
        paddingRight: '10px',
        textAlign: 'right',
    },
    suggestionPicture: {
        objectFit: 'contain',
        height: '80px',
        paddingLeft: '15px',
    },
    TextFontWeight700Bold
}));


function getListOfSuggestions(data, input, classes, props) {
    let suggestions = data.categories.filter(
        category => (
            category.HebrewName.search(input) !== -1
            || category.Description.search(input) !== -1
            || category.metaDescription.search(input) !== -1
            || category.metaKeywords.search(input) !== -1
            || category.pageTitle.search(input) !== -1
        )
    );

    if (suggestions.length === 0) {
        return (
            <div className={classes.placeHolderSearchText}>
                <Typography className={`${classes.TextFontSize18} ${classes.textColorDarkBlueOuterSpace}`}>
                    אין תוצאות... נסה לשנות את טקסט החיפוש
                </Typography>
            </div>)
    }

    let suggestionsView = suggestions.map((category, index) => {
        const hrefLink = `/rentals/[categoryID]`;
        const urlPostFix = category.urlPostFix;
        const asLink = `/rentals/${urlPostFix}`;
        let imageObj = GetCategoryMainImage(category.id);

        return (
            <>
                <Link key={index} href={hrefLink} as={asLink} passHref>
                    <a>
                        <ListItem key={index} button onClick={() => props.closeAutoComplete()}>
                            <ListItemText className={`${classes.resultListItemText}`} primary={
                                <Typography className={`${classes.TextFontWeight700Bold} ${classes.TextFontSize18} ${classes.textColorDarkBlueOuterSpace}`}>
                                    {category.HebrewName}
                                </Typography>
                            } />
                            <img className={`${classes.suggestionPicture}`}
                                sizes={`80px`}
                                src={imageObj.src}
                                srcSet={imageObj.srcSet}
                                alt={imageObj.alt}
                                title={imageObj.title}
                            />
                        </ListItem>
                    </a>
                </Link>
                {(index < suggestions.length - 1) ? <Divider /> : null}
            </>
        )
    });

    return suggestionsView;
}


function AutoSuggestions(props) {
    const classes = useStyles();
    const { data, storeData } = useContext(UserContext);

    let suggestionsToShow = props.input === "" ?
        (
            <div className={classes.placeHolderSearchText}>
                <Typography key={props.input} className={`${classes.TextFontSize18} ${classes.textColorDarkBlueOuterSpace}`}>
                    הזן טקסט לחיפוש כלי עבודה להשכרה...
                </Typography>
            </div>
        )
        :
        (
            <List className={classes.suggestionsListDiv}>
                {getListOfSuggestions(data, props.input, classes, props)}
            </List>
        )

    return (
        <>
            { suggestionsToShow}
        </>
    );
}

export default AutoSuggestions;