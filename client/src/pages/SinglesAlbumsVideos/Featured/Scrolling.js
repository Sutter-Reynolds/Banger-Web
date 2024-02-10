import { useState, useEffect } from "react";

const Scrolling = ({ setCurrentArticle }) => {
  const [activeButton, setActiveButton] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextButton = (activeButton + 1) % 7;
      setCurrentArticle(nextButton);
      setActiveButton(nextButton);
    }, 15 * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeButton, setCurrentArticle]);

  const handleButtonClick = (num) => {
    setCurrentArticle(num);
    setActiveButton(num);
  };

  return (
    <div className="Featured-Singles-Albums-Videos-Scroll">
      <button id={activeButton === 0 ? 'isActiveButton' : ''} onClick={() => handleButtonClick(0)}></button>
      <button id={activeButton === 1 ? 'isActiveButton' : ''} onClick={() => handleButtonClick(1)}></button>
      <button id={activeButton === 2 ? 'isActiveButton' : ''} onClick={() => handleButtonClick(2)}></button>
      <button id={activeButton === 3 ? 'isActiveButton' : ''} onClick={() => handleButtonClick(3)}></button>
      <button id={activeButton === 4 ? 'isActiveButton' : ''} onClick={() => handleButtonClick(4)}></button>
      <button id={activeButton === 5 ? 'isActiveButton' : ''} onClick={() => handleButtonClick(5)}></button>
      <button id={activeButton === 6 ? 'isActiveButton' : ''} onClick={() => handleButtonClick(6)}></button>
    </div>
  );
}

export default Scrolling;