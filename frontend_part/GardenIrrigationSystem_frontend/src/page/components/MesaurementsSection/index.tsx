import { SectionTitle } from "../common/SectionTitle";
import { Sensor } from "./components/Sensor";

// Eksport sekcji wyswietlajacej pomiary z czujnikow
interface MesaurementsSectionProps {
  sensors: { isSensorOn: boolean; humidity: number }[];
}

export const MesaurementsSection = (props: MesaurementsSectionProps) => {
  const { sensors } = props;

  const outputs = sensors.map((sensor, index) => {
    return (
      <Sensor
        key={index}
        labelText={`Czujnik ${index + 1}`}
        humidity={sensor.humidity}
        isSensorOn={sensor.isSensorOn}
      />
    );
  });

  return (
    <>
      <SectionTitle titleText="Pomiary" />
      {outputs}
    </>
  );
};
