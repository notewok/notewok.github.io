import {useContext, useEffect, useState} from "react";
import { isEmpty } from 'lodash';
import Header from "./Header";
import Calendar from "./Calendar";
import { CalendarContext } from "../context/CalendarContext";

const MainContent = () => {
  const {
      isVideoVisible, 
      isSoosooVisible
  } = useContext(CalendarContext);
  const [showLoader, setShowLoader] = useState(true)

  useEffect(()=> {
    let loadingTimer = setTimeout( () => setShowLoader(false), 1000 )
    return () => {
      clearTimeout(loadingTimer)
    }
  }, [])

  return (
      !showLoader ? 
      <div 
        className='container' 
        modal-open={`${!isEmpty(isVideoVisible) || !isEmpty(isSoosooVisible)}`}>
        <Header className="App-header" />
        <Calendar/>
      </div>
      :
      <div className="loader"/>
  )
}

export default MainContent;