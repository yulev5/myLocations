import React from 'react';
import YoutubeSlider from 'components/GeneralComponents/YoutubeSliderComponents/YoutubeSlider';

function ReciprocatingSawsTopText(props) {
    return (
        <>
            <YoutubeSlider
                headerTitle="סרטוני מקדחות מברגות ופטישונים נטענים מהשכרה"
                videosData={[
                    {
                        videoHeader: "מסור חרב להשכרה - תחליף למסור שרשרת?",
                        videoText: "הדגמה מצויינת של ניסור גזע עץ עם מסור חרב נטען להשכרה - דוגמא שמראה שמסור חרב יכול להיות תחליף מעולה למסור שרשרת",
                        videoID: "nWMAoH2lreM"
                    },
                ]}
            />

        </>
    );
}

export default ReciprocatingSawsTopText;



