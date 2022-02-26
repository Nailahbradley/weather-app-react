export default function WeatherTemperature(props) {
  return (
    <span className="temperature">
      {Math.round(props.fahrenheit)} <span className="temp">°F </span>
    </span>
  );
}
