import { makeStyles, Typography } from '@material-ui/core';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import Link from 'next/link';
import React from 'react';
import ButtonMedium from '../GeneralComponents/ButtonMedium';
import { backgourndColorDarkBlueOuterSpace } from '../Styles/MyStyles';
import { GAEvent, GAEventAction, GAEventCat } from '../Utils/Tracking';
import Image from 'next/image';
import { isMobileOrTablet } from 'components/Utils/Utils';

const useStyles = makeStyles((theme) => ({
    articleBoxStyle: {
        boxShadow: '-3px 4px 6px #00000040',
        borderRadius: '8px',
        '&:hover': {
            boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.2), 0px 3px 6px #00000029, 0px 0px 0px 6px #46C1C3'
        },
        width: '280px',
        height: '420px',
        [theme.breakpoints.up('md')]: {
            width: '260px',
            height: '380px',
        }

    },
    innerArticleBoxStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
        padding: '12px 12px 24px 12px',
        [theme.breakpoints.up('md')]: {
            padding: '15px 10px 17px 10px',
        }
    },
    articleImageStyle: {
        width: '256px',
        height: '171px',
        borderRadius: '8px',
        [theme.breakpoints.up('md')]: {
            width: '240px',
            height: '144px',
        }
    },
    articleHeaderStyle: {
        marginTop: '12px',
        textAlign: 'right',
        fontSize: myFontSizes.TextFontSize18,
        fontWeight: myFontWeights.Weight700Bold,
        [theme.breakpoints.up('md')]: {
            fontSize: myFontSizes.TextFontSize16,
        }
    },
    articleSubHeaderStyle: {
        marginTop: '12px',
        textAlign: 'right',
        fontSize: myFontSizes.TextFontSize16,
        fontWeight: myFontWeights.Weight500,
    },
    backgourndColorDarkBlueOuterSpace,
    toFullArticleButtonStyle: {
        height: '47px',
        width: '150px',
        [theme.breakpoints.up('md')]: {
            width: '140px',
        }
    }
}));

function NewArticleViewerCard(props) {
    const classes = useStyles();
    // const [isHovered, setIsHovered] = useState(false);

    const hrefLink = `/articles/[articleName]`;
    const asLink = `/articles/${props.ArticleID}`;
    // let buttonHoverStyle = isHovered ? classes.backgourndColorDarkBlueOuterSpace : null;

    return (
        <Link href={hrefLink} as={asLink} passHref>
            <a>
                <div
                    className={`${classes.articleBoxStyle} ${props.className}`}
                    // onMouseEnter={() => setIsHovered(true)}
                    // onMouseLeave={() => setIsHovered(false)}
                    onClick={() => GAEvent(GAEventCat.ARTICLE_PAGE, GAEventAction.CARD_CLICKED, props.ArticleName)}>

                    <div className={`${classes.innerArticleBoxStyle}`}>

                        <div>
                            <Image
                                className={`${classes.articleImageStyle}`}
                                src={props.ArticleImageObj.src}
                                width={isMobileOrTablet() ? 256 : 240}
                                height={isMobileOrTablet() ? 171 : 144}
                                // sizes={`(min-width: 960px) 240px, 256px`}
                                // srcSet={props.ArticleImageObj.srcSet}
                                title={props.ArticleImageObj.title}
                                alt={props.ArticleImageObj.alt}
                            />

                            <Typography variant="h3" className={`${classes.articleHeaderStyle}`}>
                                {props.ArticleTitle}
                            </Typography>

                            <Typography variant="h4" className={`${classes.articleSubHeaderStyle}`}>
                                {props.articleFirstLine}
                            </Typography>
                        </div>

                        {/* <ButtonMedium className={`${classes.buttonReadMoreStyle}`} hover={buttonHoverStyle} height="47" width="140" text="לכתבה המלאה" /> */}
                        <ButtonMedium
                            buttonStyle={classes.toFullArticleButtonStyle}
                            text="לכתבה המלאה" />
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default NewArticleViewerCard;