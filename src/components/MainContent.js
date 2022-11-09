import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchStyles} from '../store';

import Header from "./Header";
import Calendar from "./Calendar";

const MainContent = () => {
  const styles = useSelector((state) => state.figmaStyles)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStyles())
  }, [dispatch]);


  if(styles) {
    console.log(styles)
  }

  return (
      <div id='App'>
        <Header className="App-header"/>
        <Calendar/>
      </div>
  )
}

export default MainContent;