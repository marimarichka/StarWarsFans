import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CharactersItemApiType} from '../../shared/types';

interface ISelectedFanState {
  selectedFans: CharactersItemApiType[];
}

const initialState: ISelectedFanState = {
  selectedFans: [],
};

export const fansSlice = createSlice({
  name: 'selectedFan',
  initialState,
  reducers: {
    addSelectedFan: (state, action: PayloadAction<CharactersItemApiType>) => {
      state.selectedFans.push(action.payload);
    },
    deleteSelectedFan: (state, action: PayloadAction<string>) => {
      state.selectedFans = state.selectedFans.filter(
        ({url}) => url !== action.payload,
      );
    },
    clearSelectedFan: state => {
      state.selectedFans = [];
    },
  },
});

export const {addSelectedFan, deleteSelectedFan, clearSelectedFan} =
  fansSlice.actions;

export default fansSlice.reducer;
