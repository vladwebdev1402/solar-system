import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useMemo } from 'react';

import { AstronomicalObject } from '@/components/AstronomicalObject';

import { mockAstronomicalObject } from './mock/mockAstronomicalObject';
import st from './style.module.scss';
import { generateAsteroid } from './utill/generateAsteroid';
import { searchObject } from './utill/searchObject';

const SolarSystem = () => {
  const asteroids = useMemo(() => {
    const array = [];
    for (let i = 0; i < 250; i++) {
      array.push(generateAsteroid());
    }
    return array;
  }, []);

  useEffect(() => {
    console.log(searchObject(11, mockAstronomicalObject));
  }, []);

  return (
    <div className={st.canvas}>
      <Canvas style={{ backgroundColor: '#1f1f1f' }}>
        <ambientLight intensity={0.5} color={'white'} />
        <pointLight intensity={50000} color={'white'} position={[0, 0, 0]} />
        {mockAstronomicalObject.map((astro) => (
          <AstronomicalObject astro={astro} key={astro.id} isVisibleOrbit />
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

export { SolarSystem };
