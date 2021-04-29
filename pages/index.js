import { Button, Container, Typography } from '@material-ui/core'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core';
import MyLocationsAppBar from '../src/AppBarComponents/MyLocationsAppBar';
import Categories from '../src/Categories/CategoriesListView';
import { useState } from 'react'
import { connect } from "react-redux"
import { setInfo } from "../redux/actions/main"
import Content from '../src/Content/Content';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent:'space-around',
    },
  },
}));


function Home(props) {
  const classes = useStyles();
  const { name, setInfo } = props
  const [newName, setName] = useState("")

  return (
    <>
      <Head>
        <title>myLocations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MyLocationsAppBar />

      <Container className={classes.mainContainer}>
        <Categories />
        <Content />





      </Container>


      {/* <footer className={styles.footer}>

      </footer> */}
    </>
  )
}


const mapStateToProps = state => {
  return { name: state.main.name }
}

const mapDispatchToProps = {
  setInfo
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)