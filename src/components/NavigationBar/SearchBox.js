import { ButtonBase, makeStyles } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import { myColors } from '../Styles/Colors';
import { backgourndColorDarkBlueOuterSpace, backgourndColorRegularWhite, myFontFamily, TextFontSize16 } from "../Styles/MyStyles";
import SearchIcon from '@material-ui/icons/Search';
import AutoSuggestions from './AutoSuggestions';
var he = require('convert-layout/he');

const useStyles = makeStyles((theme) => ({
    searchBoxContainerAndAutocompleteContainer: {
        position: 'relative',
        zIndex: '10',
        // display: 'flex',
        // felxDirection: 'column',
    },
    darkOverlayStyleHidden: {
        display: 'none',
    },
    darkOverlayStyle: {
        display: 'block',
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgb(0,0,0,0.5)',
        zIndex: '20'
    },
    searchBoxContainerStyle: {
        position: 'relative',
        zIndex: '30',
        display: 'flex',
        justifyContent: 'space-between',
        width: '260px',
        height: '40px',
    },
    inputBoxStyle: {
        position: 'relative',
        zIndex: '30',
        width: '216px',
        paddingRight: '15px',
        borderRadius: '0px 18px 18px 0px',
        border: `1px solid ${myColors.DarkBlueOuterSpace}`,
        "&:focus": {
            outline: '0px'
        },
    },
    backgourndColorRegularWhite,
    TextFontSize16,
    searchButtonDivStyle: {
        position: 'relative',
        zIndex: '30',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '18px 0px 0px 18px',
        width: '44px',
    },
    backgourndColorDarkBlueOuterSpace,
    searchIconStyle: {
        position: 'relative',
        zIndex: '30',
        width: '25px',
        height: '25px',
        marginLeft: '5px'
    },


    autoCompleteStyleHidden: {
        display: 'none',
    },
    autoCompleteStyle: {
        maxHeight: '70vh',
        overflowY: 'auto',
        position: 'absolute',
        top: '40px',
        zIndex: '20',
        display: 'Block',
        height: 'auto',
        width: '450px',
        backgroundColor: 'white',
        borderRadius: '4px',
        '&::-webkit-scrollbar': {
            width: '9px',
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0, 0, 0, .1)',
            borderRadius: '4px',
        }
    },
}));

function SearchBox(props) {
    const classes = useStyles();
    const [isAutocompleteOpen, setIsAutocompleteOpen] = useState(false);
    const [currentInput, setCurrentInput] = useState("");
    const [inputRef, setInputFocus] = useFocus();

    let darkOverlayStyle = null;
    let autoCompleteStyle = null;

    if (isAutocompleteOpen) {
        darkOverlayStyle = classes.darkOverlayStyle;
        autoCompleteStyle = classes.autoCompleteStyle;
    } else {
        darkOverlayStyle = classes.darkOverlayStyleHidden;
        autoCompleteStyle = classes.autoCompleteStyleHidden;
    }

    const openAutoCompleteAndFocus = () => {
        setInputFocus();
        openAutoComplete();
    };

    const openAutoComplete = () => {
        setIsAutocompleteOpen(true);
    };

    const closeAutoComplete = () => {
        setIsAutocompleteOpen(false);
    };

    const inputOnFocusEvent = (e) => {
        e.target.placeholder = "";
        openAutoComplete();
    }

    const searchInputChanged = (event) => {
        setCurrentInput(he.fromEn(event.target.value));
    }

    return (
        <div className={classes.searchBoxContainerAndAutocompleteContainer}>

            <div onClick={() => closeAutoComplete()} className={darkOverlayStyle}>
            </div>

            <div className={classes.searchBoxContainerStyle} id="searchArea">
                <input
                    className={`${classes.inputBoxStyle} ${classes.TextFontSize16} ${classes.backgourndColorRegularWhite}`}
                    ref={inputRef}
                    type="text"
                    placeholder="איזה כלי אתה רוצה לשכור?"
                    onFocus={(e) => inputOnFocusEvent(e)}
                    onBlur={(e) => {
                        e.target.placeholder = "איזה כלי אתה רוצה לשכור?";
                    }}
                    onChange={(event) => searchInputChanged(event)}
                    style={{
                        fontFamily: myFontFamily.fontFamily
                    }}
                    aria-labelledby="searchArea SearchToolForRentButton"
                />

                <ButtonBase
                    className={`${classes.searchButtonDivStyle} ${classes.backgourndColorDarkBlueOuterSpace}`}
                    onClick={() => openAutoCompleteAndFocus()}
                    aria-label="Search"
                    id="SearchToolForRentButton">
                    <SearchIcon className={`${classes.searchIconStyle}`} fontSize="large" />
                </ButtonBase>
            </div>

            <div className={autoCompleteStyle}>
                <AutoSuggestions closeAutoComplete={closeAutoComplete} input={currentInput} />
            </div>
        </div>
    );
}

const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => { htmlElRef.current && htmlElRef.current.focus() }

    return [htmlElRef, setFocus]
}

export default SearchBox;