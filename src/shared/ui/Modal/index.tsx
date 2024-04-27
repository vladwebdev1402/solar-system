import clsx from 'clsx';
import { FC, MouseEvent, ReactNode } from 'react';

import { useScrollBody } from '@/shared/hooks';

import st from './style.module.scss';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  isStopScroll?: boolean;
}

const Modal: FC<Props> = ({
  children,
  isOpen,
  onClose,
  isStopScroll = false,
}) => {
  useScrollBody(isOpen);

  return (
    <div
      className={clsx(st.modal, {
        [st.modal__open]: isOpen,
        [st.modal__stop_scroll]: isStopScroll,
      })}
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
