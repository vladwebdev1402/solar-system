import { Mesh } from 'three';

import { Line, Plane, Trail } from '@react-three/drei';
import { ThreeEvent, useFrame } from '@react-three/fiber';
import { FC, useMemo, useRef, useState } from 'react';

import { IAstronomicalObject } from '@/shared/types/IAstronomicalObject';

import { calcEllipsePoints } from './utils/calcEllipsePoints';
import { calcHalfAxis } from './utils/calcHalfAxis';

interface BoxProps {
  astro: IAstronomicalObject;
  isVisibleOrbit?: boolean;
  isVisibleTrail?: boolean;
  isAsteroid?: boolean;
}

const AstronomicalObject: FC<BoxProps> = ({
  astro,
  isVisibleOrbit = false,
  isVisibleTrail = false,
  isAsteroid = false,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const astroRef = useRef<Mesh>(null);
  const angleRef = useRef<number>(astro.circleShift);

  const { xRadius, yRadius } = useMemo(
    () => calcHalfAxis(astro.orbite.p, astro.orbite.e),
    [astro]
  );

  const points = useMemo(() => {
    return isVisibleOrbit ? calcEllipsePoints(astro.orbite) : [];
  }, [astro, isVisibleOrbit]);

  useFrame(() => {
    if (astroRef.current) {
      if (astro.rotateAroundCenterSpeed !== 0) {
        const { shiftX = 0, shiftZ = 0 } = astro.orbite;
        const { rotateAroundCenterSpeed } = astro;
        astroRef.current.position.x =
          Math.cos(angleRef.current) * xRadius + shiftX;
        astroRef.current.position.z =
          Math.sin(angleRef.current) * yRadius + shiftZ;

        angleRef.current += Math.PI / (180 * (1 / rotateAroundCenterSpeed));
      }
      astroRef.current.rotateY(astro.rotateSpeed);
    }
  });

  if (isAsteroid)
    return (
      <Plane rotation={[(Math.PI * astro.orbite.angleX) / 180, 0, 0]}>
        <mesh ref={astroRef} position={[0, astro.orbite.shiftY || 0, 0]}>
          <sphereGeometry args={[astro.radiusOnbject, 64, 32]} />
          <meshStandardMaterial color={'white'} />
        </mesh>
      </Plane>
    );

  return (
    <Plane rotation={[(Math.PI * astro.orbite.angleX) / 180, 0, 0]}>
      <Trail
        width={isVisibleTrail ? 10 : 0}
        color={'hotpink'}
        length={100}
        decay={0.1}
        interval={1}>
        <mesh
          ref={astroRef}
          onClick={(e: ThreeEvent<MouseEvent>) => {
            e.stopPropagation();
            setIsClicked(!isClicked);
          }}
          scale={isClicked ? 1.5 : 1}
          onPointerOver={(e: ThreeEvent<MouseEvent>) => {
            e.stopPropagation();
            setIsHover(true);
          }}
          onPointerLeave={() => setIsHover(false)}>
          <sphereGeometry args={[astro.radiusOnbject, 64, 32]} />
          <meshStandardMaterial color={isHover ? 'hotpink' : 'orange'} />
        </mesh>
      </Trail>
      {isVisibleOrbit && (
        <Line points={points} color={'gray'} lineWidth={0.3} />
      )}
    </Plane>
  );
};

export default AstronomicalObject;
