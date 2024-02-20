import { IAstronomicalObject } from '@/shared/types';

export const mockAstronomicalObject: IAstronomicalObject[] = [
  {
    id: 0,
    name: 'Sun',
    radiusOnbject: 5,
    rotateSpeed: 0.01,
    rotateCenterSpeed: 0,
    e: 0,
    p: 0,
    v: 0,
  },
  {
    id: 1,
    name: 'Mercury',
    radiusOnbject: 1,
    rotateSpeed: 0.015,
    rotateCenterSpeed: 0.05,
    p: 38.7,
    v: 23,
    e: 0.2056,
  },
  {
    id: 2,
    name: 'Venus',
    radiusOnbject: 1.5,
    rotateSpeed: 0.01,
    rotateCenterSpeed: 0.09,
    p: 72.3,
    v: 30,
    e: 0.0068,
  },
  {
    id: 3,
    name: 'Earth',
    radiusOnbject: 2,
    rotateSpeed: 0.01,
    rotateCenterSpeed: 0.1,
    p: 100,
    v: 0,
    e: 0.0167,
  },
];
