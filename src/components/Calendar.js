import React from 'react';
import Video from "./Video";

const Calendar = () => {
    const getCalendar = () => {
        let days = []
        for(let i = 1; i <= 24; i++)  {
            days.push(<Video index={i}/>);
        }
        return days;
    }
    console.log('getCalendar', getCalendar())

    return (
        <div className='container'>
            <div className='calendar'>
                {getCalendar()}
            </div>
        </div>

    );
};

export default Calendar;