import moment from 'moment';

interface ICalendarApiResponse {
  username: string;
  date: string;
  value: boolean;
}

export interface ICalendarDay {
  date: string;
  wroteCode: boolean;
  momentDay: moment.Moment;
}

enum DayOfWeek {
  Sunday = 'Sunday',
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday'
}

enum Month {
  January = 'January',
  February = 'February',
  March = 'March',
  April = 'April',
  May = 'May',
  June = 'June',
  July = 'July',
  August = 'August',
  September = 'September',
  October = 'October',
  November = 'November',
  December = 'December'
}

export const convertApiResponseToCalendarArray = (
  serviceResponse: ICalendarApiResponse[]
): ICalendarDay[] | undefined => {
  try {
    const calendarDayArray = serviceResponse.map(item => {
      const dateFormat = 'YYYY-MM-D'; // Soley used to get rid of moment deprecation warnings
      const momentDay = moment(item.date, dateFormat);
      const stringDay = momentDay.format('YYYY MMMM D');
      const calendarDay: ICalendarDay = {
        date: stringDay,
        wroteCode: item.value,
        momentDay
      };
      return calendarDay;
    });
    return calendarDayArray;
  } catch (e) {
    console.log(e);
  }
};
