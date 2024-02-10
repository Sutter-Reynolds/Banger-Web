import useDataValues from "../../../../hooks/useDataValues";
import "../../../../styles/utils/shade.css";

const Main = ({ dataArray, currentArticle, currentArticles }) => {
  const subArticles = 5;
  const { customTitle, review, imgLink } = useDataValues(dataArray[currentArticle + subArticles * currentArticles]);


  return (
    <section className="Featured-Main">
      <h2>Featured</h2>
      <img className="img-fitter" src={imgLink} alt="" />
      <div className="Shader3" />
      <div className="Featured-Main-background-Cover" />
      <div className="Featured-Main-UpperInfo">
        <h3>{customTitle}</h3>
      </div>
      <div className="Featured-Main-LowerInfo">
        <p>{review}</p>
      </div>
    </section>
  );
}

export default Main;