var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert', // what should show up on the button to open/close dropdown
  items: [
    'Apple Pie',
    'Peaches and Cream',
    'Berries and Ice Cream'
  ]
};

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));
