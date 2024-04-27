import {
  CurrentObjectContext,
  SystemSettingsContext,
  SystemSettingsState,
} from '@/context';

import { useState } from 'react';

import { AstronomicalInfo } from '@/components/AstronomicalInfo';
import { SolarSystem } from '@/components/SolarSystem';
import { AstronomicalSettings } from '@/components/AstronomicalSettings';

const MainPage = () => {
  const [current, setCurrent] = useState<null | number>(11);
  const [settings, setSettings] = useState<SystemSettingsState>({
    speed: 1,
    isShowOrbit: true,
  });

  const onCurrent = (id: number | null) => {
    setCurrent(id);
  };

  const onSettings = (state: SystemSettingsState) => {
    setSettings(state);
  };

  return (
    <CurrentObjectContext.Provider
      value={{ current: current, setCurrent: onCurrent }}>
      <SystemSettingsContext.Provider
        value={{ state: settings, setSettings: onSettings }}>
        {/* <AstronomicalInfo /> */}
        {/* <SolarSystem /> */}
        <AstronomicalSettings />
      </SystemSettingsContext.Provider>
    </CurrentObjectContext.Provider>
  );
};

export { MainPage };
