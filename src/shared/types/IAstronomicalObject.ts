import { ReactNode } from "react";

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
  children?: IAstronomicalObject[];
  model?: ReactNode;
}
