import "./SectionTitle.css";

// Eksportowanie komponentu SectionTitle z nadaniem mu parametru okreslajacego tytul danej sekcji
interface SectionTitleProps {
  titleText: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
  const { titleText } = props;
  return <h2 className="sectionTitle">{titleText}</h2>;
};
