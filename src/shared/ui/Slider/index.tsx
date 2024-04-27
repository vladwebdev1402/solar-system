import { ComponentPropsWithoutRef, FC } from 'react';
import st from './style.module.scss';

const Slider: FC<ComponentPropsWithoutRef<'input'>> = ({ ...props }) => {
  return <input type="range" className={st.slider} {...props} />;
};

export { Slider };
