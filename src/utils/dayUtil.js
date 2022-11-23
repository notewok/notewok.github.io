import {getYear, isBefore, isToday} from 'date-fns';

export const checkDate = (day) => {
  const today = Date.now();
  const thisYear = getYear( today )

  const clickedDate = new Date(thisYear, 12, day);

  if( isToday(clickedDate) ) {
    return true
  } else return isBefore(clickedDate, today);
}