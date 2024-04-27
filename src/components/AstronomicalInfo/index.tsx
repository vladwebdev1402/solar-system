import { useContext, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { CurrentObjectContext } from '@/context';
import { IAstronomicalObject } from '@/shared/types';
import { Modal, AstronomicalModel } from '@/shared/ui';
import { searchObject } from '@/helpers';

import { mockAstronomicalObject } from '../SolarSystem/mock';
import st from './style.module.scss';

const AstronomicalInfo = () => {
  const { current, setCurrent } = useContext(CurrentObjectContext);
  const [object, setObject] = useState<null | IAstronomicalObject>(null);
  useEffect(() => {
    if (current !== null)
      setObject(searchObject(current, mockAstronomicalObject));
  }, [current]);

  return (
    <Modal
      isOpen={current !== null}
      onClose={() => {
        if (setCurrent) setCurrent(null);
      }}>
      {object !== null && (
        <div className={st.body}>
          <div className={st.header}>
            <div className={st.name}>{object.name}</div>
            {object.pathModel && (
              <div className={st.model}>
                <Canvas>
                  <ambientLight intensity={2} color={'white'} />
                  <OrbitControls />
                  <AstronomicalModel pathModel={'venus'} scale={1} />
                </Canvas>
              </div>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
};

export { AstronomicalInfo };
