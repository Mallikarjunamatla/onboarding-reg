import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchCount } from "./registerAPI";

export interface RegisterState {
  individual: {};
  business: {};
  selectType:
    | "accountType"
    | "viewInfo"
    | "residency"
    | "individualForm"
    | "BVN";
  preType: "accountType" | "viewInfo" | "residency" | "individualForm" | "BVN";
  viewInfo: {};
  accountSelected: "business" | "individual",
  backAnim: boolean,
}

const initialState: RegisterState = {
  individual: {},
  business: {},
  selectType: "accountType",
  preType: "accountType",
  viewInfo: {},
  accountSelected: "individual",
  backAnim: false,
};

export const incrementAsync = createAsyncThunk(
  "register/fetchCount",
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    individualInfo: (state, action) => {
      state.individual = { ...state.individual, ...action.payload };
    },
    businessInfo: (state, action) => {
      state.business = { ...state.business, ...action.payload };
    },
    formType: (state, action) => {
      state.backAnim = action.payload.backAnim ?? state.backAnim;
      state.selectType = action.payload.selectType ?? state.selectType;
      state.preType = action.payload.preType ?? state.preType;
      state.accountSelected = action.payload.accountSelected ?? state.accountSelected;
      state.business = {
        ...state.business,
        ...(action.payload.business ?? state.business),
      };
      state.individual = {
        ...state.individual,
        ...(action.payload.individual ?? state.individual),
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {})
      .addCase(incrementAsync.fulfilled, (state, action) => {})
      .addCase(incrementAsync.rejected, (state) => {});
  },
});

export const { individualInfo, businessInfo, formType } = registerSlice.actions;

export const selectRegister = (state: RootState) => state.register;

export default registerSlice.reducer;
