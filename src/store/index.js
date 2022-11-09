import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getFigmaObject} from "../figmaAPI";

const initialState = {
  status: null,
  figmaObject: {},
} ;

export const fetchStyles = createAsyncThunk(
    'figma/fetchFigmaFileStyles',
    async ({} , {}) => {
      const response = await getFigmaObject()
      return response.meta
    }
)

const figmaSlice = createSlice({
  name: "figmaStyle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStyles.fulfilled, (state, action) => {
      state.status = "fulfilled"
      state.figmaObject = action.payload.styles;
    })
  }
})

export default figmaSlice.reducer;
