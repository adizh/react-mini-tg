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

  function formatUnixTime(unixTime: number): string {
    const milliseconds = unixTime * 1000; // Convert Unix time to milliseconds
    const date = new Date(milliseconds);

    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    let formattedTime = "";

    if (hours > 0) {
      formattedTime += hours + " hour" + (hours === 1 ? "" : "s") + " ";
    }
    if (minutes > 0) {
      formattedTime += minutes + " minute" + (minutes === 1 ? "" : "s") + " ";
    }
    if (seconds > 0) {
      formattedTime += seconds + " second" + (seconds === 1 ? "" : "s");
    }

    return formattedTime.trim();
  }

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
        const formattedTime = formatUnixTime(newTimeLeft);
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
