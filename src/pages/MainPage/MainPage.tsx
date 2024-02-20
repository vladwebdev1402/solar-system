import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { AstronomicalObject } from '@/components/AstronomicalObject';

import st from './MainPage.module.scss';
import { mockAstronomicalObject } from './mock/mockAstronomicalObject';

const MainPage = () => {
  return (
    <div className={st.canvas}>
      <Canvas style={{ backgroundColor: '#1f1f1f' }}>
        <ambientLight intensity={1} />
        <directionalLight intensity={1} position={[10, 10, 10]} />
        {mockAstronomicalObject.map((astro) => (
          <AstronomicalObject astro={astro} key={astro.id} />
        ))}
        <OrbitControls makeDefault />
        <PerspectiveCamera makeDefault position={[350, 200, 300]} />
      </Canvas>
    </div>
  );
};

export default MainPage;
