import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStaus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
        setOnlineStaus(true);
    });
    window.addEventListener("offline", () => {
        setOnlineStaus(false);
    });

  }, []);

  // this would be a boolean value
  return onlineStatus;
};

export default useOnlineStatus;
