import { useEffect, useState } from "react";

const useTitleByScroll = (ref, title = "") => {
  const [titleByScroll, setTitleByScroll] = useState(["", 0]);

  const handlerTitle = () => {
    if (ref.current) {
      setTitleByScroll([title, ref.current.getBoundingClientRect()]);
    }
  };

  useEffect(() => {
    const isCurrent = ref.current;
    if (isCurrent) {
      isCurrent.addEventListener("scroll", handlerTitle);
    }

    return () => {
      if (isCurrent) {
        isCurrent.removeEventListener("scroll", handlerTitle);
      }
    };
  }, [ref, title]);

  return titleByScroll;
};

export default useTitleByScroll;
