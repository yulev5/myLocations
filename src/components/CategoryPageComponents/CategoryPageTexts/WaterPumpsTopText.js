import React from 'react';
import YoutubeSlider from 'components/GeneralComponents/YoutubeSliderComponents/YoutubeSlider';

function WaterPumpsTopText(props) {
    return (
        <>
            <YoutubeSlider
                headerTitle="סרטוני משאבת מים טבולה להשכרה"
                videosData={[
                    {
                        videoHeader: "הדגמת משאבת מים טבולה להשכרה",
                        videoText: "משאבת מים טבולה מתאימה גם למים דלוחים - מלוכלכים - משאבה טבולה חזקה במיוחד להשכרה במצבי חירום",
                        videoID: "ggudfltGCBI"
                    },
                ]}
            />

        </>
    );
}

export default WaterPumpsTopText;



