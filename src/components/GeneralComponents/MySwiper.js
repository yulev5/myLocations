import React from 'react';
import Swiper from 'react-id-swiper';

function MySwiper({className, params, children}) {

    return (
        <Swiper className={className} {...params}>
            {children}
        </Swiper>
    );
}

export default MySwiper;