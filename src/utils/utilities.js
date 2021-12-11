const month = [
  'Jan',
  'Feb',
  'Mar',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

const fullDay = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const DateString = (dateString) => {
  const myDate = new Date(dateString);
  if (myDate.getDate().toString() === new Date().getDate().toString()) {
    return 'Today';
  }
  if (
    myDate.getDate().toString() ===
    (Number(new Date().getDate()) - 1).toString()
  ) {
    return 'Yesterday';
  }
  if (
    myDate.getDate().toString() ===
    (Number(new Date().getDate()) - 2).toString()
  ) {
    return fullDay[myDate.getDay()];
  }
  if (
    myDate.getDate().toString() ===
    (Number(new Date().getDate()) - 3).toString()
  ) {
    return fullDay[myDate.getDay()];
  }
  if (
    myDate.getDate().toString() ===
    (Number(new Date().getDate()) - 4).toString()
  ) {
    return fullDay[myDate.getDay()];
  }
  if (
    myDate.getDate().toString() ===
    (Number(new Date().getDate()) - 5).toString()
  ) {
    return fullDay[myDate.getDay()];
  }
  if (
    myDate.getDate().toString() ===
    (Number(new Date().getDate()) - 6).toString()
  ) {
    return fullDay[myDate.getDay()];
  } else {
    return (
      day[myDate.getDay()] +
      ', ' +
      myDate.getDate() +
      month[myDate.getMonth()] +
      ', ' +
      myDate.getFullYear()
    );
  }
};

export const SetLocation = (location, options) => {
  if (location) {
    const filteredLocation = options.filter((value) => {
      return value.value.toLowerCase() === location.toLowerCase();
    });
    return filteredLocation;
  }
};

export const SetCategories = (categories, options) => {
  let _categories = [];
  categories.map((category, index) => {
    let filtered = options.filter((value) => {
      return value.label.toLowerCase() === category.toLowerCase();
    });
    return _categories.push(filtered[0]);
  });
  return _categories;
};
