import { createSlice } from '@reduxjs/toolkit';
import universityData from '../../constans/univedsityData.json';
import { nanoid } from 'nanoid';

const initialState = {
  tutors: universityData?.tutors ?? [],
};

export const tutorsSlice = createSlice({
  name: 'tutors',
  initialState,
  reducers: {
    onAddTeacher: (state, action) => {
      state.tutors = [...state.tutors, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { onAddTeacher } = tutorsSlice.actions;
export default tutorsSlice.reducer;
