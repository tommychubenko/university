import React, { useState } from 'react';
import universityData from '../constans/univedsityData.json';
import * as Forms from '../constans/vars';
import Section from './Section/Section';
import GeneralCardList from './GeneralCardList/GeneralCardList';
import {
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { nanoid } from 'nanoid';
import DepartamentInfo from './DepartamentInfo/DepartamentInfo';
import { useDispatch, useSelector } from 'react-redux';
import { removeDepartament } from 'features/departaments/departamentsSlice';

function Departaments() {
  // const [departaments, setDepartaments] = useState(
  //   universityData?.departament?.map(({ name }) => ({
  //     text: name,
  //     relation: Forms.DEPARTAMENTS_FORM,
  //     id: nanoid(3),
  //   })) ?? []
  // );
  // const handleEditCard = () => {};

  const departaments = useSelector(state => state.departaments.departaments)

  const navigate = useNavigate();
 const dispatch = useDispatch()

  const handleOpenDetails = id => navigate(`/departaments/departament/${id}`);

  const handleDeleteCard = id => {
    dispatch(removeDepartament(id))
 
    //for Class Components
    // this.setState(ps => ({[relation : ps[relation].filter(el => el.text !== id)]}))

  };

 

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <Section title="Департаменти" position="right">
              <GeneralCardList
                list={departaments}
                onDeleteCard={handleDeleteCard}
                onOpenDetails={handleOpenDetails}
                withDetails
                // onEditCard={handleEditCard}
              />
            </Section>
          }
        />
        <Route
          path="departament/:departamentId"
          element={<DepartamentInfo departaments = { departaments} />}
        />
      </Routes>
      {/* {departamentid ? (
        <Outlet  />
      ) : (
        <Section title="Департаменти" position="right">
          <GeneralCardList
            list={departaments}
            onDeleteCard={handleDeleteCard}
            onOpenDetails={handleOpenDetails}
            withDetails

            // onEditCard={handleEditCard}
          />
        </Section>
      )} */}
    </>
  );
}

export default Departaments;
