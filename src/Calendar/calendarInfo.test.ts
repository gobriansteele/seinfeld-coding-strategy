import moment from 'moment';

import {
  convertApiResponseToCalendarArray,
  sortArrayOfCalendarDays,
  ICalendarDay
} from './calendarInfo';

const mockApiResponse = {
  results: [
    {
      username: 'brianalan',
      date: '2019-3-9',
      value: true
    },
    {
      username: 'brianalan',
      date: '2019-3-7',
      value: false
    },
    {
      username: 'brianalan',
      date: '2019-3-6',
      value: true
    },
    {
      username: 'brianalan',
      date: '2019-3-5',
      value: false
    },
    {
      username: 'brianalan',
      date: '2019-3-4',
      value: true
    }
  ]
};

const expectedResponse = [
  {
    date: '2019 March 9',
    wroteCode: true
  },
  {
    date: '2019 March 7',
    wroteCode: false
  },
  {
    date: '2019 March 6',
    wroteCode: true
  },
  {
    date: '2019 March 5',
    wroteCode: false
  },
  {
    date: '2019 March 4',
    wroteCode: true
  }
];

const unsortedArray: ICalendarDay[] = [
  { date: '2019 March 4', wroteCode: true, momentDay: moment('2019-03-04') },
  { date: '2019 March 8', wroteCode: true, momentDay: moment('2019-03-08') },
  { date: '2019 March 6', wroteCode: true, momentDay: moment('2019-03-06') }
];

const sortedArray: ICalendarDay[] = [
  { date: '2019 March 8', wroteCode: true, momentDay: moment('2019-03-08') },
  { date: '2019 March 6', wroteCode: true, momentDay: moment('2019-03-06') },
  { date: '2019 March 4', wroteCode: true, momentDay: moment('2019-03-04') }
];

test('Calendar Info is converted to the correct format', () => {
  const fnResults = convertApiResponseToCalendarArray(mockApiResponse.results);
  expect(fnResults).toMatchObject(expectedResponse);
});

test('sorting function sorts the array of days in the correct order', () => {
  const myResults = sortArrayOfCalendarDays(unsortedArray);
  expect(myResults).toEqual(sortedArray);
});
