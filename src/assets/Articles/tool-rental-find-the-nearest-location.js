import React from 'react';
import { Card, CardMedia, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import Link from 'next/link';
import { makeStyles } from "@material-ui/styles";
import Head from 'next/head';
import { GetArticleMainImage } from '../Database/DatabaseUtils';
import MyBreadCrumbs from '../../components/GeneralComponents/MyBreadCrumbs';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import HeroAndCatShortDesc from 'components/GeneralComponents/HeroAndCatShortDesc';

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
        margin: '0 10px',
        lineHeight: '150%',
        textAlign: 'right',
    },
    HeaderH1Style: {
        whiteSpace: 'pre-line',
        fontWeight: 'bold',
        fontSize: '1.9em',
        lineHeight: '130%'
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
    }
});

function ToolRentalFindNearestLocation(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    let articleID = "tool-rental-find-the-nearest-location";
    let data = {
        articleID: articleID,
        articleName: "מצא את המיקום הקרוב ביותר להשכרת כלי עבודה",
        subfolderName: 'articles',
    }

    function getIcon(panel) {
        if (expanded === panel)
            return (<RemoveIcon />);
        else
            return (<AddIcon />);
    }

    let imageObj = GetArticleMainImage(articleID);

    return (
        <article>
            <Head>
                <title>מצא את הסניף הקרוב ביותר להשכרת כלים</title>
                <meta name="description" content="השכרת כלי עבודה - רשימת כתובות מהם ניתן לשכור כלי עבודה - מצא את המקום הקרוב ביותר אליך" />
                <meta name="keywords" content="השכרת כלי עבודה בירושלים, השכרת כלי עבודה ירושלים, השכרת כלי עבודה בתל אביב, השכרת כלי עבודה בפתח תקווה, השכרת כלי עבודה בהרצליה, השכרת כלי עבודה כתובת" />
            </Head>


            <header>
                <HeroAndCatShortDesc
                    h1Title={`מצא את נקודת
                        השכרת כלי העבודה
                        הקרובה אליך`}
                    shortText=" "
                    imageAlt="מצא נקודת השכרת כלי עבודה קרובה"
                    imageTitle="מספר סניפים להשכרת כלי עבודה - מצא את הסניף הקרוב אליך"
                />
                <br />
            </header>

            <Card variant='outlined' className={classes.MainImageStyle}>
                <CardMedia className={classes.CardMediaStyle}
                    component="img"
                    src={imageObj.src}
                    srcSet={imageObj.srcSet}
                    title={imageObj.title}
                    alt={imageObj.alt}
                />
            </Card>


            <main className={classes.MainTextBoxStyle}>

                <Typography className={classes.ContentStyle} component="section">
                    <section>
                        <section>
                            <Typography>
                                יש לנו וותק של יותר מ-30 שנה בהשכרה ומכירה של ציוד וכלי עבודה בירושלים.
                            </Typography>
                            <Typography>
                                אנחנו שמחים לעדכן כי לאחרונה התרחבנו גם למרכז הארץ ובקרוב יהיה ניתן לשכור מגוון כלי עבודה גם בתל אביב ובכל איזור המרכז.
                            </Typography>

                            <br />
                            <Typography className={classes.ParagraphStyle} component="p">
                                רשימת נקודות מהן ניתן להשכיר כלי עבודה וציוד לבנייה. לחץ על העיר הקרובה אליך כדי לראות פרטים נוספים אודות השכרת כלי עבודה במיקום קרוב לעיר זאת.
                            </Typography>
                        </section>
                        <p>&nbsp;</p>

                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={getIcon('panel1')}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className={classes.heading}>השכרת כלי עבודה בירושלים</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Link passHref href="/rentals/jerusalem">
                                    <a>
                                        <Typography>
                                            לחץ כאן לפרטים נוספים
                                        </Typography>
                                    </a>
                                </Link>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={getIcon('panel2')}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography className={classes.heading}>השכרת כלי עבודה בתל אביב</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Link passHref href="/rentals/tel-aviv">
                                    <a>
                                        <Typography>
                                            לחץ כאן לפרטים נוספים
                                        </Typography>
                                    </a>
                                </Link>
                            </AccordionDetails>
                        </Accordion>
                    </section>
                </Typography>
                <br />
                <Button className={classes.ButtonHomePageStyle} href='/' size="large" color="primary" variant="outlined">לחץ כאן לצפייה בכל כלי העבודה להשכרה</Button>
            </main>
        </article>
    );
}

export default ToolRentalFindNearestLocation;