import React from 'react';
import { makeStyles, Typography } from "@material-ui/core";
import { TextFontSize18, textColorDarkBlueOuterSpace } from '../../Styles/MyStyles';
import { myFontSizes, myFontWeights } from 'components/Styles/Sizes';
import { myColors } from 'components/Styles/Colors';

const useStyles = makeStyles((theme) => ({
    liStyle: {
        textAlign: 'right',
        marginRight: '40px',
        fontSize: myFontSizes.TextFontSize18,
        color: myColors.DarkBlueOuterSpace,
        fontWeight: myFontWeights.Weight500,
    },
}));

function BulletsTabContent(props) {
    const classes = useStyles();

    return (
        <div>
            {
                props.content.map((bulletInfo, index) =>
                    (
                        <li
                            className={`${classes.liStyle}`}
                            key={index}
                        >
                            {bulletInfo}
                        </li>
                    ))
            }
        </div>
    );
}

export default BulletsTabContent;