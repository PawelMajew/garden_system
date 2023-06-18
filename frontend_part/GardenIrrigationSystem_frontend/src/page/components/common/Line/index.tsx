import "./Line.css";

// Eksportowanie komponentu Line z nadaniem mu parametru okreslajacego wysokosc linii
interface LineProps {
  height: number;
}

export const Line = (props: LineProps) => {
  const { height } = props;
  return <div className="line" style={{ height: height }} />;
};
