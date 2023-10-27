import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "offline",
      () => {
        setOnlineStatus(false);
      },
      [onlineStatus]
    );

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, [onlineStatus]);
  console.log(onlineStatus);
  return onlineStatus;
};

export default useOnlineStatus;
