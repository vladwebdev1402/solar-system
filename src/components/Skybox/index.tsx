import { useThree } from '@react-three/fiber';
import { useMemo } from 'react';
import { CubeTextureLoader } from 'three';

const Skybox = () => {
  const { scene } = useThree();
  const texture = useMemo(() => {
    const loader = new CubeTextureLoader();
    return loader.load([
      '/skybox/spaceft.jpg',
      '/skybox/spacebk.jpg',
      '/skybox/spaceup.jpg',
      '/skybox/spacedn.jpg',
      '/skybox/spacelf.jpg',
      '/skybox/spacert.jpg',
    ]);
  }, []);

  scene.background = texture;

  return null;
};

export { Skybox };
