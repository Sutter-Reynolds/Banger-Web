import Info from './Info';
import Scrolling from './Scrolling';

const Article = ({ setCurrentArticle, data }) => {
  return (
    <div className="Featured-Singles-Albums-Videos-Info">
      <Info data={data}/>
      <Scrolling setCurrentArticle={setCurrentArticle} />
    </div>
  );
};

export default Article;