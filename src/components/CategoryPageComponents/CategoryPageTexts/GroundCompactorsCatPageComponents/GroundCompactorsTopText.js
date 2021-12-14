import React from 'react';
import YoutubeSlider from 'components/GeneralComponents/YoutubeSliderComponents/YoutubeSlider';
import GroundCompactorsCatTexts from './GroundCompactorsCatTexts';

function GroundCompactorsTopText(props) {
    return (
        <>
            <YoutubeSlider
                headerTitle="סרטוני מהדק אדמה מהשכרה בזמן עבודה"
                videosData={[
                    {
                        videoHeader: "הידוק אבנים משתלבות בחניה",
                        videoText: "עבודה עם מהדק אדמה להידוק אבנים משתלבות על חול בחניה בתל אביב",
                        videoID: "68bB-U9W0jA"
                    },
                    {
                        videoHeader: "הידוק אדמה כהכנה לדשא סינטטי",
                        videoText: "השכרת מהדק אדמה לצורך הידוק חול לפני הנחת דשא סינטטי או לפני הנחת אריחי רצפת גומי לחדר כושר חיצוני",
                        videoID: "03FE54zerhM"
                    },
                    {
                        videoHeader: "מהדק אדמה על אבנים משתלבות גדולות",
                        videoText: "בניית מדרכה בגבעתיים והידוק אבנים משתלבות גדולות עם מהדק אדמה בנזין (ג'בקה) מהשכרה",
                        videoID: "DtDxJzw96Tg"
                    },
                ]}
            />

            <GroundCompactorsCatTexts/>

        </>
    );
}

export default GroundCompactorsTopText;



