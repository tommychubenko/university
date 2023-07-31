import { createSlice } from '@reduxjs/toolkit';
import universityData from '../../constans/univedsityData.json';
import { nanoid } from 'nanoid';

const initialState = {
  cities:
    universityData?.cities?.map(city => ({ text: city, relation: 'cities', id : nanoid(3) })) ??
    [],
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    onAddCity: (state, action) => {
      if (
        !state.cities.some(
          el => el.text.toLowerCase() === action.payload.toLowerCase()
        )
      ) {
        state.cities = [
          ...state.cities,
          { text: action.payload, relation: 'cities' },
        ];
      } else {
        alert('Таке місто вже є в списку');
      }
    },
    removeCity: (state, action) => {
        state.cities = state.cities.filter(el => 
          el.id !== action.payload
        );
        //    console.log(state.departaments.filter(state.departaments.id !== action.payload))
      },
  },
});

// Action creators are generated for each case reducer function
export const { onAddCity, removeCity } = citiesSlice.actions;
export default citiesSlice.reducer;
