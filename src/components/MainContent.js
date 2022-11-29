import {useEffect, useState} from "react";
import Header from "./Header";
import Calendar from "./Calendar";

const MainContent = () => {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(()=> {
    let loadingTimer = setTimeout( () => setShowLoader(false), 1000 )
    return () => {
      clearTimeout(loadingTimer)
    }
  }, [])

  return (
    !showLoader ? 
    <div id='App'>
      <Header className="App-header" />
      <Calendar/>
    </div>
    :
    <div className="loader"/>
  )
}

export default MainContent;