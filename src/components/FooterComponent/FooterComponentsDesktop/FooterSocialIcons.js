import { makeStyles } from '@material-ui/core';
import { getFacebookIconBlue, getFacebookIconGrey, getMessageIconBlueBg, getMessangerIconGrey, getWazeIconBlue, GetWhatsAppIconGrey, getYoutubeIconBlue, getYoutubeIconGrey } from 'assets/Database/DatabaseUtils';
import { isMobileOrTablet } from 'components/Utils/Utils';
import React from 'react';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    socialsIconsContianer: {
        marginTop: '40px',
        marginRight: 'auto',
        marginLeft: 'auto',
        [theme.breakpoints.up('md')]: {
            marginTop: '0px',
        }
    },
    socialGreyIconLinkStyle: {
        marginLeft: '36px'
    },
    socialIconStyle: {
        width: '44px',
        height: '44px',
        [theme.breakpoints.up('md')]: {
            width: '36px',
            height: '36px',
        }
    },
}));

function FooterSocialIcons(props) {
    const classes = useStyles();
    let isMobile = isMobileOrTablet();

    let firstWhatsAppOrWaze = isMobile ? getWazeIconBlue() : GetWhatsAppIconGrey();
    let secondYoutubeOrMessageIcon = isMobile ? getMessageIconBlueBg() : getYoutubeIconGrey();
    let thirdFacebookOrYoutubeIcon = isMobile ? getYoutubeIconBlue() : getFacebookIconGrey();
    let thourthMessangerOrFacebookIcon = isMobile ? getFacebookIconBlue() : getMessangerIconGrey();

    return (
        <div className={classes.socialsIconsContianer}>
            <a
                className={classes.socialGreyIconLinkStyle}
                href={isMobile ?
                    "https://ul.waze.com/ul?place=ChIJk7AB_UXWAhURY0P5ZRQZEoc&ll=31.79444440%2C35.18732040&navigate=yes"
                    :
                    "https://wa.me/972524343983?text=%D7%90%D7%A9%D7%9E%D7%97%20%D7%A9%D7%AA%D7%A6%D7%A8%D7%95%20%D7%90%D7%99%D7%AA%D7%99%20%D7%A7%D7%A9%D7%A8"
                }
                target="_blank"
                rel="noreferrer noopener">
                <img
                    className={classes.socialIconStyle}
                    src={firstWhatsAppOrWaze.src}
                    alt={firstWhatsAppOrWaze.alt}
                    title={firstWhatsAppOrWaze.title}
                />
            </a>

            {isMobile ?
                (<Link to="contactUsLine" smooth={true} duration={700} offset={-130} className={classes.socialGreyIconLinkStyle}>
                    <img
                        className={classes.socialIconStyle}
                        src={secondYoutubeOrMessageIcon.src}
                        alt={secondYoutubeOrMessageIcon.alt}
                        title={secondYoutubeOrMessageIcon.title}
                    />
                </Link>)
                :
                (<a
                    className={classes.socialGreyIconLinkStyle}
                    href="https://www.youtube.com/channel/UC7xuqn0FV-nvPY4DkvT8z2g"
                    target="_blank"
                    rel="noreferrer noopener">
                    <img
                        className={classes.socialIconStyle}
                        src={secondYoutubeOrMessageIcon.src}
                        alt={secondYoutubeOrMessageIcon.alt}
                        title={secondYoutubeOrMessageIcon.title}
                    />
                </a>)
            }
            <a
                className={classes.socialGreyIconLinkStyle}
                target="_blank"
                rel="noreferrer noopener"
                href={isMobile ? "https://www.youtube.com/channel/UC7xuqn0FV-nvPY4DkvT8z2g" : "https://www.facebook.com/PowerToolsRental"}>
                <img
                    className={classes.socialIconStyle}
                    src={thirdFacebookOrYoutubeIcon.src}
                    alt={thirdFacebookOrYoutubeIcon.alt}
                    title={thirdFacebookOrYoutubeIcon.title}
                />
            </a>
            <a
                target="_blank"
                rel="noreferrer noopener"
                href={isMobile ? "https://www.facebook.com/PowerToolsRental" : "http://m.me/PowerToolsRental"}>
                <img
                    className={classes.socialIconStyle}
                    src={thourthMessangerOrFacebookIcon.src}
                    alt={thourthMessangerOrFacebookIcon.alt}
                    title={thourthMessangerOrFacebookIcon.title}
                />
            </a>
        </div>
    );
}

export default FooterSocialIcons;