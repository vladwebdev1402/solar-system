import clsx from 'clsx';

import { FC, MouseEvent, ReactNode, useEffect } from 'react';

import st from './style.module.scss';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<Props> = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    if (isOpen) body.classList.add('stop_scroll');
    else body.classList.remove('stop_scroll');
  }, [isOpen]);

  return (
    <div
      className={clsx(st.modal, { [st.modal__open]: isOpen })}
      onClick={onClose}>
      <div
        className={st.body}
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        <button className={st.close} onClick={onClose} />
        {children}
      </div>
    </div>
  );
};

export { Modal };
