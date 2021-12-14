import React from 'react';
import YoutubeSlider from 'components/GeneralComponents/YoutubeSliderComponents/YoutubeSlider';

function DrillsDriversTopText(props) {
    return (
        <>
            <YoutubeSlider
                headerTitle="סרטוני מקדחות מברגות ופטישונים נטענים מהשכרה"
                videosData={[
                    {
                        videoHeader: "פטישון נטען להשכרה",
                        videoText: "הדגמת עבודה עם פטישון נטען להשכרה בקידוח ברצפת בטון בחניון בתל אביב לצורך התקנת מנעול לאופנוע",
                        videoID: "XT6f1F9XgCY"
                    },
                    {
                        videoHeader: "סיתות עם פטיש חציבה פטישון קטן",
                        videoText: "עבודת סיתות תעלת חשמל עם פטישון - פטיש חציבה קטן מהשכרה",
                        videoID: "d2Sc6N2Xyn0"
                    },
                    {
                        videoHeader: "הברגת בורג ארוך עם מקדחת אימפקט",
                        videoText: "הדגמת עבודה לא נכונה עם מברגת אימפקט מהשכרה - ניתן לראות איך לחיצה לא מספקת גורם לביט להחליק על הבורג",
                        videoID: "bm0X1q7pzlI"
                    },
                ]}
            />

        </>
    );
}

export default DrillsDriversTopText;



