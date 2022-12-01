import {getYear, isBefore, isSameDay} from 'date-fns';

export const checkDate = (day) => {
  const today = Date.now();
  const thisYear = getYear( today )

  const clickedDate = new Date(thisYear, 11, day);
  const formatToday = new Date(today);

  return isSameDay(formatToday, clickedDate) || isBefore(clickedDate, formatToday);
}