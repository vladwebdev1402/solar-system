import { FC, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { TModelPath } from '@/shared/types';
import { AstronomicalModel } from '@/shared/ui';

import { AstronomicalModelWindowSuspense } from './AstronomicalModelWindowSuspense';
import st from './style.module.scss';
import clsx from 'clsx';

interface Props {
  pathModel: TModelPath;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AstronomicalModelWindow: FC<Props> = ({
  pathModel,
  isOpen,
  setIsOpen,
}) => {
  return (
    <Suspense fallback={<AstronomicalModelWindowSuspense />}>
      <div className={clsx(st.window, { [st.window_open]: isOpen })}>
        <Canvas>
          <ambientLight intensity={2} color={'white'} />
          <OrbitControls />
          <AstronomicalModel pathModel={pathModel} scale={2} />
        </Canvas>
        <button className={st.button_open} onClick={() => setIsOpen(!isOpen)} />
      </div>
    </Suspense>
  );
};

export default AstronomicalModelWindow;
