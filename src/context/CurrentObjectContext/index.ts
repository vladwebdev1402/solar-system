import { createContext } from 'react';

type CurrentObjectType = {
  current: number | null;
  setCurrent: ((id: number | null) => void) | null;
};

const CurrentObjectContext = createContext<CurrentObjectType>({
  current: null,
  setCurrent: null,
});

export { CurrentObjectContext };
export type { CurrentObjectType };
