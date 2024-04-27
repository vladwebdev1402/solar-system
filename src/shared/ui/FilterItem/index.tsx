import { FC, ReactNode } from 'react';
import st from './style.module.scss';

interface Props {
  name: string;
  value?: string | number;
  children: ReactNode;
}

const FilterItem: FC<Props> = ({ name, value, children }) => {
  return (
    <div>
      <div className={st.header}>
        <span className={st.name}>{name}</span>
        {value && <span>{value}</span>}
      </div>
      <div className={st.body}>{children}</div>
    </div>
  );
};

export { FilterItem };
