import { Button } from "../common/Button";
import { SectionTitle } from "../common/SectionTitle";

// Eksport sekcji Akcje z uwzglednieniem zmiany napisu na przycisku w zaleznosci od tego czy zraszacze sa uruchomione

interface ActionsSectionProps {
  onButtonClick: () => void;
  isWateringActive: boolean;
}

export const ActionsSection = (props: ActionsSectionProps) => {
  const { onButtonClick, isWateringActive } = props;

  return (
    <>
      <SectionTitle titleText="Akcje" />
      <Button onClick={onButtonClick}>{`${
        isWateringActive ? "Zatrzymaj" : "Uruchom"
      } zraszacze`}</Button>
    </>
  );
};
