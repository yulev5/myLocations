import NewArticleViewerCard from "../../components/ArticleComponents/NewArticleViewerCard";
import { GetArticleMainImage } from "../Database/DatabaseUtils";

export function getListOfArticles() {
    let listOfArticles = [
        {
            "ArticleID": "rent-or-buy-a-power-tool",
            "ArticleTitle": "6 יתרונות בהשכרה של כלי עבודה",
            "articleFirstLine": "מתי כדאי לשכור ומתי עדיף לקנות את כלי העבודה, מספר נקודות שיעזרו לך להחליט אם לקנות או להשכיר את כלי העבודה שאתה צריך..."
        },
        {
            "ArticleID": "tool-rental-find-the-nearest-location",
            "ArticleTitle": "מצא את הסניף הקרוב ביותר להשכרת כלים",
            "articleFirstLine": "רשימת נקודות מהן ניתן לשכור כלי עבודה וציוד לבנייה..."
        },
        {
            "ArticleID": "the-differences-between-drills-demolition-hammer-rotary-hammer",
            "ArticleTitle": "מקדחה - פטישון - פטיש חציבה - מה ההבדלים ואיזה כלי אתה צריך?",
            "articleFirstLine": "אחת ולתמיד - מה ההבדלים ואיזה כלי עבודה אתה צריך?..."
        }
    ]

    return listOfArticles;
}

export function getArticleCardsFromArticleList() {
    let listOfArticles = getListOfArticles();
    let listOfArticleCardsComponents = [];
    listOfArticles.forEach((article, index) => {
        listOfArticleCardsComponents.push(
            <NewArticleViewerCard
                key={index}
                ArticleID={article.ArticleID}
                ArticleTitle={article.ArticleTitle}
                ArticleImageObj={GetArticleMainImage(article.ArticleID)}
                articleFirstLine={article.articleFirstLine}
            />
        )
    });

    return listOfArticleCardsComponents;
}

