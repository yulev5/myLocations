import React from 'react';
import { List, ListItemText, makeStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import { connect } from "react-redux"
import { setInfo, setCategory } from "../../redux/actions/main"


const useStyles = makeStyles((theme) => ({
    list: {
        width: '100%'
    },
}));

function Categories(props) {
    const classes = useStyles();
    const { name, setInfo, categories, setCategory } = props

    let categoriesList = null;
    if (categories && categories.length !== 0) {
        categoriesList = categories.map((cat) => {
            return (
                <ListItem button key={cat.name}>
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
            <List component="nav" className={classes.list}>
                {categoriesList}
            </List>

            {/* <Button onClick={() => {
                setCategory(
                    [
                        { name: 'Museums' },
                        { name: 'Restaurants' },
                        { name: 'Clubs' },
                    ]
                )
            }}>
                yes add cat
            </Button> */}

        </>
    );
}

const mapStateToProps = state => {
    return {
        name: state.main.name,
        categories: state.categories.categories
    }
}

const mapDispatchToProps = {
    setInfo,
    setCategory
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories)
