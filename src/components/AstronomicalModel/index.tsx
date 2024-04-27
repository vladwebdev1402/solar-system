import { useGLTF } from '@react-three/drei';
import { FC } from 'react';

interface Props {
  path: string;
  size: number;
}

const AstronomicalModel: FC<Props> = ({ path, size }) => {
  const model = useGLTF(path);
  return <primitive object={model.scene} scale={size} />;
};

export { AstronomicalModel };
