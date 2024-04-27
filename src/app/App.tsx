import { Suspense } from 'react';

import { MainPage, MainPageSuspense } from '@/pages';

import './fonts/fonts.scss';

function App() {
  return (
    <Suspense fallback={<MainPageSuspense />}>
      <MainPage />
    </Suspense>
  );
}

export default App;
