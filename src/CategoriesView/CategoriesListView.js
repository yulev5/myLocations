import React, { useEffect } from 'react';
import { List, ListItemText, makeStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import { connect } from "react-redux"
import { setAppState, saveSelectedCategory } from "../../redux/actions/main"
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { CATEGORY_SELECTED, INITIAL_STATE } from '../../redux/appStateTypes';

const useStyles = makeStyles((theme) => ({
    categoriesListContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'auto',
        width: '98%',
        marginTop: '60px',
        borderRadius: '3px',
        boxShadow: '0 1px 6px rgb(32 33 36 / 28%)',
        [theme.breakpoints.up('md')]: {
            width: '48%',
        },
    },
    list: {
        width: '100%',
    },
    ListItemText: {
        marginLeft: '8px'
    }
}));

function Categories({ categories, currentSelectedCategory, setAppState, saveSelectedCategory }) {
    const classes = useStyles();
    const [boldListItem, setBoldListItem] = React.useState();

    const handleListItemClick = (index, cat) => {
        if (index === boldListItem) {
            handleClearSelection();
        } else {
            setBoldListItem(index);
            setAppState(CATEGORY_SELECTED);
            saveSelectedCategory(cat.id);
        }
    };

    const handleClearSelection = () => {
        setBoldListItem();
        setAppState(INITIAL_STATE);
        saveSelectedCategory(null);
    }


    let categoriesList = null;
    if (categories && categories.length) {
        categoriesList = categories.map((cat, index) => {
            return (
                <ListItem button key={cat.id} onClick={() => handleListItemClick(index + 1, cat)} selected={boldListItem === index + 1}>
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

    useEffect(() => {
        if (!currentSelectedCategory) {
            setBoldListItem();
        }
    }, [currentSelectedCategory]);

    return (
        <div className={classes.categoriesListContainer}>
            <List component="nav" className={classes.list}>
                {categoriesList}
            </List>

            { boldListItem &&
                <List>
                    <ListItem button onClick={handleClearSelection}>
                        <HighlightOffIcon />
                        <ListItemText primary="Clear Selection" className={classes.ListItemText} />
                    </ListItem>
                </List>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        categories: state.categoriesReducer.categories,
        currentSelectedCategory: state.selectedCategoryReducer.currentSelectedCategory,
    }
}

const mapDispatchToProps = {
    saveSelectedCategory,
    setAppState
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories)
