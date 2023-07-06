import { Button, Paper } from 'components';
import s from './TeacherForm.module.css';
import { useState } from 'react';

function TeacherForm({onSubmit}) {
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const state = [surname, name, middleName, phoneNumber, email, city];

  const canBeSubmitted = () => state.every(item => item.length > 0)


  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      "firstName": name,
      "lastName": surname,
      "patronymic": middleName,
      "phone": phoneNumber,
      "email": email,
      "city": city,
      "options": "Создание групп, редактировани профилей преподавателей"
    })
  }


  return (
    <Paper className={s.paper}>
      <h3 className={s.title}> Додати викладача</h3>
      <form className={s.form} onSubmit={handleOnSubmit}>
        <label className={s.label}>
          <input
            className={s.input}
            type="text"
            placeholder="Прізвище"
            onChange={e => setSurname(e.target.value)}
            value={surname}
          />
        </label>
        <label className={s.label}>
          <input
            className={s.input}
            type="text"
            placeholder="Ім'я"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </label>
        <label className={s.label}>
          <input
            className={s.input}
            type="text"
            placeholder="По-батькові"
            onChange={e => setMiddleName(e.target.value)}
            value={middleName}
          />
        </label>
        <label className={s.label}>
          <input
            className={s.input}
            type="text"
            placeholder="Телефон"
            onChange={e => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </label>
        <label className={s.label}>
          <input
            className={s.input}
            type="text"
            placeholder="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label className={s.label}>
          <input
            className={s.input}
            type="text"
            placeholder="Місто"
            onChange={e => setCity(e.target.value)}
            value={city}
          />
        </label>
        <Button
          type="submit"
          disabled={!canBeSubmitted()}
          name={'Запросити'}
          className={s.submitBtn}
        />
      </form>
    </Paper>
  );
}

export default TeacherForm;
