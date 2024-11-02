import { useEffect, useState } from "react";

const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handlerScroll = window.addEventListener("scroll", () => {
      setScrollY(window.scrollY || 0);
    });

    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, [scrollY]);

  return scrollY;
};

export default useScrollY;
