import React from 'react';
import { Card, CardMedia, Typography, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";
import Head from 'next/head';
import { GetArticleMainImage, GetArticleImage } from '../Database/DatabaseUtils';
import MyBreadCrumbs from '../../components/GeneralComponents/MyBreadCrumbs';

const useStyles = makeStyles({
    ButtonHomePageStyle: {
        width: '100%',
        marginBottom: '10px',
    },
    MainImageStyle: {
        height: '180px',
        width: '100%',
        marginBottom: '10px',
    },
    CardMediaStyle: {
        width: '100%',
        height: '100%',
    },
    MainTextBoxStyle: {
        lineHeight: '150%',
        textAlign: 'right',
    },
    HeaderH1Style: {
        whiteSpace: 'pre-line',
        fontWeight: 'bold',
        fontSize: '1.3em'
    },
    SubtitleStyle: {
        margin: '16px 0 20px 0',
        color: 'grey',
        fontWeight: 'bold',
        fontSize: '1em',
        textAlign: 'right',
        lineHeight: '130%',
    },
    InArticleHeader2: {
        fontWeight: 'bold',
        fontSize: '20px',
        marginBottom: '10px',
    },
    InArticleHeader3: {
        fontWeight: 'bold',
        fontSize: '16px',
    },
    ContentStyle: {
        textAlign: 'right',
        marginBottom: '5px',
    },
    ParagraphStyle: {
        textAlign: 'right',
    },
    imagesContainerDiv: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    imageDiv: {
        marginLeft: '10px'
    }
});

function TheDifferencesBetweenDrillsDemolitionHammerRotaryHammer(props) {
    const classes = useStyles();

    let articleID = "the-differences-between-drills-demolition-hammer-rotary-hammer";
    let data = {
        articleID: articleID,
        articleName: "מקדחה - פטישון - פטיש חציבה - מה ההבדלים ואיזה כלי אתה צריך?",
        subfolderName: 'articles',
    }

    let mainImageObj = GetArticleMainImage(articleID);
    let concreteImageObj = GetArticleImage("concrete");
    let metalImageObj = GetArticleImage("metal");

    return (
        <article>
            <Head>
                <title>מקדחה - פטישון - פטיש חציבה - מה ההבדלים ואיזה כלי אתה צריך?</title>
                <meta name="description" content="מקדחה - פטישון - פטיש חציבה - מה ההבדלים ואיזה כלי אתה צריך?" />
                <meta name="keywords" content="פטיש חציבה פטישון, מקדחה פטישון, מקדחה לבטון, מקדחה לחציבה, פטיש חציבה קטן, מה ההבדל בין פטיש חציבה לפטישון" />
            </Head>

            <main className={classes.MainTextBoxStyle}>
                <header>
                    <Typography>בקרוב....</Typography>
                    {/* <Typography className={classes.HeaderH1Style} variant="h6" component="h1">
                        {`מקדחה | פטישון | פטיש חציבה
                        `}
                    </Typography>

                    <Typography className={classes.SubtitleStyle}>
                        בניתי כאן משחק נחמד שיסביר מה ההבדל בין מקדחה, פטישון, ופטיש חציבה וגם יעזור להחליט איזה כלי עבודה מבין ה-3 יתאים לך לעבודה שאתה צריך לבצע.
                    </Typography>
                    <br />
                    <Typography className={classes.HeaderH1Style} variant="h6" component="h3">
                        בחר את סוג החומר לעבודה
                    </Typography>

                    <div className={classes.imagesContainerDiv}>
                        <div className={classes.imageDiv}>
                            <Card variant='outlined' className={classes.MainImageStyle}>
                                <CardMedia className={classes.CardMediaStyle}
                                    component="img"
                                    src={concreteImageObj.src}
                                    srcSet={concreteImageObj.srcSet}
                                    title={concreteImageObj.title}
                                    alt={concreteImageObj.alt}
                                />
                            </Card>
                        </div>
                        <div className={classes.imageDiv}>
                            <Card variant='outlined' className={classes.MainImageStyle}>
                                <CardMedia className={classes.CardMediaStyle}
                                    component="img"
                                    src={metalImageObj.src}
                                    srcSet={metalImageObj.srcSet}
                                    title={metalImageObj.title}
                                    alt={metalImageObj.alt}
                                />
                            </Card>
                        </div>
                        <div className={classes.imageDiv}>
                            <Card variant='outlined' className={classes.MainImageStyle}>
                                <CardMedia className={classes.CardMediaStyle}
                                    component="img"
                                    src={mainImageObj.src}
                                    srcSet={mainImageObj.srcSet}
                                    title={mainImageObj.title}
                                    alt={mainImageObj.alt}
                                />
                            </Card>
                        </div>
                    </div> */}

                </header>

            </main>
        </article>
    );
}

export default TheDifferencesBetweenDrillsDemolitionHammerRotaryHammer;