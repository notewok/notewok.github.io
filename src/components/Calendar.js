import React from 'react';
import Video from "./Video";

const Calendar = () => {
    const getCalendar = () => {
        let days = []
        for(let i = 1; i <= 24; i++)  {
            days.push(<Video key={i} index={i}/>);
        }
        return days;
    }

    return (
        <div className='container'>
            <div className='calendar'>
                {getCalendar()}
            </div>
        </div>

    );
};

export default Calendar;