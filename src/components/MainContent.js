import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchStyles, fetchColors, setRGBAValues, setLoadingStatus} from '../store';
import {generateRGBA} from '../utils/rgbaGenerator';
import {Circles} from "react-loader-spinner";

import Header from "./Header";
import Calendar from "./Calendar";

const MainContent = () => {
  const {
    objectStatus,
    colorStatus,
    colorSettingStatus,
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
    if( figmaColors && colorStatus === "fulfilled" )  {
      dispatch(setRGBAValues(generateRGBA(figmaColors)));
    }
    dispatch(setLoadingStatus());
  }, [colorStatus, figmaColors, dispatch] )

  return (
      (colorSettingStatus === "ready") ?
          <div id='App'>
            <Header className="App-header" />
            <Calendar/>
          </div>
          :
      <Circles
          height="80"
          width="80"
          color="rgb(0, 99, 57)"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass="loader-container"
          visible={true}
      />

  )
}

export default MainContent;