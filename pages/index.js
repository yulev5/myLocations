import { Typography } from '@material-ui/core'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  someTest: {
    fontSize: '20px'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <Head>
        <title>myLocations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography className={classes.someTest}>
          zzzzz
        </Typography>
      </main>




      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
