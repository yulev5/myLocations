import { Container } from '@material-ui/core'
import Head from 'next/head'
import { makeStyles } from '@material-ui/core';
import MyLocationsAppBar from '../src/AppBarComponents/MyLocationsAppBar';
import Categories from '../src/CategoriesComponents/CategoriesListView';
import ActionsForms from '../src/ActionsForms/ActionsFroms';

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
        <ActionsForms />
      </Container>
    </>
  )
}

export default Home