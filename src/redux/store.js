import { configureStore } from '@reduxjs/toolkit';
import citiesSlice from 'features/cities/citiesSlice';
import departamentsSlice from 'features/departaments/departamentsSlice';
import tutorsSlice from 'features/tutors/tutorsSlice';

export const store = configureStore({
  reducer: {
    cities: citiesSlice,
    departaments: departamentsSlice,
    tutors: tutorsSlice,
  },
});
