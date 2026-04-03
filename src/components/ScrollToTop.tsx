import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force immediate scroll to top on every route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    // Also reset if the main container is being used for snap-scrolling
    const scrollContainer = document.getElementById("main-scroll-container");
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
