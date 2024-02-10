import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ScrollTopRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unlisten = navigate((location) => {
      if (location.action === "PUSH") {
        window.scrollTo(0, 0);
      }
    });

    return () => {
      unlisten();
    };
  }, [navigate]);

  return null;
};

export default ScrollTopRoute;