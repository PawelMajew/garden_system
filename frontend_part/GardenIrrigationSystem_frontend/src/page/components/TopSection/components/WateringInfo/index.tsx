import "./WateringInfo.css";

export interface WateringInfoProps {
  isActive: boolean;
}
// Wyswietlanie informacji o podlewaniu jezeli ono trwa
export const WateringInfo = (props: WateringInfoProps) => {
  return (
    <>
      {props.isActive && (
        <div className="watering-message-container">
          <p className="watering-message">Trwa podlewanie!</p>
        </div>
      )}
    </>
  );
};
