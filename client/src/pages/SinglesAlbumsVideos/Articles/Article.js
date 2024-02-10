import useDataValues from "../../../hooks/useDataValues";
import { Link } from 'react-router-dom'; 
import "../../../styles/utils/shade.css"

const Article = ({ data, type }) => {
  const { artist, title, review, imgLink, color1, color3, articleLink } = useDataValues(data);
  const background = `linear-gradient(-45deg, ${color1}25, transparent, ${color3}25)`;

  return (
      <article className="Main-Singles-Albums-Videos-Aritcle">
          <div className="Main-Img-Info">
              <figure className="Main-Image-Container">
              <div className="Shader3"/>
                  <img className="img-fitter2" src={imgLink} alt="" />
                  <Link to={`/${type}/Articles/${articleLink}`} className="Main-Article-Info No-Decoration">
                    <figcaption>
                      <h3 className="Main-Article-Artist">{artist}</h3>
                      <h3 className="Main-Article-Title">{title}</h3>
                    </figcaption>
                  </Link>
              </figure>
          </div>
          <Link to={`/${type}/Articles/${articleLink}`} className="Main-Article-Summary No-Decoration" style={{ background: background }}>
            <p>{review}</p>
          </Link>
      </article>
  );
};

export default Article;