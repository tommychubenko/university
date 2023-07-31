import { createSlice } from '@reduxjs/toolkit';
import universityData from '../../constans/univedsityData.json';
import { nanoid } from 'nanoid';

const initialState = {
  departaments:
    universityData?.departament?.map(({ name }) => ({
      text: name,
      relation: 'departaments',
      id: nanoid(3),
    })) ?? [],
};

export const departamentsSlice = createSlice({
  name: 'departaments',
  initialState,
  reducers: {
    onAddDepartament: (state, action) => {
      if (
        !state.departaments.some(
          el => el.text.toLowerCase() === action.payload.toLowerCase()
        )
      ) {
        state.departaments = [
          ...state.departaments,
          { text: action.payload, relation: 'departaments' },
        ];
      } else {
        alert('Такий факультет вже є в списку');
      }
    },
    removeDepartament: (state, action) => {
      state.departaments = state.departaments.filter(el => 
        el.id !== action.payload
      );
      //    console.log(state.departaments.filter(state.departaments.id !== action.payload))
    },
  },
});

// Action creators are generated for each case reducer function
export const { onAddDepartament, removeDepartament } =
  departamentsSlice.actions;
export default departamentsSlice.reducer;
