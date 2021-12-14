import { makeStyles } from '@material-ui/core';
import React from 'react';
import FooterLink from './FooterLink';

const useStyles = makeStyles((theme) => ({
    footerLinksColumn: {
        marginTop: '8px',
        marginLeft: '33px',
        [theme.breakpoints.up('md')]: {
            marginTop: '24px',
            marginLeft: '30px',
        }
    },
    linkStyle: {
        marginBottom: '17px'
    },
}));

function Footer5CategoriesLinksList(props) {
    const classes = useStyles();

    let footerLinksList = [];
    footerLinksList = props.groupOf5OrLessCategories.map((category, index) => {
        return (
            <FooterLink
                className={classes.linkStyle}
                text={category.linkText}
                href={category.href}
                asLink={category.asLink}
                key={index} />
        )
    });

    return (
        <div className={classes.footerLinksColumn}>
            {footerLinksList}
        </div>
    );
}

export default Footer5CategoriesLinksList;