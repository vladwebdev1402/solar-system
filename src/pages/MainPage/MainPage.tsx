import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Box } from '@/components/Box';

import st from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={st.canvas}>
      <Canvas style={{ backgroundColor: '#1f1f1f' }}>
        <ambientLight intensity={1} />
        <directionalLight intensity={1} position={[10, 10, 10]} />
        {/* Sun */}
        <Box radius={5} rotateSpeed={0.01} />
        {/* Mercury */}
        <Box
          position={{ x: 10, y: 0, z: 0 }}
          radius={1.5}
          rotateRadius={10}
          rotateCenterSpeed={0.5}
          rotateSpeed={0.015}
        />
        {/* Venus */}
        <Box
          position={{ x: 25, y: 0, z: 0 }}
          rotateSpeed={0.01}
          radius={2}
          rotateRadius={25}
          rotateCenterSpeed={0.4}
          addedAngle={Math.PI / 4}
        />
        <OrbitControls maxZoom={10} minZoom={50} />
      </Canvas>
    </div>
  );
};

export default MainPage;
