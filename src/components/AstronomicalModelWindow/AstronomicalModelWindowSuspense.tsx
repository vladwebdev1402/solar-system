import { ModelSuspense } from '@/shared/ui';

import st from './style.module.scss';

const AstronomicalModelWindowSuspense = () => {
  return (
    <div className={st.suspense}>
      <ModelSuspense message="Загружаем модель" />
    </div>
  );
};

export { AstronomicalModelWindowSuspense };
