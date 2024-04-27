import { useEffect } from 'react';

const useScrollBody = (isOpen: boolean) => {
  return useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    if (isOpen) body.classList.add('stop_scroll');
    else body.classList.remove('stop_scroll');
  }, [isOpen]);
};

export { useScrollBody };
