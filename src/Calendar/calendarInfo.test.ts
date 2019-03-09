import { convertApiResponseToCalendarArray } from './calendarInfo';

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

test('Calendar Info is converted to the correct format', () => {
  const fnResults = convertApiResponseToCalendarArray(mockApiResponse.results);
  expect(fnResults).toMatchObject(expectedResponse);
});
