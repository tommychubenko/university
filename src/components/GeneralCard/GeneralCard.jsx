import { Paper } from 'components';
import PropTypes from 'prop-types';
import s from './GeneralCard.module.css';
import dotsImg from '../../assets/images/dots.svg';
import { ReactComponent as OpenDropMenuEdit } from '../../assets/images/opendrop-menu-edit.svg';
import { ReactComponent as OpenDropMenuDelete } from '../../assets/images/opendrop-menu-delete.svg';

import { useCallback, useEffect, useState } from 'react';

const GeneralCard = ({ text, id, onDeleteCard, onEditCard, relation, onOpenDetails, withDetails = false }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => setIsOpenMenu(ps => !ps);

  const handleKeyDown = useCallback(e => {
    if (e.key === 'Escape') {
      setIsOpenMenu(false);
    }
  }, []);

  useEffect(() => {
    if (isOpenMenu) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpenMenu, handleKeyDown]);

  // const handleKeyDown = () =>

  return (
    <Paper className={s.container}>
      <p className={s.text}> {text}</p>
      <button className={s.btn_drop} onClick={toggleMenu}>
        <img src={dotsImg} className={s.btn_icon} alt="dots" />
      </button>
      {isOpenMenu && (
        <div className={s.menuModal} data-modal>
         {withDetails ? <button
            data-modal-btn
            type="button"
            className={s.menuModalItem}
            onClick={() => onOpenDetails(id)}
          >
            <OpenDropMenuEdit className={s.menuModalIcon} />
            Подробиці
          </button> : <button
            data-modal-btn
            type="button"
            className={s.menuModalItem}
            onClick={() => onEditCard(id, relation)}
          >
            <OpenDropMenuEdit className={s.menuModalIcon} />
            Редагувати
          </button>}
          <button
            type="button"
            className={s.menuModalItem}
            onClick={() => onDeleteCard(id, relation)}
          >
            <OpenDropMenuDelete className={s.menuModalIcon} />
            Видалити
          </button>
        </div>
      )}
    </Paper>
  );
};

GeneralCard.propTypes = {
  text: PropTypes.string.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onEditcard: PropTypes.func.isRequired,
};

export default GeneralCard;
