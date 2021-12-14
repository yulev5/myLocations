import React from 'react';
import YoutubeSlider from 'components/GeneralComponents/YoutubeSliderComponents/YoutubeSlider';

function VacuumCleanerTopText(props) {
    return (
        <>
            <YoutubeSlider
                headerTitle="סרטוני שואב אבק תעשייתי חובט להשכרה"
                videosData={[
                    {
                        videoHeader: "הדגמת שואב אבק תעשייתי להשכרה",
                        videoText: "שואב אבק תעשייתי עם מנגנון חביטה - הפעלת מנגנון החביטה באמצעות כפתור, מתאים לשאיבת לכלוך אחרי שיפוץ",
                        videoID: "9pHkovxNYeY"
                    },
                ]}
            />

        </>
    );
}

export default VacuumCleanerTopText;



