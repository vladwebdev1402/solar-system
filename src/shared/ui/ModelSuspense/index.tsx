import { FC } from 'react';
import st from './style.module.scss';

interface Props {
  message: string;
}

const ModelSuspense: FC<Props> = ({ message }) => {
  return (
    <div className={st.suspense}>
      <div>
        <div className={st.message}>{message}</div>
        <div className={st.loader} />
      </div>
    </div>
  );
};

export { ModelSuspense };
