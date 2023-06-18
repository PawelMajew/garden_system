import { Button } from "../../../common/Button";
import "./Input.css";
import { useEffect, useState } from "react";
import { APIService } from "../../../../../services/APIService";

interface InputProps {
  isAutomaticModeActive: boolean;
}

// Deklaracja komponentu Input
export const Input = (props: InputProps) => {
  const { isAutomaticModeActive } = props;
  const api = new APIService();
  const [threshold, setThreshold] = useState<number>();

  useEffect(() => {
    // Efekt po zmianie progu wilgotnosci
    if (threshold !== undefined) {
      const response = api.postThreshold(threshold);
      response.then((res) => {
        console.log(res);
      });
    }
  }, [threshold]);

  const handleClick = () => {
    // Obsluga klikniecia przycisku zatwierdzajacego
    const value = (document.querySelector(
      'input[name="thresholdInput"]'
    ) as HTMLInputElement)!.value;
    const newThreshold = Number(value);
    if (newThreshold !== threshold) {
      setThreshold(newThreshold);
    }
  };

  return (
    <div>
      <label className="input-label">Wilgotność automatycznego uruchamiania</label>
      <br />
      <input
        name="thresholdInput"
        type="number"
        className="myinput"
        disabled={isAutomaticModeActive}
      />
      <Button onClick={handleClick}>Zatwierdź</Button>
    </div>
  );
};
