import React from 'react';
import YoutubeSlider from 'components/GeneralComponents/YoutubeSliderComponents/YoutubeSlider';

function CeramicCuttersTopText(props) {

    return (
        <>
            <YoutubeSlider
                headerTitle="סרטוני הדרכה והדגמה"
                videosData={[
                    {
                        videoHeader: "הדגמת מכונת קרמיקה מהשכרה",
                        videoText: 'מכונת חיתוך קרמיקה מהשכרה בגודל 125 ס"מ בחיתוך של אריח קרמיקה גדול',
                        videoID: "i3zPqflsq0k"
                    },

                    {
                        videoHeader: 'חיתוך עם מכונת קרמיקה 75 ס"מ מהשכרה',
                        videoText: 'הדרכה קצרה ומעולה של חיתוך קרמיקה עם מכונת חיתוך מקצועית מהשכרה בגודל 75 ס"מ',
                        videoID: "HaeEZZ8OU34"
                    },

                    {
                        videoHeader: "סרטון הדרכה - איך לחתוך קרמיקה",
                        videoText: "עבודה נכונה עם מכונת חיתוך הקרמיקה - איך לחרוץ, לחתוך ולשבור את הקרמיקה בצורה נכונה קלה ומהירה עם מכונת החיתוך",
                        videoID: "ZvTacZTiiow"
                    },
                    {
                        videoHeader: 'השכרת מכונת חיתוך קרמיקה 125 ס"מ',
                        videoText: 'מכונת חיתוך קרמיקה מקצועית בגודל 125 ס"מ להשכרה - הדגמת מדידה, סימון וחיתוך אריח גדול',
                        videoID: "p6YVsed6b5U"
                    },
                    {
                        videoHeader: "חיתוך אריחים מיוחדים",
                        videoText: "חיתוך אריחי קרמיקה מיוחדים - מוזיקה, זכוכית ואריחים לא ישרים עם מכונת הקרמיקה",
                        videoID: "l0DpiCVkoiI"
                    },
                    {
                        videoHeader: "הדרכה והדגמת חיתוך קרמיקה",
                        videoText: "הדגמת חותך קרמיקה בחיתוך פנלים ואריחי פורצלן, עם הדרכה איך לעבוד בצורה נכונה עם המכונה",
                        videoID: "aEq8qBWdQoQ"
                    }
                ]}
            />

        </>
    );
}

export default CeramicCuttersTopText;



