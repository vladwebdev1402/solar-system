import { useContext, useEffect, useState } from 'react';

import { CurrentObjectContext } from '@/context';
import { IAstronomicalObject } from '@/shared/types';
import { Modal } from '@/shared/ui';
import { searchObject } from '@/helpers';

import st from './style.module.scss';
import { mockAstronomicalObject } from '@/mock';
import AstronomicalModelWindow from '../AstronomicalModelWindow/AstronomicalModelWindow';

const AstronomicalInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { current, setCurrent } = useContext(CurrentObjectContext);
  const [object, setObject] = useState<null | IAstronomicalObject>(null);

  useEffect(() => {
    if (current !== null)
      setObject(searchObject(current, mockAstronomicalObject));
  }, [current]);

  return (
    <Modal
      isOpen={current !== null}
      onClose={() => {
        if (setCurrent) setCurrent(null);
      }}
      isStopScroll={isOpen}>
      {object !== null && (
        <div className={st.body}>
          <div className={st.name}>{object.name}</div>
          {object.pathModel && (
            <div className={st.model}>
              <AstronomicalModelWindow
                pathModel={object.pathModel}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            </div>
          )}

          {object.description && (
            <>
              <div className={st.description_block}>
                <div className={st.heading}>Описание объекта</div>
                <div className={st.description}>
                  {object.description.paragraphs.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
              <div className={st.description_block}>
                <div className={st.heading}>Основные характеристики</div>
                <ul className={`${st.description} ${st.decription_list}`}>
                  {object.description.characteristics.map((item) => (
                    <li className={st.item} key={item.name}>
                      <span className={st.item_name}>{item.name}</span>
                      <span> — </span>
                      <span className={st.item_content}>{item.content}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      )}
    </Modal>
  );
};

export { AstronomicalInfo };
