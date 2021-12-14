import React from 'react';
import { isMobileOrTablet } from 'components/Utils/Utils';
import FixedContactButtonsDesktop from './FixedContactButtonsDesktop';
import FixedContactButtonsMobile from './FixedContactButtonsMobile';


function FixedContactButtons({isScrolledToBottom}) {
    const isMobile = isMobileOrTablet();

    return (
        <>
            {isMobile
                ? <FixedContactButtonsMobile isScrolledToBottom={isScrolledToBottom} />
                : <FixedContactButtonsDesktop />}
        </>
    );
}

export default FixedContactButtons;