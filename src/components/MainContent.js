import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchStyles, fetchColors, setRGBAValues} from '../store';
import {generateRGBA} from '../utils/rgbaGenerator';

import Header from "./Header";
import Calendar from "./Calendar";

const MainContent = () => {
  const {
    objectStatus,
    colorStatus,
    figmaObject,
    figmaColors
  } = useSelector((state) => state.figmaStyles)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStyles())
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if(objectStatus === 'fulfilled') {
      figmaObject.map(nodeId => {
            return dispatch(fetchColors(nodeId.colorNodeId))
      })
    }
  }, [objectStatus, figmaObject, dispatch]);

  useEffect( () => {
    if( figmaColors && colorStatus === "fulfilled" )
      dispatch(setRGBAValues(generateRGBA(figmaColors)))
  }, [colorStatus, figmaColors, dispatch] )

  return (
      <div id='App'>
        <Header className="App-header" />
        <Calendar/>
      </div>
  )
}

export default MainContent;