import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  modalData: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,

  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.modalData = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.modalData = '';
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModalOpen = state => state.modal.isOpen;
export const selectModalData = state => state.modal.modalData;
export const modalReducer = modalSlice.reducer;
