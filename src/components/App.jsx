// rfce
import {
  Main,
  SideBar,
  Paper,
  TutorsList,
  UniversityCard,
  Section,
  Button,
  GeneralCardList,
  TeacherForm,
  WidgetForm,
} from 'components';

import universityData from '../constans/univedsityData.json';
import titleTeachers from '../assets/images/titleTeachers.png';
import citiesPinImg from '../assets/images/titlePin.png';
import facultiesImg from '../assets/images/titleFaculties.png';
import { useState } from 'react';

export const App = () => {
  const [cities, setCity] = useState(
    universityData?.cities?.map(city => ({ text: city })) ?? []
  );
  const [departaments, setDepartaments] = useState(
    universityData?.departament?.map(({ name }) => ({ text: name })) ?? []
  );
  const [tutors, setTutors] = useState(universityData?.tutors ?? []);

  const onOpenDropMenu = () => console.log(111);

  const addTeacher = (teacher) => {
    setTutors(ps => [...ps, teacher])
    console.log(teacher)
  }

  const addCity = (city) => setCity(ps => [...ps, {text:city}])
  const addDepartament = (dep) => setDepartaments(ps => [...ps, {text:dep}])

  return (
    <div className="app">
      <SideBar />
      <Main>
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
          <TeacherForm  onSubmit={addTeacher} />
          <Button name="Додати викладача" />
        </Section>
        <Section title="Міста" img={citiesPinImg}>
          <GeneralCardList list={cities} onDropMenu={onOpenDropMenu} />
          <WidgetForm title={'Додати місто'} label={'Місто*'} onSubmit = {addCity}/>
          <Button name="Додати місто" onClick={() => {}} />
        </Section>
        <Section title="Факультети" img={facultiesImg}>
          <GeneralCardList list={departaments} openDropMenu={onOpenDropMenu} />
          <WidgetForm title={'Додати філіал'} label={'Філіал*'} onSubmit = {addDepartament}/>
          <Button name="Додати Факультет" onClick={() => {}} />
        </Section>
      </Main>
    </div>
  );
};
