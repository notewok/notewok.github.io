import React, { createContext, useState } from 'react';
import {checkDate} from '../utils/dayUtil';

export const CalendarContext = createContext();

export const CalendarProvider = ({children}) => {
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const [isSoosooVisible, setIsSoosooVisible] = useState(false);

    const onDayClick = (event) => {
        setIsSoosooVisible(false);
        if(checkDate(event.target.innerHTML)) {
            setIsVideoVisible( isVideoVisible => ({
                ...isVideoVisible,
                [event.target.innerHTML]: !isVideoVisible[event.target.innerHTML]

            }))
        } else if(!isSoosooVisible) {
            setIsSoosooVisible( isSoosooVisible => ({
                ...isSoosooVisible,
                [event.target.innerHTML]: !isSoosooVisible[event.target.innerHTML]

            }))
        }
    }

    return (
        <CalendarContext.Provider
            value={{
                isVideoVisible,
                setIsVideoVisible,
                isSoosooVisible, 
                setIsSoosooVisible,
                onDayClick
            }}>
            {children}
        </CalendarContext.Provider>
    )
};