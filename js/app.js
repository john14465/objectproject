// var monthSection = document.getElementById('current-month');
var nextSection = document.getElementById('next-month');
var d = new Date();
var currentMonth = d.getMonth();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMText = months[currentMonth];
var nextMText = months[currentMonth + 1];

document.getElementById('current').innerHTML = '<h2> Fuck you</h2>';
