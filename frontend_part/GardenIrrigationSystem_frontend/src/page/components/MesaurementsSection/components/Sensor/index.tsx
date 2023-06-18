import { Dot } from "../Dot";
import "./Sensor.css";

// Eksportowanie komponentu Sensor z okresleniem jego parametrow
interface SensorProps {
  labelText: string;
  humidity: number;
  isSensorOn: boolean;
}

export const Sensor = (props: SensorProps) => {
  const { labelText, humidity, isSensorOn } = props;
  return (
    <div className="sensor-container">
      <label className="sensor-text">{labelText}</label>
      <Dot color={isSensorOn ? "green" : "red"} />
      <br />
      <output className="sensor-output">{humidity}</output>
    </div>
  );
};
