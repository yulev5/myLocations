import { Box, makeStyles, Typography } from '@material-ui/core';
import { myColors } from 'components/Styles/Colors';
import { myFontSizes } from 'components/Styles/Sizes';
import React, { useState } from 'react';
import { textColorDarkBlueOuterSpace, TextFontSize16, TextFontWeight500, TextFontWeight600SemiBold, TextFontWeight700Bold } from '../Styles/MyStyles';

const useStyles = makeStyles((theme) => ({
    contactUsSingleButtonAndText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer'
    },
    bottomTextStyleFirstLine: {
        marginTop: '16px',
        fontSize: myFontSizes.TextFontSize16,
        color: myColors.DarkBlueOuterSpace,
    },
    TextFontWeight500,
    TextFontWeight600SemiBold,
    TextFontWeight700Bold,
    TextFontSize16,
    textColorDarkBlueOuterSpace,
}));

function IconAndTextContact({ icon, iconHovered, bottomTextFirstLine, bottomTextSecondLine, href, width, height }) {
    const classes = useStyles();
    const [isHovered, setIsHovered] = useState(false);

    width = width + "px";
    height = height + "px";

    let iconToShow = isHovered ? iconHovered : icon;
    let textWeight = isHovered ? classes.TextFontWeight700Bold : classes.TextFontWeight500;

    function handleHoverChanged(hoverStatus) {
        setIsHovered(hoverStatus);
    }

    React.useEffect(() => {
        document.querySelectorAll('p[name="contactBottomText"], p[name="contactBottomText2"]').forEach(el => {
            const { width } = el.getBoundingClientRect();
            el.style.width = `${width + 2}px`;
        });
    }, []);

    return (
        <Box
            className={classes.contactUsSingleButtonAndText}
            component={href ? "a" : "div"}
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            onMouseEnter={() => handleHoverChanged(true)}
            onMouseLeave={() => handleHoverChanged(false)}
        >
            <img
                style={{ width: width, height: height }}
                src={iconToShow.src}
                alt={iconToShow.alt}
                title={iconToShow.title}
            />
            <Typography
                name="contactBottomText"
                noWrap
                className={`${classes.bottomTextStyleFirstLine} ${textWeight}`}>
                {bottomTextFirstLine}
            </Typography>

            {bottomTextSecondLine ?
                (
                    <Typography
                        name="contactBottomText2"
                        noWrap
                        className={`${classes.TextFontSize16} ${classes.textColorDarkBlueOuterSpace} ${textWeight}`}>
                        {bottomTextSecondLine}
                    </Typography>
                )
                :
                null
            }
        </Box>
    );
}

export default IconAndTextContact;