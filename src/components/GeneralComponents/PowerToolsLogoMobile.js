import { makeStyles } from '@material-ui/core';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { GetPowerToolsLogoIconColor } from '../../assets/Database/DatabaseUtils';
import { textColorDarkBlueOuterSpace, TextFontSize16, TextFontWeight700Bold } from '../Styles/MyStyles';

const useStyles = makeStyles((theme) => ({
    logoContainerDivStyle: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    PowerToolsLogoIconStyle: {
        width: '24px',
        height: '29px',
        marginRight: '4px'
    },
    PowerToolsLogoTextStyle: {
        fontFamily: 'poppins',
    },
    TextFontSize16,
    TextFontWeight700Bold,
    textColorDarkBlueOuterSpace,
}));

function PowerToolsLogoMobile({ className }) {
    const classes = useStyles();
    const PowerToolsLogoIconColor = useMemo(() => GetPowerToolsLogoIconColor(), [GetPowerToolsLogoIconColor])

    return (
        <div className={`${className}`}>
            <Link href={"/"} passHref>
                <a>
                    <div className={classes.logoContainerDivStyle}>

                        <div className={classes.PowerToolsLogoIconStyle}>
                            <img
                                layout="fixed"
                                width={24}
                                height={24}
                                src={PowerToolsLogoIconColor.src}
                                alt={PowerToolsLogoIconColor.alt}
                                title={PowerToolsLogoIconColor.title}
                            />
                        </div>

                        <div className={`${classes.PowerToolsLogoTextStyle} ${classes.TextFontSize16} ${classes.TextFontWeight700Bold} ${classes.textColorDarkBlueOuterSpace}`}>
                            POWER TOOLS
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
}

export default PowerToolsLogoMobile;