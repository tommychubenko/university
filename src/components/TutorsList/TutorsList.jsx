import { Paper } from 'components';
import tutorsPhone from '../../assets/images/tutors-phone.svg';
import tutorsEmail from '../../assets/images/tutors-email.svg';
import tutorsLocation from '../../assets/images/tutors-location.svg';

import s from './TutorsList.module.css';

const TutorList = ({ tutors }) => {
  return tutors.map(tutor => <TutorItem key={tutor.phone} {...tutor} />);
};

const TutorItem = ({
  firstName,
  lastName,
  patronymic,
  phone,
  email,
  city,
  options,
}) => {
  return (
    <Paper className={s.tutor}>
      <div className={s.tutorColumn}>
        <span>{firstName}</span>
        <span>{lastName}</span>
        <span>{patronymic}</span>
      </div>
      <div className={s.tutorColumn}>
        <span>
          <img src={tutorsPhone} alt="Phone icon" />
          {phone}
        </span>
        <span>
          <img src={tutorsEmail} alt="Email icon" />
          {email}
        </span>
        <span>
          <img src={tutorsLocation} alt="Location icon" />
          {city}
        </span>
      </div>
      <div className={s.tutorColumn}>
        <p>{options}</p>
      </div>
    </Paper>
  );
};

export default TutorList;
