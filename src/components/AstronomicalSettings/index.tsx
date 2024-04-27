import { ChangeEvent, useContext, useState } from 'react';
import clsx from 'clsx';

import OpenSVG from '@/shared/assets/open.svg?react';

import st from './style.module.scss';
import { FilterItem, Slider } from '@/shared/ui';
import { SystemSettingsContext } from '@/context/SystemSettingsContext';
import { Checkbox } from '@/shared/ui/Checkbox';

const AstronomicalSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, setSettings } = useContext(SystemSettingsContext);

  const onSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (setSettings) {
      setSettings({ ...state, speed: Number(e.target.value) });
    }
  };

  const onCheckboxChange = () => {
    if (setSettings) {
      setSettings({ ...state, isShowOrbit: !state.isShowOrbit });
    }
  };

  return (
    <div className={clsx(st.settings, { [st.settings_open]: isOpen })}>
      <button className={st.button} onClick={() => setIsOpen(!isOpen)}>
        <OpenSVG className={st.icon} />
      </button>
      <div className={st.body}>
        <FilterItem name="Скорость" value={state.speed}>
          <Slider
            min={0}
            max={2}
            step={0.1}
            value={state.speed}
            onChange={onSliderChange}
          />
        </FilterItem>
        <FilterItem name="Орбиты" value={state.isShowOrbit ? 'Вкл' : 'Выкл'}>
          <Checkbox
            label="Включить / Отключить"
            onChange={onCheckboxChange}
            checked={state.isShowOrbit}
          />
        </FilterItem>
      </div>
    </div>
  );
};

export { AstronomicalSettings };
