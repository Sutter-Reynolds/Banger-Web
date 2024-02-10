import Main from "./Main";
import Sub from "./Sub";
import Button from "./Button";
import { useState } from "react";

const Featured = ({dataArray}) => {
  const [currentArticles, setCurrentArticles] = useState(0);
  const [currentArticle, setCurrentArticle] = useState(0);

  return (
    <div className="Featured-Container">
      <Main dataArray={dataArray} currentArticles={currentArticles} currentArticle={currentArticle}/>
      <Sub dataArray={dataArray} currentArticles={currentArticles} setCurrentArticle={setCurrentArticle} currentArticle={currentArticle}/>
      <Button setCurrentArticles={setCurrentArticles} setCurrentArticle={setCurrentArticle}/>
    </div>
  )
}

export default Featured