import "./Dot.css";

// Eksportowanie komponentu Dot
interface DotProps {
  color: string;
}

export const Dot = (props: DotProps) => {
  const { color } = props;
  return <div className="dot" style={{ backgroundColor: color }} />;
};
