import { CircularProgress, FormControlLabel, Switch } from "@mui/material";
import { TitleBar } from "./components/TitleBar";
import { Description } from "./components/Description";
import "./TopSection.css";
import { useQuery } from "react-query";
import { APIService } from "../../../services/APIService";
import { useEffect, useState } from "react";
import { WateringInfo } from "./components/WateringInfo";

interface TopSectionProps {
  handleIsAutomaticModeChange: (isActive: boolean) => void;
  isWateringActive: boolean;
}

export const TopSection = (props: TopSectionProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const api = new APIService();

  // Aktualizacja stanu na podstawie pobranej wartosci
  const { isLoading: isModeLoading } = useQuery(["get-is-automatic"], () =>
    api.getMode().then((res) => {
      setChecked(res);
      props.handleIsAutomaticModeChange(res);
    })
  );

  // Aktualizacja stanu na podstawie wartosci od uzytkownika
  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    api.postMode(value).then(() => {
      setChecked(value);
      props.handleIsAutomaticModeChange(value);
    });
  };

  return (
    <div className="top-section-container">
      <WateringInfo isActive={props.isWateringActive} />
      <TitleBar />
      <Description />
      {!isModeLoading ? (
        <FormControlLabel
          control={<Switch onChange={handleSwitchChange} checked={checked} />}
          label="Automatyczny"
        />
      ) : (
        // Wyswietlenie symbolu wskazujacego na ladowanie jesli ladowanie trwa
        <CircularProgress />
      )}
    </div>
  );
};
