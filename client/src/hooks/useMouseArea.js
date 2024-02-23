import { useState, useEffect } from 'react';

const useMouseArea = (areaRef) => {
  const [isMouseInArea, setIsMouseInArea] = useState(false);

  useEffect(() => {
    const handleMouseInArea = (event) => {
      const { innerWidth, innerHeight } = window;
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const boundaryPercentageX = 8;
      const boundaryPercentageY = 4;
      const boundaryX = (innerWidth * boundaryPercentageX) / 100;
      const boundaryY = (innerHeight * boundaryPercentageY ) / 100;

      const rect = areaRef.current.getBoundingClientRect();

      if (
        mouseX >= rect.left - boundaryX &&
        mouseX <= rect.right + boundaryX &&
        mouseY >= rect.top - boundaryY &&
        mouseY <= rect.bottom + boundaryY
      ) {
        setIsMouseInArea(true);
      } else {
        setIsMouseInArea(false);
      }
    };

    const handleMouseMove = (event) => {
      handleMouseInArea(event);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); 

  return { isMouseInArea, areaRef }; 
};


export default useMouseArea;