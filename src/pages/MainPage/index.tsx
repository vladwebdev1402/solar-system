import { CurrentObjectContext } from '@/context';

import { useState } from 'react';

import { AstronomicalInfo } from '@/components/AstronomicalInfo';
import { SolarSystem } from '@/components/SolarSystem';

const MainPage = () => {
  const [current, setCurrent] = useState<null | number>(1);

  const onCurrent = (id: number | null) => {
    setCurrent(id);
  };

  return (
    <CurrentObjectContext.Provider
      value={{ current: current, setCurrent: onCurrent }}>
      <AstronomicalInfo />
      <SolarSystem />
    </CurrentObjectContext.Provider>
  );
};

export { MainPage };
