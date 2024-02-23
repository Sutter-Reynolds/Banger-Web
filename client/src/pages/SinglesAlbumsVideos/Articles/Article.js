import useDataValues from "../../../hooks/useDataValues";
import { useState } from "react";
import { Link } from 'react-router-dom';
import "../../../styles/utils/shade.css"

const Article = ({ key, data, type }) => {

  const [hover, sethover] = useState(0);

  const onhover = (num) => {
    sethover(num);
  }

  const { artist, title, review, imgLink, color1, color3, articleLink } = useDataValues(data);
  const background = `linear-gradient(-45deg, ${color1}70, transparent, ${color3}70)`;

  return (
    <article className="Main-Singles-Albums-Videos-Aritcle">
      <div className="Main-Img-Info">
        <figure className="Main-Image-Container" id={hover ? "BrightenBorder" : ""}>
          <div className="Shader5"/>
          <img className="img-fitter2" src={imgLink} alt=""/>
          <Link style={hover ? {backdropFilter: "blur(0px) invert(10%)"} : {}} to={`/${type}/Articles/${articleLink}`} onMouseOver={() => onhover(1)} onMouseOut={() => onhover(0)} className="Main-Article-Info No-Decoration">
            <figcaption>
              <h3 id={hover ? "BrightenText2" : ""} className="Main-Article-Artist">{artist}</h3>
              <h3 id={hover ? "BrightenText2" : ""} className="Main-Article-Title">{title}</h3>
            </figcaption>
          </Link>
        </figure>
      </div>
      <Link id={hover ? "BrightenBorder" : ""} to={`/${type}/Articles/${articleLink}`} onMouseOver={() => onhover(1)} onMouseOut={() => onhover(0)} className="Main-Article-Summary No-Decoration" style={{ background: background }}>
        <p id={hover ? "BrightenText2" : ""}>{review}</p>
      </Link>
    </article>
  );
};

export default Article;