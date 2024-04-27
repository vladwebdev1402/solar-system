import { ComponentPropsWithRef, FC } from 'react';

import st from './style.module.scss';

interface Props extends ComponentPropsWithRef<'input'> {
  label: string;
}

const Checkbox: FC<Props> = ({ label, ...props }) => {
  return (
    <label className={st.checkbox}>
      <input {...props} type="checkbox" />
      <div className={st.box} />
      <span className={st.label}>{label}</span>
    </label>
  );
};

export { Checkbox };
