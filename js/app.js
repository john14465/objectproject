// Events

var events = [{
    "month": "10",
    day: 16,
    year: 2017,
    title: "Live Performance By Jordan Tydings",
    description: "If you missed Jordan Tydings the first time, here's another chance to catch a great performer! Sit back, relax, and enjoy a nice evening at Vallensons'! We open at noon. Twisted Catfish food truck will be serving from 2-8pm. Cheers!",
    link: "https://www.facebook.com/events/163168234237589/?acontext=%7B%22source%22%3A5%2C%22page_id_source%22%3A1118451838176881%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%7B%5C%22page_id%5C%22%3A1118451838176881%2C%5C%22tour_id%5C%22%3Anull%7D%22%7D]%2C%22has_source%22%3Atrue%7D",
    highlight: "false"
},
{
    month: 11,
    day: 8,
    year: 2017,
    title: "Live Performance By Jordan Tydings",
    description: "If you missed Jordan Tydings the first time, here's another chance to catch a great performer! Sit back, relax, and enjoy a nice evening at Vallensons'! We open at noon. Twisted Catfish food truck will be serving from 2-8pm. Cheers!",
    link: "https://www.facebook.com/events/163168234237589/?acontext=%7B%22source%22%3A5%2C%22page_id_source%22%3A1118451838176881%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%7B%5C%22page_id%5C%22%3A1118451838176881%2C%5C%22tour_id%5C%22%3Anull%7D%22%7D]%2C%22has_source%22%3Atrue%7D",
    highlight: "false"
}];

// arrays
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var upcoming = [];


// variables
var d = new Date();
var currentMonth = d.getMonth();
var currentDay = d.getDate();
var currentMText = months[currentMonth];
var nextMText = months[currentMonth + 1];

// contruct arrays

var currentEvents = events.filter(function(event){
    return event.month == currentMonth + 1;
});

var nextevents = events.filter(function(event){
    return event.month == currentMonth + 2;
});

var upcomingArr = Array.prototype.push.apply(currentEvents,nextevents);
// function current() {
//     for (var i = 0; i <= events.length; i++) {
//         if (events[i].month == currentMonth + 1) {
//             console.log("Sucess");
//         }
//     }
// }

// current();

$('#currentmonth').text(currentMText);
$('#nextmonth').text(nextMText);



// for (var i = 0; i <= events.length; i++){
//     if (events[i].month == currentMonth + 1) {
//         var currentEvents = 
//         '<div class="date">'+
//             '<h3>' + currentMText + ' ' + events[i].day + ', ' + events[i].year + '</h3>' +
//             '<p>' + events[i].title + '</p>' +
//             '<p>' + events[i].description + '</p>' +
//             '<a href="'+ events[i].link + '" class="btn btnred">More Details</a>' + 
//         '</div>';
//         $('#currentevents').append(currentEvents);
//     } else if (events[i].month == currentMonth + 2) {
//         var nextEvents = 
//         '<div class="date">'+
//             '<h3>' + nextMText + ' ' + events[i].day + ', ' + events[i].year + '</h3>' +
//             '<p>' + events[i].title + '</p>' +
//             '<p>' + events[i].description + '</p>' +
//             '<a href="'+ events[i].link + '" class="btn btnred">More Details</a>' + 
//         '</div>';
//         $('#nextevents').append(nextEvents);
//     } else if (events[i].month == currentMonth + 1 && events[i].day >= currentDay || events[i].month == currentmonth + 2 && events[i].day <= currentDay) {
//         var upcoming = '<h3>' + months[events.month - 1] + ' ' + events.day + '</h3>' +
//         '<p>' + events.title + '</p>';
//         $('#upcoming').append(upcoming);
//     }
    
// }
