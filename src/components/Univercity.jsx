import React from 'react';
import { 
  Paper,
  TutorsList,
  UniversityCard,
  Section,
  Button,
  GeneralCardList,
  TeacherForm,
  WidgetForm,
} from 'components';

import * as Forms from '../constans/vars';

import universityData from '../constans/univedsityData.json';
import titleTeachers from '../assets/images/titleTeachers.png';
import citiesPinImg from '../assets/images/titlePin.png';
import facultiesImg from '../assets/images/titleFaculties.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { nanoid } from 'nanoid';
import { onAddTeacher } from 'features/tutors/tutorsSlice';
import { onAddCity, removeCity } from 'features/cities/citiesSlice';
import { onAddDepartament, removeDepartament } from 'features/departaments/departamentsSlice';

function Univercity() {
  // const [cities, setCity] = useState(
  //   universityData?.cities?.map(city => ({ text: city, relation: 'cities' })) ??
  //     []
  // );
  // const [departaments, setDepartaments] = useState(
  //   universityData?.departament?.map(({ name }) => ({
  //     text: name,
  //     relation: 'departaments',
  //     id: nanoid(3)
  //   })) ?? []
  // );
  // const [tutors, setTutors] = useState(universityData?.tutors ?? []);

  const tutors = useSelector(state => state.tutors.tutors)
  const cities = useSelector(state => state.cities.cities)
  const departaments = useSelector(state => state.departaments.departaments)

  const [showForm, setShowForm] = useState(null);

  const dispatch = useDispatch(); 

  const addTeacher = teacher => {
    dispatch(onAddTeacher(teacher))
    // setTutors(ps => [...ps, teacher]);
  };

  const addCity = city => {

    dispatch(onAddCity(city))
    // if (!cities.some(el => el.text.toLowerCase() === city.toLowerCase())) {
    //   setCity(ps => [...ps, { text: city, relation: 'cities' }]);
    // } else {
    //   alert('Таке місто вже є в списку');
    // }
  };
  const addDepartament = dep => {

    dispatch(onAddDepartament(dep))
    // if (!departaments.some(el => el.text.toLowerCase() === dep.toLowerCase())) {
    //   setDepartaments(ps => [...ps, { text: dep, relation: 'departaments' }]);
    // } else {
    //   alert('Такий факультет вже є в списку');
    // }
  };

  const handleShowForm = formname => {
    setShowForm(ps => (ps === formname ? null : formname));
  };

  const handleEditCard = () => {};

  const handleDeleteCard = (id, relation) => {
    relation === 'cities' &&
    dispatch(removeCity(id))
      // setCity(ps => ps.filter(element => element.text !== id));
    relation === 'departaments' &&
     dispatch(removeDepartament(id));

    //for Class Components
    // this.setState(ps => ({[relation : ps[relation].filter(el => el.text !== id)]}))
  };
  return (
    <>
      <Section title="Информация о университете" position="right">
        <div className="universityContainer">
          <UniversityCard universityName={universityData.name} />
          <Paper>
            <p className="universityDescription">
              {universityData.description}
            </p>
          </Paper>
        </div>
      </Section>
      <Section title="Викладачі" img={titleTeachers}>
        <TutorsList tutors={tutors} />
        {showForm === Forms.TEACHER_FORM && (
          <TeacherForm onSubmit={addTeacher} />
        )}
        <Button
          name={
            showForm === Forms.TEACHER_FORM
              ? 'Закрити форму'
              : 'Додати викладача'
          }
          onClick={() => handleShowForm(Forms.TEACHER_FORM)}
        />
      </Section>
      <Section title="Міста" img={citiesPinImg}>
        <GeneralCardList
          list={cities}
          onDeleteCard={handleDeleteCard}
          onEditCard={handleEditCard}
        />
        {showForm === Forms.CITY_FORM && (
          <WidgetForm
            title={'Додати місто'}
            label={'Місто*'}
            onSubmit={addCity}
          />
        )}
        <Button
          name={showForm === Forms.CITY_FORM ? 'Закрити форму' : 'Додати місто'}
          onClick={() => handleShowForm(Forms.CITY_FORM)}
        />
      </Section>
      <Section title="Факультети" img={facultiesImg}>
        <GeneralCardList
          list={departaments}
          onDeleteCard={handleDeleteCard}
          onEditCard={handleEditCard}
        />
        {showForm === Forms.DEPARTAMENTS_FORM && (
          <WidgetForm
            title={'Додати філіал'}
            label={'Філіал*'}
            onSubmit={addDepartament}
          />
        )}
        <Button
          name={
            showForm === Forms.DEPARTAMENTS_FORM
              ? 'Закрити форму'
              : 'Додати Факультет'
          }
          onClick={() => handleShowForm(Forms.DEPARTAMENTS_FORM)}
        />
      </Section>
    </>
  );
}

export default Univercity;
