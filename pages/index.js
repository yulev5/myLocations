import { Container } from '@material-ui/core'
import Head from 'next/head'
import { makeStyles } from '@material-ui/core';
import MyLocationsAppBar from '../src/AppBarComponents/MyLocationsAppBar';
import Categories from '../src/Categories/CategoriesListView';
import Content from '../src/Content/Content';

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


function Home() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>myLocations</title>
      </Head>

      <MyLocationsAppBar />

      <Container className={classes.mainContainer}>
        <Categories />
        <Content />
      </Container>
    </>
  )
}

export default Home