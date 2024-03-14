import useDataValues from "../../../../hooks/useDataValues";
import "../../../../styles/utils/shade.css";

const Main = ({ dataArray, currentArticle, currentArticles }) => {
  const subArticles = 5;
  const { artist, title, customTitle, review, imgLink, color1 } = useDataValues(dataArray[currentArticle + subArticles * currentArticles]);

  return (
    <section className="Featured-Main" style={{borderColor: `${color1}25`, outline: `1px solid ${color1}25`}}>
      <h2>Featured</h2>
      <img className="img-fitter" src={imgLink} alt="" />
      <div className="Shader3" />
      <div className="Featured-Main-background-Cover" style={{backgroundColor: `${color1}99`}}>
        <div className="Featured-Main-Info-Container">
          <h3>{customTitle}</h3>
          <h4>{`${artist} - ${title}`}</h4>
          <p>{review}</p>
        </div>
      </div>
    </section>
  );
}

export default Main;