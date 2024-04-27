import { Mesh } from 'three';

import { Line } from '@react-three/drei';
import { ThreeEvent, useFrame } from '@react-three/fiber';
import { FC, useContext, useMemo, useRef } from 'react';

import { useThreeHover } from '@/shared/hooks';
import { IAstronomicalObject } from '@/shared/types/IAstronomicalObject';

import { calcEllipsePoints } from './utils/calcEllipsePoints';
import { calcHalfAxis } from './utils/calcHalfAxis';
import { CurrentObjectContext, SystemSettingsContext } from '@/context';
import { AstronomicalModel } from '@/shared/ui/AstronomucalModel';

interface AstronomicalObjectrops {
  astro: IAstronomicalObject;
  isVisibleOrbit?: boolean;
  isAsteroid?: boolean;
}

const AstronomicalObject: FC<AstronomicalObjectrops> = ({
  astro,
  isVisibleOrbit = false,
  isAsteroid = false,
}) => {
  const { isHover, onPointerLeave, onPointerOver } = useThreeHover();
  const { setCurrent } = useContext(CurrentObjectContext);
  const {
    state: { speed, isShowOrbit },
  } = useContext(SystemSettingsContext);

  const astroRef = useRef<Mesh>(null);
  const sphereRef = useRef<Mesh>(null);
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
        angleRef.current +=
          Math.PI / (180 * (1 / (rotateAroundCenterSpeed * speed)));
      }
    }
    sphereRef.current && sphereRef.current.rotateY(astro.rotateSpeed * speed);
  });

  const onObjectClick = () => {
    if (setCurrent) setCurrent(astro.id);
  };

  if (isAsteroid)
    return (
      <mesh
        rotation={[(Math.PI * astro.orbite.angleX) / 180, 0, 0]}
        position={[0, astro.orbite.shiftY || 0, 0]}>
        <mesh ref={astroRef}>
          <sphereGeometry args={[astro.radiusOnbject, 64, 32]} />
          <meshStandardMaterial color={'white'} />
        </mesh>
      </mesh>
    );

  return (
    <mesh rotation={[(Math.PI * astro.orbite.angleX) / 180, 0, 0]}>
      <mesh
        ref={astroRef}
        onClick={(e: ThreeEvent<MouseEvent>) => {
          e.stopPropagation();
          onObjectClick();
        }}
        onPointerOver={onPointerOver}
        onPointerLeave={onPointerLeave}>
        <mesh ref={sphereRef}>
          {astro.pathModel ? (
            <AstronomicalModel
              pathModel={astro.pathModel}
              scale={astro.radiusOnbject}
            />
          ) : (
            <sphereGeometry args={[astro.radiusOnbject / 2, 64, 32]} />
          )}
          {!astro.pathModel && (
            <meshStandardMaterial color={isHover ? 'hotpink' : 'orange'} />
          )}
          <ambientLight intensity={astro.ambient || 0.01} color={'white'} />
        </mesh>

        {astro.children &&
          astro.children.map((astro) => (
            <AstronomicalObject key={astro.id} astro={astro} />
          ))}
      </mesh>
      {isVisibleOrbit && isShowOrbit && (
        <Line points={points} color={'gray'} lineWidth={0.3} />
      )}
    </mesh>
  );
};

export { AstronomicalObject };
