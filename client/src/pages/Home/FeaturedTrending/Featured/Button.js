import { useState } from "react";

const Button = ({ setCurrentArticles, setCurrentArticle }) => {
  const [isActive, setIsAcitve] = useState(0);
  const handleClick = (num) => {
    setCurrentArticles(num);
    setCurrentArticle(0);
    setIsAcitve(num);
  };

  return (
    <div className="Featured-Sub-Sections">
      <button className="Featured-Sub-Sections-Button" id={isActive === 0 ? "isActiveButton" : ""} onClick={() => handleClick(0)}></button>
      <button className="Featured-Sub-Sections-Button"  id={isActive === 1 ? "isActiveButton" : ""} onClick={() => handleClick(1)}></button>
      <button className="Featured-Sub-Sections-Button"  id={isActive === 2 ? "isActiveButton" : ""} onClick={() => handleClick(2)}></button>
    </div>
  );
};

export default Button;