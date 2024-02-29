import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useMoto = () => {
  const [moto, setMoto] = useState("Creating New Waves");
  const location = useLocation();
  const firstPart = location.pathname.split('/')[1];

  useEffect(() => {
    const pathMappings = {
      "/": "Creating New Waves",
      "Singles": "Singles",
      "Albums": "Albums",
      "Videos": "Videos",
      "Trending": "Trending",
      "Interviews": "Interviews",
    };

    setMoto(pathMappings[firstPart] || "Creating New Waves");
  }, [location.pathname]);

  return moto;
};

export default useMoto;
