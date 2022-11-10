import React from 'react';
import {useSelector} from "react-redux";

const Header = () => {
  const {
    rgbaValues
  } = useSelector((state) => state.figmaStyles)

    return (
        <header style={{background: rgbaValues.red, color: rgbaValues.green}}>
            Joulu kiihtyy
        </header>
    );
};

export default Header;