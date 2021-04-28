import { List, ListItemText, makeStyles, Typography } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    list: {
        width: '100%'
    },
}));

function Categories(props) {
    const classes = useStyles();

    const categories = [
        // { name: 'Museums' },
        // { name: 'Restaurants' },
        // { name: 'Clubs' },
    ]

    let categoriesList = null;
    if (categories.length === 0) {
        categoriesList =
            <ListItem>
                <ListItemText primary={"Categories List Is Empty..."} />
            </ListItem>
    } else {
        categoriesList = categories.map((cat) => {
            return (
                <ListItem button key={cat.name}>
                    <ListItemText primary={cat.name} />
                </ListItem>
            )
        })
    }

    return (
        <List component="nav" className={classes.list}>
            {categoriesList}
        </List>
    );
}

export default Categories;