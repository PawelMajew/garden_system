import { useEffect, useState } from "react";
import "./Layout.css";
import { Line } from "../components/common/Line";
import { TopSection } from "../components/TopSection";
import { useQuery } from "react-query";
import { APIService } from "../../services/APIService";
import { CircularProgress } from "@mui/material";
import { SettingsSection } from "../components/SettingsSection";
import { ActionsSection } from "../components/ActionsSection";
import { MesaurementsSection } from "../components/MesaurementsSection";

export const Layout = (): JSX.Element => {
  const lineHeight: number = 8;

  const [isAutomaticModeActive, setisAutomaticModeActive] =
    useState<boolean>(true);
  const [humidityOne, setHumidityOne] = useState<number>(0);
  const [humidityTwo, setHumidityTwo] = useState<number>(0);
  const [isSensorOnOne, setIsSensorOnOne] = useState<boolean>(false);
  const [isSensorOnTwo, setIsSensorOnTwo] = useState<boolean>(false);
  const [isWateringActive, setIsWateringActive] = useState<boolean>(false);

  // Obsluga zmiany stanu podlewania
  const handleToggle = (): void => {
    setIsWateringActive(!isWateringActive);
  };

  const api = new APIService();
  const {
    data: mainViewData,
    isLoading: isMainViewDataLoading,
    refetch: refetchMainView,
  } = useQuery(["mainview"], () => api.getMainView(), {
    // Odswiezanie w celu wyswietlenia aktualnych danych
    refetchInterval: 1000 * 60,
  });

  useEffect(() => {
    api.postSprinkler(isWateringActive).then(() => {
      refetchMainView();
    });
  }, [isWateringActive]);
// Aktualizacja stanow
  useEffect(() => {
    setHumidityOne(
      mainViewData?.sensor_data.filter((d) => d.sensor_id === 1)[0].humidity ??
        0
    );
    setHumidityTwo(
      mainViewData?.sensor_data.filter((d) => d.sensor_id === 2)[0].humidity ??
        0
    );
    setIsSensorOnOne(
      !!mainViewData?.sensor_data.filter((d) => d.sensor_id === 1)[0]
        .is_sensor_on ?? false
    );
    setIsSensorOnTwo(
      !!mainViewData?.sensor_data.filter((d) => d.sensor_id === 2)[0]
        .is_sensor_on ?? false
    );
    setIsWateringActive(!!mainViewData?.watering_process ?? false);
  }, [mainViewData]);

  const handleIsAutomaticModeActiveChange = (
    isAutomaticMode: boolean
  ): void => {
    setisAutomaticModeActive(isAutomaticMode);
  };

  if (isMainViewDataLoading) {
    return <CircularProgress />;
  }
  // wyswietlenie elementow
  return (
    <div className="screen">
      {/* <a href="#" className="link">Link</a> */}
      <div className="container-center-horizontal">
        <div className="desktop-1">
          <div className="flex-col">
            <div className="overlap-group1">
              <TopSection
                handleIsAutomaticModeChange={handleIsAutomaticModeActiveChange}
                isWateringActive={isWateringActive}
              />
              <Line height={lineHeight} />
              <SettingsSection isAutomaticModeActive={isAutomaticModeActive} />
              <Line height={lineHeight} />
              <MesaurementsSection
                sensors={[
                  { isSensorOn: isSensorOnOne, humidity: humidityOne },
                  { isSensorOn: isSensorOnTwo, humidity: humidityTwo },
                ]}
              />
              <Line height={lineHeight} />
              <ActionsSection
                onButtonClick={handleToggle}
                isWateringActive={isWateringActive}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
