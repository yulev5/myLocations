import { Container } from '@material-ui/core'
import Head from 'next/head'
import { makeStyles } from '@material-ui/core';
import MyLocationsAppBar from '../src/AppBarComponents/MyLocationsAppBar';
import Categories from '../src/CategoriesComponents/CategoriesListView';
import ActionsForms from '../src/ActionsForms/ActionsFroms';
import { connect } from "react-redux"

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  },
}));


function Home({ categories, currentSelectedCategoryId }) {
  const classes = useStyles();

  let selectedCat = null;
  if (currentSelectedCategoryId) {
    selectedCat = categories.find(cat => cat.id == currentSelectedCategoryId);
  }

  return (
    <>
      <Head>
        <title>myLocations</title>
      </Head>

      <MyLocationsAppBar selectedCat={selectedCat} />

      <Container className={classes.mainContainer}>
        <Categories />
        <ActionsForms />
      </Container>
    </>
  )
}

const mapStateToProps = state => {
  return {
    categories: state.categoriesReducer.categories,
    currentSelectedCategoryId: state.selectedCategoryReducer.currentSelectedCategoryId,
  }
}

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)