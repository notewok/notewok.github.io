import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getColorById, getFigmaObject} from "../figmaAPI";

const initialState = {
  objectStatus: null,
  colorStatus: null,
  figmaObject: [],
  figmaColors: [],
  rgbaValues: {},
};

export const fetchStyles = createAsyncThunk(
    'figma/fetchFigmaFileStyles',
    // eslint-disable-next-line
    async (arg , thunkAPI) => {
      const response = await getFigmaObject();
      return response.meta
    }
)

export const fetchColors = createAsyncThunk(
    'figma/fetchFigmaFileStyles/colors',
    // eslint-disable-next-line
    async (colorNodeId, thunkAPI) => {
      let result = await getColorById(colorNodeId);
      return {result, colorNodeId};
    }
)

const figmaSlice = createSlice({
  name: "figmaStyle",
  initialState,
  reducers: {
    setColorValues: (state, action) => {
      state.figmaColors = action.payload
    },
    setRGBAValues: (state, action) => {
      state.rgbaValues = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStyles.fulfilled, (state, action) => {
      state.objectStatus = "fulfilled"
      state.figmaObject = action.payload.styles.map( styleNode => {
        return { colorNodeId: styleNode["node_id"]}
      })
    })
    builder.addCase(fetchColors.fulfilled, (state, action) => {
      state.colorStatus = "fulfilled";
      state.figmaColors = {...state.figmaColors,
        [action.payload.colorNodeId]: action.payload.result.nodes[action.payload.colorNodeId].document};
    })
  }
})

export const { setRGBAValues, setColorValues } = figmaSlice.actions;

export default figmaSlice.reducer;
