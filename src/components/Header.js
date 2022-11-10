import React from 'react';
import {useSelector} from "react-redux";

const Header = () => {
  const {
    rgbaValues
  } = useSelector((state) => state.figmaStyles)

    return (
        <header style={{background: rgbaValues.red}}>
          <div className={"text-container"}>
            <h1 style={{color: rgbaValues.green}}>
              Joulu kiihtyy
            </h1>
          </div>
        </header>
    );
};

export default Header;