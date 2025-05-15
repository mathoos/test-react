import { useParams} from "react-router-dom";
import { articles } from "../data/ArticlesData"

function Article(){

    const {id} = useParams();
    const article = articles.find((a) => a.id === parseInt(id))

    return(
        <div>
            <h1>{article.title}</h1>
			<p>ID de l’article : {id}</p>
			<p>{article.content}</p>
        </div>
    )
}

export default Article