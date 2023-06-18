import { Input } from "./components/Input";
import { SectionTitle } from "../common/SectionTitle";

interface SettingsSectionProps {
  isAutomaticModeActive: boolean;
}

export const SettingsSection = (props: SettingsSectionProps) => {
  const { isAutomaticModeActive } = props;

  return (
    <>
      <SectionTitle titleText="Ustawienia" />
      <Input isAutomaticModeActive={isAutomaticModeActive} />
    </>
  );
};
