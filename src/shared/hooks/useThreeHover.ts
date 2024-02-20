import { ThreeEvent } from '@react-three/fiber';
import { useRef, useState } from 'react';

export const useThreeHover = () => {
  const [isHover, setIsHover] = useState(false);

  const body = useRef(document.getElementsByTagName('body')[0]);

  const onPointerOver = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setIsHover(true);
    body.current.classList.add('hover');
  };

  const onPointerLeave = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setIsHover(false);
    body.current.classList.remove('hover');
  };

  return {
    isHover,
    onPointerOver,
    onPointerLeave,
  };
};
