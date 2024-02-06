import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bold: false,
  italic: false,
  underlined: false,
  textColor: '#000',
  highlightColor: '#fff',
  fontSize: 11,
  align: {description: 'Left align', icon: 'FormatAlignLeft'}
};

const heroPageSlice = createSlice({
  name: 'heroPage',
  initialState,
  reducers: {
    setFormat: (state, action) => {
      return { ...state, ...action.payload };
    },
    getFormat: (state) => {
      return { ...state };
    },
  },
});

export const { setFormat, getFormat } = heroPageSlice.actions;
export default heroPageSlice.reducer;
