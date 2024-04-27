import { TModelPath } from '@/shared/types';
import { FC } from 'react';
import {
  Earth,
  Jupiter,
  Mars,
  Mercury,
  Neptune,
  Saturn,
  Sun,
  Uranus,
  Venus,
} from './models';

interface Props {
  pathModel: TModelPath;
  scale: number;
}

const AstronomicalModel: FC<Props> = ({ pathModel, scale }) => {
  return {
    sun: (
      <group scale={scale}>
        <Sun />
      </group>
    ),
    earth: (
      <group scale={scale}>
        <Earth />
      </group>
    ),
    jupiter: (
      <group scale={scale}>
        <Jupiter />
      </group>
    ),
    mars: (
      <group scale={scale}>
        <Mars />
      </group>
    ),
    mercury: (
      <group scale={scale}>
        <Mercury />
      </group>
    ),
    neptune: (
      <group scale={scale}>
        <Neptune />
      </group>
    ),
    saturn: (
      <group scale={scale}>
        <Saturn />
      </group>
    ),
    uranus: (
      <group scale={scale}>
        <Uranus />
      </group>
    ),
    venus: (
      <group scale={scale}>
        <Venus />
      </group>
    ),
  }[pathModel];
};

export { AstronomicalModel };
