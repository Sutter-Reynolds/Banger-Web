import Article from "./Article";
import { useState, useEffect } from "react";

const Articles = ({ dataArray, type, setLoad, load, viewArticles }) => {
  const [articleNext, setArticleNext] = useState([]);

  useEffect(() => {
    const setValues = async () => {
      if (dataArray && dataArray.length !== 0) {
        setArticleNext(dataArray.next);
        if(load === 0){
          dataArray.current.forEach((element, index) => {
            viewArticles.push(<Article key={index + (load*16)} data={element} type={type}/>);
          });
        }
      }
    };
    setValues();
  }, [dataArray]);

  const addToLoad = () => {
    articleNext.forEach((element, index) => {
      viewArticles.push(<Article key={index + ((load + 1)*16)} data={element} type={type}/>);
    });
    setLoad(prevLoad => prevLoad + 1);
  }

  return (
    <div className="Main-Singles-ALbums-Video-Background">
      <section className="Main-Singles-Albums-Videos">
        <div className="Main-Singles-Albums-Videos-Container">
        {viewArticles}
        </div>
      </section>
      {articleNext.length !== 0 &&
        <div className="Main-Singles-ALbums-Video-PageChanges">
          <button onClick={() => addToLoad()} className="Main-Singles-ALbums-Video-Load-More">Load More</button>
        </div>
      }
    </div>
  );
};

export default Articles;