import {getMonth, getYear, isBefore, isToday} from 'date-fns';

export const checkDate = (day) => {
  const today = Date.now();
  const thisMonth = getMonth( today )
  const thisYear = getYear( today )

  const clickedDate = new Date(thisYear, thisMonth, day);

  if( isToday(clickedDate) ) {
    return true
  } else return isBefore(clickedDate, today);
}