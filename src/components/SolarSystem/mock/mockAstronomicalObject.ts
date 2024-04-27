import { IAstronomicalObject } from '@/shared/types';

export const mockAstronomicalObject: IAstronomicalObject[] = [
  {
    id: 0,
    name: 'Солнце',
    radiusOnbject: 10,
    rotateSpeed: 0.001,
    rotateAroundCenterSpeed: 0,
    orbite: {
      angleX: 0,
      e: 0,
      p: 0,
    },
    circleShift: 0,
    pathModel: './sun/scene.gltf',
    ambient: 0.8,
  },
  {
    id: 1,
    name: 'Меркурий',
    radiusOnbject: 1,
    rotateSpeed: 0.015,
    rotateAroundCenterSpeed: 0.05,
    orbite: {
      angleX: 7.005,
      p: 38.7,
      e: 0.2056,
      shiftZ: 16,
    },
    pathModel: './mercury/scene.gltf',
    circleShift: 23,
  },
  {
    id: 2,
    name: 'Венера',
    radiusOnbject: 1.8,
    rotateSpeed: 0.01,
    rotateAroundCenterSpeed: 0.09,
    orbite: {
      angleX: 3.375,
      p: 72.3,
      e: 0.0068,
      shiftZ: 0.09,
    },
    pathModel: './venus/scene.gltf',
    circleShift: 30,
  },
  {
    id: 3,
    name: 'Земля',
    radiusOnbject: 1,
    rotateSpeed: 0.01,
    rotateAroundCenterSpeed: 0.005,
    orbite: {
      angleX: 0.002,
      p: 100,
      e: 0.0167,
      shiftZ: 4,
    },
    circleShift: 0,
    // pathModel: './earth/scene.gltf',
    children: [
      {
        id: 11,
        name: 'Луна',
        radiusOnbject: 0.3,
        circleShift: 0,
        rotateAroundCenterSpeed: 0.2,
        rotateSpeed: 0.04,
        orbite: {
          angleX: 0,
          e: 0.5,
          p: 3,
        },
      },
    ],
  },
  {
    id: 4,
    name: 'Марс',
    radiusOnbject: 1.2,
    rotateSpeed: 0.01,
    rotateAroundCenterSpeed: 0.02,
    orbite: {
      angleX: 1.85,
      p: 152,
      e: 0.093,
      shiftZ: 28,
    },
    circleShift: 230,
    pathModel: './mars/scene.gltf',
    children: [
      {
        id: 12,
        name: 'Деймос',
        radiusOnbject: 0.2,
        circleShift: 0,
        rotateAroundCenterSpeed: 0.1,
        rotateSpeed: 0.04,
        orbite: {
          angleX: 0,
          e: 0.5,
          p: 4.5,
        },
      },
      {
        id: 13,
        name: 'Фобос',
        radiusOnbject: 0.2,
        circleShift: 270,
        rotateAroundCenterSpeed: 0.2,
        rotateSpeed: 0.04,
        orbite: {
          angleX: 0,
          e: 0.5,
          p: 3,
        },
      },
    ],
  },
  {
    id: 5,
    name: 'Юпитер',
    radiusOnbject: 4.4,
    rotateSpeed: 0.01,
    rotateAroundCenterSpeed: 0.01,
    pathModel: './jupiter/scene.gltf',
    orbite: {
      angleX: 1.304,
      p: 520,
      e: 0.049,
      shiftZ: 50,
    },
    circleShift: 60,
    children: [
      {
        id: 14,
        name: 'Ио',
        radiusOnbject: 1,
        circleShift: 0,
        rotateAroundCenterSpeed: 0.07,
        rotateSpeed: 0.04,
        orbite: {
          angleX: 0.05,
          e: 0.5,
          p: 12.2,
        },
      },
      {
        id: 15,
        name: 'Европа',
        radiusOnbject: 1,
        circleShift: 65,
        rotateAroundCenterSpeed: 0.05,
        rotateSpeed: 0.04,
        orbite: {
          angleX: 0.471,
          e: 0.5,
          p: 17.8,
        },
      },
      {
        id: 16,
        name: 'Ганимед',
        radiusOnbject: 1.8,
        circleShift: 180,
        rotateAroundCenterSpeed: 0.1,
        rotateSpeed: 0.04,
        orbite: {
          angleX: 0.204,
          e: 0.5,
          p: 25.1,
        },
      },
      {
        id: 17,
        name: 'Каллисто',
        radiusOnbject: 1.5,
        circleShift: 40,
        rotateAroundCenterSpeed: 0.2,
        rotateSpeed: 0.04,
        orbite: {
          angleX: 0.205,
          e: 0.5,
          p: 30.6,
        },
      },
    ],
  },
  {
    id: 6,
    name: 'Сатурн',
    radiusOnbject: 4.4,
    rotateSpeed: 0.01,
    rotateAroundCenterSpeed: 0.01,
    pathModel: './saturn/scene.gltf',
    orbite: {
      angleX: 2.486,
      p: 953,
      e: 0.054,
      shiftZ: 106,
    },
    circleShift: 124,
  },
  {
    id: 7,
    name: 'Уран',
    radiusOnbject: 5,
    rotateSpeed: 0,
    rotateAroundCenterSpeed: 0.005,
    orbite: {
      angleX: 0.772,
      p: 1919,
      e: 0.047,
      shiftZ: 171,
    },
    pathModel: './uranus/scene.gltf',
    circleShift: 320,
  },
  {
    id: 8,
    name: 'Нептун',
    radiusOnbject: 5,
    rotateSpeed: 0.01,
    rotateAroundCenterSpeed: 0.05,
    orbite: {
      angleX: 1.769,
      p: 3007,
      e: 0.009,
      shiftZ: 67,
    },
    circleShift: 11,
    pathModel: './neptune/scene.gltf',
  },
  {
    id: 10,
    name: 'Плутон',
    radiusOnbject: 25,
    rotateSpeed: 0.01,
    rotateAroundCenterSpeed: 0.05,
    orbite: {
      angleX: 17.165,
      p: 3948,
      e: 0.248,
      shiftZ: 196,
    },
    circleShift: 32,
  },
];
