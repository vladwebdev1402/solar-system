import { createContext } from 'react';

type SystemSettingsState = { speed: number; isShowOrbit: boolean };
type SystemSettingsType = {
  state: SystemSettingsState;
  setSettings: ((state: SystemSettingsState) => void) | null;
};

const SystemSettingsContext = createContext<SystemSettingsType>({
  state: {
    isShowOrbit: false,
    speed: 1,
  },
  setSettings: null,
});

export { SystemSettingsContext };
export type { SystemSettingsType, SystemSettingsState };
