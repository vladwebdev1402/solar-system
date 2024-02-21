import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMemo } from 'react';

import { AstronomicalObject } from '@/components/AstronomicalObject';

import st from './MainPage.module.scss';
import { mockAstronomicalObject } from './mock/mockAstronomicalObject';
import { generateAsteroid } from './utill/generateAsteroid';

const MainPage = () => {
  const asteroids = useMemo(() => {
    const array = [];
    for (let i = 0; i < 1000; i++) {
      array.push(generateAsteroid());
    }
    return array;
  }, []);

  // const [asteroids, setAsteroids] = useState<IAstronomicalObject[]>([]);
  // const countAsteroidRef = useRef(0);

  // useEffect(() => {
  //   const addAsteroids = () => {
  //     const addedAsteroids = [];

  //     do {
  //       countAsteroidRef.current++;
  //       addedAsteroids.push(generateAsteroid());
  //     } while (countAsteroidRef.current % 50 != 0);

  //     setAsteroids([...asteroids, ...addedAsteroids]);
  //   };

  //   if (asteroids.length < 500) setTimeout(() => addAsteroids(), 50);
  // }, [countAsteroidRef, setAsteroids, asteroids]);

  return (
    <div className={st.canvas}>
      <Canvas style={{ backgroundColor: '#1f1f1f' }}>
        <ambientLight intensity={0.5} color={'white'} />
        <pointLight intensity={50000} color={'#f4ff00'} position={[0, 0, 0]} />
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
