import { IAstronomicalObject } from '@/shared/types';

const searchObject = (
  id: number,
  objects: IAstronomicalObject[]
): IAstronomicalObject | null => {
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].children !== undefined && objects[i].children!.length > 0) {
      const { children } = objects[i];
      const object = children !== undefined ? searchObject(id, children) : null;
      if (object !== null) return object;
    }
    if (objects[i].id === id) return objects[i];
  }

  return null;
};

export { searchObject };
