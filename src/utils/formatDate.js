// setting date
// eslint-disable-next-line
export default (date) => {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) {
    // converts 7 to 07
    month = `0${month}`;
  }
  if (day.length < 2) {
    // converts 7 to 07
    day = `0${day}`;
  }

  return [year, month, day].join("-"); // joins date
};
