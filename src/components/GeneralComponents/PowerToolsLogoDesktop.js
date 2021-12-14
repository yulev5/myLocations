import { makeStyles } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import { GetPowerToolsLogoIconColor } from '../../assets/Database/DatabaseUtils';
import { textColorDarkBlueOuterSpace, TextFontSize24, TextFontWeight700Bold } from '../Styles/MyStyles';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    logoContainerDivStyle: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    PowerToolsLogoIconStyle: {
        width: '40px',
        height: '45px',
        marginRight: '8px'
    },
    PowerToolsLogoTextStyle: {
        fontFamily: 'poppins',
    },
    TextFontSize24,
    TextFontWeight700Bold,
    textColorDarkBlueOuterSpace,
}));

function PowerToolsLogoDesktop(props) {
    const classes = useStyles();
    const PowerToolsLogoIconColor = GetPowerToolsLogoIconColor();

    return (
        <div className={props.className}>
            <Link href={"/"} passHref>
                <a>
                    <div className={classes.logoContainerDivStyle}>
                        <div className={classes.PowerToolsLogoIconStyle}>
                            <img
                                layout="fixed"
                                width={40}
                                height={40}
                                src={PowerToolsLogoIconColor.src}
                                alt={PowerToolsLogoIconColor.alt}
                                title={PowerToolsLogoIconColor.title}
                            />
                        </div>

                        <div className={`${classes.PowerToolsLogoTextStyle} ${classes.TextFontSize24} ${classes.TextFontWeight700Bold} ${classes.textColorDarkBlueOuterSpace}`}>
                            POWER TOOLS
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
}

export default PowerToolsLogoDesktop;