import useDataValues from "../../../hooks/useDataValues"
import { Link } from 'react-router-dom';
import "../../../styles/utils/shade.css"

const ContentArticle = ({data, type}) => {
    const { timeStamp, customTitle, review, imgLink, articleLink} = useDataValues(data);
  return (
    <article className="Latest-Styling">
        <figure className="Latest-Img-Container">
            <img className="img-fitter2" src={imgLink} alt=""/>
            <div className="Shader3"/>
        </figure>
        <div className="Latest-Info-Button-Sizer">
            <div className="Latest-Info-Button-Container">
                <div className="Latest-Info">
                    <h3>{customTitle}</h3>
                    <time className="Latest-Date">{timeStamp}</time>
                    <p className="Latest-Summary">{review}</p>
                </div>
                <Link to={`${type}/Articles/${articleLink}`} className="Latest-Button-Container">
                    <button className="Latest-Button">Review</button>
                </Link>
            </div>
        </div>
    </article>
  )
}

export default ContentArticle