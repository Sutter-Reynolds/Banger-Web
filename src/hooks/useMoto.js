import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useMoto = () => {
  const [moto, setMoto] = useState("Creating New Waves");
  const location = useLocation();

  useEffect(() => {
    const pathMappings = {
      "/": "Creating New Waves",
      "/Singles": "Singles",
      "/Albums": "Albums",
      "/Videos": "Videos",
      "/Trending": "Trending",
      "/Interviews": "Interviews",
    };

    setMoto(pathMappings[location.pathname] || "Creating New Waves");
  }, [location.pathname]);

  return moto;
};

export default useMoto;
