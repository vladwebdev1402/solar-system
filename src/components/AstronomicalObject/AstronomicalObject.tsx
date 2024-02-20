import { Mesh } from 'three';

import { Trail } from '@react-three/drei';
import { ThreeEvent, useFrame } from '@react-three/fiber';
import { FC, useRef, useState } from 'react';

import { IAstronomicalObject } from '@/shared/types/IAstronomicalObject';

interface BoxProps {
  astro: IAstronomicalObject;
}

const AstronomicalObject: FC<BoxProps> = ({ astro }) => {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef<Mesh>(null);
  const angleRef = useRef<number>(astro.v);
  const [clicked, click] = useState(false);

  useFrame(() => {
    if (ref.current) {
      if (astro.rotateCenterSpeed !== 0) {
        const { p, rotateCenterSpeed, e } = astro;
        const f = p * e;
        const xRadius = p + f;
        const yRadius = p * Math.sqrt((1 - e) ^ 2);
        ref.current.position.x = Math.cos(angleRef.current) * xRadius;
        ref.current.position.z = Math.sin(angleRef.current) * yRadius;
        angleRef.current += Math.PI / (180 * (1 / rotateCenterSpeed));
      }
      ref.current.rotateY(astro.rotateSpeed);
    }
  });

  return (
    <>
      <Trail
        width={6}
        color={'hotpink'}
        length={100}
        decay={0.1}
        local={false}
        stride={0}
        interval={1}
        target={undefined}
        attenuation={(width) => width}>
        <mesh
          ref={ref}
          onClick={(e: ThreeEvent<MouseEvent>) => {
            e.stopPropagation();
            click(!clicked);
          }}
          scale={clicked ? 1.5 : 1}
          onPointerOver={(e: ThreeEvent<MouseEvent>) => {
            e.stopPropagation();
            setIsHover(true);
          }}
          onPointerLeave={() => setIsHover(false)}>
          <sphereGeometry args={[astro.radiusOnbject, 64, 32]} />
          <meshStandardMaterial color={isHover ? 'hotpink' : 'orange'} />
        </mesh>
      </Trail>
    </>
  );
};

export default AstronomicalObject;
