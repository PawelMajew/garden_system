import { MainView } from "../models/MainView";
import { BaseService } from "./baseService";

// Zdefiniowanie metod do interakcji z API
export class APIService extends BaseService {
  constructor() {
    super("http://localhost:5000");
  }

  async getMainView(): Promise<MainView> {
    const response = await this.sendRequest("/mainview", "GET");
    if (response.ok) {
      return await response.json();
    } else {
      return Promise.reject("Error getting mainView");
    }
  }

  async postMode(isAutomatic: boolean): Promise<void> {
    const request = { isAutomaticMode: isAutomatic };
    await this.sendRequestBody("/mode", "POST", request);
  }

  async getMode(): Promise<boolean> {
    const response = await this.sendRequest("/mode", "GET");
    if (response.ok) {
      return (await response.json()).AutomaticMode;
    } else {
      return Promise.reject("Error getting mode");
    }
  }

  async postThreshold(myThreshold: number): Promise<void> {
    const request = { threshold: myThreshold };
    await this.sendRequestBody("/threshold", "POST", request);
  }

  
  async postSprinkler(isOn: boolean): Promise<void> {
    const request = { sprinkler_on: isOn };
    await this.sendRequestBody("/sprinkler", "POST", request);
  }
}
