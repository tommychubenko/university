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
} from 'components';

import universityData from '../constans/univedsityData.json';
import titleTeachers from '../assets/images/titleTeachers.png';
import citiesPinImg from '../assets/images/titlePin.png';
import facultiesImg from '../assets/images/titleFaculties.png';
import { useState } from 'react';

export const App = () => {
  const [cities] = useState(
    universityData?.cities?.map(city => ({ text: city })) ?? []
  );
  const [departaments] = useState(
    universityData?.departament?.map(({ name }) => ({ text: name })) ?? []
  );
  const [tutors] = useState(universityData?.tutors ?? []);

  const onOpenDropMenu = () => console.log(111);

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
          <TutorsList tutors={universityData.tutors} />
          <Button name="Додати викладача" />
        </Section>
        <Section title="Міста" img={citiesPinImg}>
          <GeneralCardList list={cities} onDropMenu={onOpenDropMenu} />

          <Button name="Додати місто" onClick={()=>{}} />
        </Section>
        <Section title="Факультети" img={facultiesImg}>
          <GeneralCardList list={departaments} openDropMenu={onOpenDropMenu} />

          <Button name="Додати Факультет" onClick={()=>{}}/>
        </Section>
      </Main>
    </div>
  );
};
