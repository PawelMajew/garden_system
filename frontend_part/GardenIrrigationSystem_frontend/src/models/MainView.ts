import { SensorData } from "./SensorData";

export interface MainView {
  error_message: string | null;
  sensor_data: SensorData[];
  sprinkler_state: number;
  watering_process: number;
}
