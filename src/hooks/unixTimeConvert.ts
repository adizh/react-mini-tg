const useConvertUnixTime = (time: number) => {
  const dateFromUnixTimestamp = new Date(time * 1000);
  const hours = dateFromUnixTimestamp.getHours();
  const minutes = dateFromUnixTimestamp.getMinutes();
  const seconds = dateFromUnixTimestamp.getSeconds();
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  return formattedTime;
};

export { useConvertUnixTime };
