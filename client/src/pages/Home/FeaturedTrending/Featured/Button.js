import useWindowSize from "../../../../hooks/useWindowSize";
import { useState, useEffect } from "react";

const Button = ({ setCurrentArticles, setCurrentArticle }) => {
  const windowWidth = useWindowSize();
  const [isActive, setIsAcitve] = useState(0);
  const handleClick = (num) => {
    setCurrentArticles(num);
    setCurrentArticle(0);
    setIsAcitve(num);
  };

  const handleClick2 = (num) => {
    setCurrentArticles(0);
    setCurrentArticle(num);
    setIsAcitve(num);
  };

  useEffect(() => {
    if (windowWidth === 1024) {
      setIsAcitve(0); 
      setCurrentArticle(0);
    }
  }, [windowWidth]);

  return (
    <div className="Featured-Sub-Sections">
    { windowWidth > 1024 ? (
      <>
        {[0, 1, 2].map(index => (
            <button key={index}className="Featured-Sub-Sections-Button" id={isActive === index ? "isActiveButton" : ""} onClick={() => handleClick(index)}/>
        ))}
      </>
    ):(
      <>
        {[0, 1, 2, 3, 4].map(index => (
            <button key={index}className="Featured-Sub-Sections-Button" id={isActive === index ? "isActiveButton" : ""} onClick={() => handleClick2(index)}/>
        ))}
      </>
    )}
</div>
  );
};

export default Button;