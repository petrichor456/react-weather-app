export default function FormattedSunrise(props) {
  let date = new Date(props.time);

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let mins = date.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`;
  }
  return `${hours}:${mins}`;
}
