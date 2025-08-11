import { useEffect, useState } from "react";

const useMenuHours = () => {
  const [showDailyMenu, setShowDailyMenu] = useState(false);

  useEffect(() => {
    const checkHours = () => {
      const date = new Date().toLocaleString("en-US", {
        timeZone: "America/Bogota",
        hour: "numeric",
        hour12: false,
      });

      const dayHour = parseInt(date);
      setShowDailyMenu(dayHour >= 12 && dayHour < 15);
    };

    checkHours();
    const interval = setInterval(checkHours, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return { showDailyMenu };
};

export default useMenuHours;
