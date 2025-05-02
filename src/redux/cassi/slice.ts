import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserProps {
  name: string;
  phone: number;
  email: string;
}

export interface CassiStateProps {
  user: UserProps;
  confirmOpening: boolean;
  recognizeNIP: boolean;
  recognizeInterlocutor: boolean | null;
}

export const initialState = {
  user: {
    name: "Dyego T. Lima",
    email: "dyegotavares@gmail.com",
    phone: 61981122323,
  },
  confirmOpening: false,
  recognizeNIP: false,
  recognizeInterlocutor: null,
} as CassiStateProps;

const cassi = createSlice({
  name: "cassiState",
  initialState: initialState,
  reducers: {
    setConfirmOpening: (state, action: PayloadAction<boolean>) => {
      state.confirmOpening = action.payload;
    },

    setRecognizeNIP: (state, action: PayloadAction<boolean>) => {
      state.recognizeNIP = action.payload;
    },

    setRecognizeInterlocutor: (state, action: PayloadAction<boolean>) => {
      state.recognizeInterlocutor = action.payload;
    },

    setUpdateUser: (
      state,
      action: PayloadAction<{ phone: number; email: string }>
    ) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },
});

export const cassiActions = cassi.actions;

export default cassi.reducer;
