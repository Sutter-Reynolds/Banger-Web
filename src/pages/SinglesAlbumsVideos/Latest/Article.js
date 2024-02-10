import useDataValues from "../../../hooks/useDataValues";
import { Link } from "react-router-dom";

const Article = ({ data, type }) => {
  const { artist, title, imgLink, articleLink } = useDataValues(data);
  return (
      <article className="Latests-Singles-Albums-Videos-Content">
        <Link to={`/${type}/Articles/${articleLink}`}>
          <figure className="Latests-Image-Container">
            <img className="img-fitter2" src={imgLink} alt="" />
            <div className="Shader2"></div>
          </figure>
        </Link>
        <div className="Latests-Singles-Albums-Videos-Content-Description-Container">
          <div className="Latests-Singles-Albums-Videos-Content-Description">
            <Link to={`/${type}/Articles/${articleLink}`}className="No-Decoration">
              <h3 className="Latests-Singles-Albums-Videos-Name">{artist}</h3>
              <h4 className="Latests-Singles-Albums-Videos-Artist">{title}</h4>
            </Link>
          </div>
        </div>
      </article>
  )
}

export default Article