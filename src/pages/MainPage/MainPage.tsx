import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMemo } from 'react';

import { AstronomicalObject } from '@/components/AstronomicalObject';

import st from './MainPage.module.scss';
import { mockAstronomicalObject } from './mock/mockAstronomicalObject';
import { generateAsteroid } from './utill/generateAsteroid';

const COUNT = 500;

const MainPage = () => {
  const asteroids = useMemo(() => {
    const array = [];

    for (let i = 0; i < COUNT; i++) {
      array.push(generateAsteroid());
    }

    return array;
  }, []);

  return (
    <div className={st.canvas}>
      <Canvas style={{ backgroundColor: '#1f1f1f' }}>
        <ambientLight intensity={1} />
        <directionalLight intensity={1} position={[10, 10, 10]} />
        {mockAstronomicalObject.map((astro) => (
          <AstronomicalObject
            astro={astro}
            key={astro.id}
            isVisibleOrbit
            isVisibleTrail
          />
        ))}
        {asteroids.map((astro, idx) => (
          <AstronomicalObject key={idx} astro={astro} isAsteroid />
        ))}
        <OrbitControls makeDefault />
        <PerspectiveCamera makeDefault position={[350, 200, 300]} far={20000} />
      </Canvas>
    </div>
  );
};

export default MainPage;
