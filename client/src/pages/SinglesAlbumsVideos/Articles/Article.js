import useDataValues from "../../../hooks/useDataValues";
import { useRef } from "react";
import useMouseArea from "../../../hooks/useMouseArea";
import { Link } from 'react-router-dom';
import "../../../styles/utils/shade.css"

const Article = ({ data, type }) => {

  const areaRef = useRef(null);
  const { isMouseInArea } = useMouseArea(areaRef);

  const { artist, title, review, imgLink, color1, color3, articleLink } = useDataValues(data);
  const background = `linear-gradient(-45deg, ${color1}70, transparent, ${color3}70)`;

  return (
    <article ref={areaRef} className="Main-Singles-Albums-Videos-Aritcle">
      <div className="Main-Img-Info">
        <figure className="Main-Image-Container" id={isMouseInArea ? "BrightenBorder" : ""}>
          <div className="Shader5"/>
          <img className="img-fitter2" src={imgLink} alt=""/>
          <Link  style={isMouseInArea  ? {backdropFilter: "blur(0px) invert(10%)"} : {}} to={`/${type}/Articles/${articleLink}`}  className="Main-Article-Info No-Decoration">
            <figcaption>
              <h3 id={isMouseInArea  ? "BrightenText2" : ""} className="Main-Article-Artist">{artist}</h3>
              <h3 id={isMouseInArea ? "BrightenText2" : ""} className="Main-Article-Title">{title}</h3>
            </figcaption>
          </Link>
        </figure>
      </div>
      <Link id={isMouseInArea ? "BrightenBorder" : ""} to={`/${type}/Articles/${articleLink}`}  className="Main-Article-Summary No-Decoration" style={{ background: background }}>
        <p id={isMouseInArea ? "BrightenText2" : ""}>{review}</p>
      </Link>
    </article>
  );
};

export default Article;