export type TModelPath =
  | 'sun'
  | 'earth'
  | 'jupiter'
  | 'mars'
  | 'mercury'
  | 'neptune'
  | 'saturn'
  | 'uranus'
  | 'venus';

export interface IOrbite {
  p: number;
  e: number;
  angleX: number;
  shiftX?: number;
  shiftY?: number;
  shiftZ?: number;
}

export interface IAstronomicalObject {
  id: number;
  orbite: IOrbite;
  circleShift: number;
  radiusOnbject: number;
  rotateAroundCenterSpeed: number;
  rotateSpeed: number;
  name: string;
  pathModel?: TModelPath;
  ambient?: number;
  children?: IAstronomicalObject[];
}
