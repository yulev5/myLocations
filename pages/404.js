import React from 'react';
import { Container, makeStyles, Typography, Button } from '@material-ui/core';
import { Get404ImageSrcSet } from '../src/assets/Database/DatabaseUtils';
import Head from 'next/head';
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
    containerStyle: {
        marginTop: '100px',
        width: '90%',
        [theme.breakpoints.up('sm')]:{
            width: '50%',
        },
    },
    ButtonHomePageStyle: {
        width: '100%',
        marginBottom: '10px',
        marginTop: '20px',
    },

}));

function Custom404(props) {
    const classes = useStyles();
    const imgObj = Get404ImageSrcSet();

    return (
        <Container className={classes.containerStyle}>
            <Head >
            </Head>

            <Typography variant="h2" component="h1" align="center" >Power-Tools.co.il</Typography>
            <Typography variant="h3" component="p" align="center">הדף אליו הגעת לא קיים</Typography>

            <div style={{margin:'auto', width:"430px", height:'150px', marginTop:'20px'}}>
                <Image
                width={290}
                height={100}            
                    layout="responsive"
                    src={imgObj[0].src}
                    alt="שגיאת 404 - הדף לא קיים"/>
            </div>

            <Button className={classes.ButtonHomePageStyle} href='/' size="large" color="primary" variant="contained">לחץ כאן למעבר להשכרת כלי עבודה</Button>

        </Container>
    );
}

export default Custom404;