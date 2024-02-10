import SubArticle from "./SubArticle";
import useDataValues from "../../../../hooks/useDataValues";

const Sub = ({ dataArray, currentArticles, setCurrentArticle, currentArticle }) => {
  const subArticles = 5;

  const handleClick = (num) => {
    setCurrentArticle(num);
  };

  return (
    <div className="Featured-Sub-Border">
      <section className="Featured-Sub">
        <SubArticle
          data={useDataValues(dataArray[0 + subArticles * currentArticles])}
          handleClick={handleClick} num={0}
          isActive={currentArticle === 0 ? true : false}
        />
        <SubArticle
          data={useDataValues(dataArray[1 + subArticles * currentArticles])}
          handleClick={handleClick} num={1}
          isActive={currentArticle === 1 ? true : false}
        />
        <SubArticle
          data={useDataValues(dataArray[2 + subArticles * currentArticles])}
          handleClick={handleClick} num={2}
          isActive={currentArticle === 2 ? true : false}
        />
        <SubArticle
          data={useDataValues(dataArray[3 + subArticles * currentArticles])}
          handleClick={handleClick} num={3}
          isActive={currentArticle === 3 ? true : false}
        />
        <SubArticle
          data={useDataValues(dataArray[4 + subArticles * currentArticles])}
          handleClick={handleClick} num={4}
          isActive={currentArticle === 4 ? true : false}
        />
      </section>
    </div>
  );
};

export default Sub;