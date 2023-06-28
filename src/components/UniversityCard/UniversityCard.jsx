import universityMockIcon from '../../assets/images/university-logo.png';
import universityDeleteIcon from '../../assets/images/university-delete.svg';
import universityEditIcon from '../../assets/images/university-edit.svg';

import s from './UniversityCard.module.css';
import { Paper } from 'components';

const UniversityCard = ({ universityName, onEdit, onDelete }) => {
  return (
    <Paper>
      <div className={s.container}>
        <img className={s.mockIcon} src={universityMockIcon} alt={universityName} />
        <span className={s.text}>Університет</span>
        <h3 className={s.name}>{universityName}</h3>
        <div className={s.thumb}>
          <button onClick={onEdit} className={s.button}><img src={universityEditIcon} alt="Редагувати" /></button>
          <button onClick={onDelete} className={s.button}><img src={universityDeleteIcon} alt="Видалити" /></button>
        </div>
      </div>
    </Paper>
  );
};

export default UniversityCard;
