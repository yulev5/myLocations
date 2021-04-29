import React from 'react';
import { List, ListItemText, makeStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import { connect } from "react-redux"
import { setInfo, setContext, addCategory, saveSelectedCategory } from "../../redux/actions/main"
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { CATEGORY_SELECTED } from '../../redux/contextTypes';

const useStyles = makeStyles((theme) => ({
    list: {
        width: '100%'
    },
}));

function Categories(props) {
    const classes = useStyles();
    const { name, setInfo, categories, addCategory, setContext, saveSelectedCategory, currentSelectedCategory } = props
    const [selectedIndex, setSelectedIndex] = React.useState();

    

    const handleListItemClick = (index, cat) => {
        setSelectedIndex(index);
        setContext(CATEGORY_SELECTED);
        saveSelectedCategory(cat.id);
    };

    const handleClickAway = () => {
        setSelectedIndex();
        saveSelectedCategory(null);
    };

    let categoriesList = null;
    if (categories && categories.length !== 0) {
        categoriesList = categories.map((cat, index) => {
            return (
                <ListItem button key={cat.id} onClick={() => handleListItemClick(index + 1, cat)} selected={selectedIndex === index + 1}>
                    <ListItemText primary={cat.name} />
                </ListItem>
            )
        })
    } else {
        categoriesList =
            <ListItem>
                <ListItemText primary={"Categories List Is Empty..."} />
            </ListItem>
    }


    return (
        <>
            <ClickAwayListener onClickAway={handleClickAway}>
                <List component="nav" className={classes.list}>
                    {categoriesList}
                </List>
            </ClickAwayListener>
        </>
    );
}

const mapStateToProps = state => {
    return {
        name: state.main.name,
        categories: state.categories.categories,
        currentSelectedCategory: state.selectedCategoryReducer.currentSelectedCategory,
        currentContext: state.contextReducer.currentContext,
    }
}

const mapDispatchToProps = {
    setInfo,
    setContext,
    addCategory,
    saveSelectedCategory
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories)
