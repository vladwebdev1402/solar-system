import { Mesh } from 'three';

import { ThreeEvent, useFrame } from '@react-three/fiber';
import { FC, useRef, useState } from 'react';

import { Point3 } from '@/shared/types';

interface BoxProps {
  position?: Point3;
  radius?: number;
  rotateRadius?: number;
  rotateCenterSpeed?: number;
  rotateSpeed?: number;
  addedAngle?: number;
}

const Box: FC<BoxProps> = ({
  position = { x: 0, y: 0, z: 0 },
  radius = 0,
  rotateRadius = 0,
  rotateCenterSpeed = 0,
  rotateSpeed = 0,
  addedAngle = 0,
}) => {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef<Mesh>(null);
  const angleRef = useRef<number>(addedAngle);
  const [clicked, click] = useState(false);

  useFrame(() => {
    if (ref.current) {
      if (rotateCenterSpeed !== 0) {
        ref.current.position.x = rotateRadius * Math.sin(angleRef.current);
        ref.current.position.z = rotateRadius * Math.cos(angleRef.current);
        angleRef.current += Math.PI / (180 * (1 / rotateCenterSpeed));
      }
      ref.current.rotateY(rotateSpeed);
    }
  });

  return (
    <>
      <mesh
        ref={ref}
        onClick={(e: ThreeEvent<MouseEvent>) => {
          e.stopPropagation();
          click(!clicked);
        }}
        scale={clicked ? 1.5 : 1}
        onPointerOver={() => setIsHover(true)}
        onPointerLeave={() => setIsHover(false)}
        position={[position.x, position.y, position.z]}>
        <sphereGeometry args={[radius, 64, 32]} />
        <meshStandardMaterial color={isHover ? 'hotpink' : 'orange'} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[rotateRadius, 0.05, 30, 64]} />
        <meshStandardMaterial color={isHover ? 'hotpink' : 'orange'} />
      </mesh>
    </>
  );
};

export default Box;
