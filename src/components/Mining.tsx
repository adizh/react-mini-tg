import { useState, useEffect } from "react";
import PercentageLine from "./PercentageLine";

function Mining() {
  const getTwelveHoursLaterFromStorage = () => {
    const storedValue = localStorage.getItem("unixTimestampTwelveHoursLater");
    return storedValue ? parseInt(storedValue, 10) : 0;
  };

  const [isMiningLoading, setIsMiningLoading] = useState(true);
  const localSavedMining =
    localStorage.getItem("isMiningStarted") &&
    localStorage.getItem("isMiningStarted") === "true"
      ? true
      : false;
  const localSavedClaim =
    localStorage.getItem("claim") && localStorage.getItem("claim") === "true"
      ? true
      : false;
  const [isMiningStarted, setStartMining] = useState(localSavedMining);
  const [timeLeft, setTimeLeft] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [currentTime, setCurrentTime] = useState(
    localStorage.getItem("currentUnixTime")
      ? localStorage.getItem("currentUnixTime")
      : 0,
  );
  const [twelveHoursLater, setTwelveHoursLater] = useState(
    getTwelveHoursLaterFromStorage,
  );
  const [claim, setClaim] = useState(localSavedClaim);

  const convertUnixTime = (time: number) => {
    const dateFromUnixTimestamp = new Date(time * 1000);
    const hours = dateFromUnixTimestamp.getHours();
    const minutes = dateFromUnixTimestamp.getMinutes();
    const seconds = dateFromUnixTimestamp.getSeconds();
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    return formattedTime;
  };

  const startMining = () => {
    setStartMining(true);
    const currentUnixTime = Math.floor(new Date().getTime() / 1000);
    setIsMiningLoading(false);
    localStorage.setItem("isMiningStarted", "true");
    const twelveHoursLaterUnixTime = currentUnixTime + 12 * 60 * 60;
    const twoMinutesLaterUnixTime = currentUnixTime + 2 * 60;
    setTwelveHoursLater(twelveHoursLaterUnixTime);
    setCurrentTime(currentUnixTime);
    localStorage.setItem("currentUnixTime", currentUnixTime.toString());
    localStorage.setItem(
      "unixTimestampTwelveHoursLater",
      twelveHoursLaterUnixTime.toString(),
    );
  };

  useEffect(() => {
    if (!isMiningStarted) {
      setIsMiningLoading(false);
      return;
    }

    const totalDuration = 12 * 60 * 60;
    const totalDuration2 = 2 * 60;
    const intervalId = setInterval(() => {
      const currentUnixTime = Math.floor(new Date().getTime() / 1000);
      const newTimeLeft = twelveHoursLater - currentUnixTime;
      if (newTimeLeft <= 0) {
        clearInterval(intervalId);
        setTimeLeft("00:00:00");
        setPercentage(100);
        setStartMining(false);
        setClaim(true);
        setIsMiningLoading(true);
        localStorage.setItem("isMiningStarted", "false");
        localStorage.setItem("claim", "true");
        setPercentage(0);
        localStorage.removeItem("currentUnixTime");
        localStorage.removeItem("twoMinutesLaterUnixTime");
        localStorage.removeItem("isMiningStarted");
      } else {
        const hours = Math.floor(newTimeLeft / 3600);
        const minutes = Math.floor((newTimeLeft % 3600) / 60);
        const seconds = newTimeLeft % 60;
        const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        setTimeLeft(formattedTime);
        const elapsed = totalDuration - newTimeLeft;
        const percentageComplete = +((elapsed / totalDuration) * 100).toFixed(
          2,
        );
        setPercentage(+percentageComplete);
        setIsMiningLoading(false);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isMiningStarted, twelveHoursLater]);

  return (
    <>
      {!isMiningLoading ? (
        <div className="mining">
          {isMiningStarted ? (
            <PercentageLine percentage={percentage} />
          ) : claim ? (
            <button className="blue-btn" onClick={startMining}>
              Claim
            </button>
          ) : (
            <button className="blue-btn" onClick={startMining}>
              Start mining
            </button>
          )}
          {isMiningStarted && <p className="grey-text">{timeLeft} left</p>}
        </div>
      ) : (
        <div className="grey-text centered">Loading...</div>
      )}
    </>
  );
}

export default Mining;
