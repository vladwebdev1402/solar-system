import { ModelSuspense } from '@/shared/ui';

import st from './style.module.scss';

const MainPageSuspense = () => {
  return (
    <div className={st.suspense}>
      <ModelSuspense message="Загружаем модели..." />
    </div>
  );
};

export { MainPageSuspense };
