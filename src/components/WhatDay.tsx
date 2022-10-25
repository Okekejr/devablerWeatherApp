export const whatDay = (dai: number) => {
  // extracting date stamps in UnixTime stamp from API
  const dt = dai;
  // generate todays date
  const now = new Date();
  // converting todays date to unixTimestamp
  const nowdt = Math.round(+now.getTime() / 1000);
  // converting UnixTime stamp to milliseconds and then actual date format
  const dateObject = new Date(+dt * 1000);
  const day = dateObject.toLocaleString("en-US", { weekday: "short" });
  const date = dateObject.toLocaleString("en-US", { day: "numeric" });
  // calculate days ahead
  const calcDay = Math.round(Math.abs(+nowdt - +dt) / (60 * 60 * 24));

  if (calcDay === 1) {
    return `${day} ${date}`;
  }

  if (calcDay === 2) {
    return `${day} ${date}`;
  }

  if (calcDay === 3) {
    return `${day} ${date}`;
  }

  if (calcDay === 4) {
    return `${day} ${date}`;
  }
};
