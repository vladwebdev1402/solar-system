import { useContext, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import { CurrentObjectContext } from '@/context';
import { IAstronomicalObject } from '@/shared/types';
import { Modal } from '@/shared/ui';

import { mockAstronomicalObject } from '../SolarSystem/mock/mockAstronomicalObject';
import { searchObject } from '../SolarSystem/utill/searchObject';
import st from './style.module.scss';
import { AstronomicalModel } from '../AstronomicalModel';
import { OrbitControls } from '@react-three/drei';

const AstronomicalInfo = () => {
  const { current, setCurrent } = useContext(CurrentObjectContext);
  const [object, setObject] = useState<null | IAstronomicalObject>(null);

  useEffect(() => {
    if (current !== null)
      setObject(searchObject(current, mockAstronomicalObject));
  }, [current]);

  return (
    <Modal
      isOpen={true}
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
                  <ambientLight intensity={1} color={'white'} />
                  <AstronomicalModel path={object.pathModel} size={2} />
                  <OrbitControls />
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
