import React from 'react';
import Video from "./Video";
import {useSelector} from "react-redux";

const Calendar = () => {
    const {
        rgbaValues
    } = useSelector((state) => state.figmaStyles)

    const getCalendar = () => {
        let days = []
        for(let i = 1; i <= 24; i++)  {
            days.push(<Video key={i} index={i}/>);
        }
        return days;
    }

    return (
        <div className='container' style={{background: rgbaValues.lightGreen, color: rgbaValues.lightRed}}>
            <div className='calendar'>
                {getCalendar()}
            </div>
        </div>

    );
};

export default Calendar;