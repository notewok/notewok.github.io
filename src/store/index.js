import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getColorById, getFigmaObject} from "../figmaAPI";

const initialState = {
  objectStatus: null,
  colorStatus: null,
  colorSettingStatus: null,
  figmaObject: [],
  figmaColors: [],
  rgbaValues: {},
  counter: null,
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
    setRGBAValues: (state, action) => {
      state.counter++;
      state.rgbaValues = action.payload
    },
    setLoadingStatus: (state) => {
      if( state.counter === state.figmaObject.length ) {
        state.colorSettingStatus = "ready"
        state.counter = null
      }
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

export const { setRGBAValues, setLoadingStatus } = figmaSlice.actions;

export default figmaSlice.reducer;
