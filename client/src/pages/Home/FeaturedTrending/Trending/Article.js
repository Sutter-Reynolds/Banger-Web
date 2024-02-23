import useWindowSize from '../../../../hooks/useWindowSize';
import useDataValues from "../../../../hooks/useDataValues";
import { Link } from 'react-router-dom';
import "../../../../styles/utils/shade.css"

const TrendingArticle = ({ data, num }) => {
  const { artist, title, imgLink, articleLink, table } = useDataValues(data);
  const windowWidth = useWindowSize();

  return (
    <>
      {windowWidth <= 1024 ? (
        <article className="Trending-Article">
            <figure className="Article-Link-Container">
              <Link to={`${table}/Articles/${articleLink}`} className="Trending-Article-Lining No-Decoration">
                <figcaption className="Trending-Info-Container">
                  <h3 className="Trending-Name-Artist">{artist}</h3>
                  <h3 className="Trending-Name-Title">{title}</h3>
                </figcaption>
                <div className="Image-Container2">
                  <img className="img-fitter2" src={imgLink} alt="" />
                  <div className="Shader3" />
                </div>
              </Link>
              <p className="Trending-Number">{num}</p>
            </figure>
        </article>
      ) : (
        <article className="Trending-Article">
          <figure className="Article-Link-Container">
            <Link to={`${table}/Articles/${articleLink}`} className="Trending-Article-Lining No-Decoration">
              <div className="Image-Container2">
                <img className="img-fitter2" src={imgLink} alt="" />
                <div className="Shader3" />
              </div>
              <figcaption className="Trending-Name-Title-Container">
                <h3 className="Trending-Name-Artist">{artist}</h3>
                <h3 className="Trending-Name-Title">{title}</h3>
              </figcaption>
            </Link>
          </figure>
          <p className="Trending-Number">{num}</p>
        </article>
      )}
    </>
  );
};

export default TrendingArticle;