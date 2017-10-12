// Events

// var events = [{
//     month: "10",
//     day: 8,
//     year: 2017,
//     title: "Live Performance By Jordan Tydings",
//     description: "If you missed Jordan Tydings the first time, here's another chance to catch a great performer! Sit back, relax, and enjoy a nice evening at Vallensons'! We open at noon. Twisted Catfish food truck will be serving from 2-8pm. Cheers!",
//     link: "https://www.facebook.com/events/163168234237589/?acontext=%7B%22source%22%3A5%2C%22page_id_source%22%3A1118451838176881%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%7B%5C%22page_id%5C%22%3A1118451838176881%2C%5C%22tour_id%5C%22%3Anull%7D%22%7D]%2C%22has_source%22%3Atrue%7D",
//     highlight: "false"
// },{
//     month: "10",
//     day: 16,
//     year: 2017,
//     title: "Live Performance By Jordan Tydings",
//     description: "If you missed Jordan Tydings the first time, here's another chance to catch a great performer! Sit back, relax, and enjoy a nice evening at Vallensons'! We open at noon. Twisted Catfish food truck will be serving from 2-8pm. Cheers!",
//     link: "https://www.facebook.com/events/163168234237589/?acontext=%7B%22source%22%3A5%2C%22page_id_source%22%3A1118451838176881%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%7B%5C%22page_id%5C%22%3A1118451838176881%2C%5C%22tour_id%5C%22%3Anull%7D%22%7D]%2C%22has_source%22%3Atrue%7D",
//     highlight: "false"
// },
// {
//     month: 11,
//     day: 8,
//     year: 2017,
//     title: "Live Performance By Jordan Tydings",
//     description: "If you missed Jordan Tydings the first time, here's another chance to catch a great performer! Sit back, relax, and enjoy a nice evening at Vallensons'! We open at noon. Twisted Catfish food truck will be serving from 2-8pm. Cheers!",
//     link: "https://www.facebook.com/events/163168234237589/?acontext=%7B%22source%22%3A5%2C%22page_id_source%22%3A1118451838176881%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%7B%5C%22page_id%5C%22%3A1118451838176881%2C%5C%22tour_id%5C%22%3Anull%7D%22%7D]%2C%22has_source%22%3Atrue%7D",
//     highlight: "false"
// }];

// arrays
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// variables
var d = new Date();
var currentMonth = d.getMonth();
var currentDay = d.getDate();
var currentMText = months[currentMonth];
var nextMText = months[currentMonth + 1];

// creating the titles
$('#currentmonth').text(currentMText);
$('#nextmonth').text(nextMText);

// get Json information
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var respsonse = JSON.parse(xhttp.responseText);
        var events = respsonse.event;

        var currentEventsArr = events.filter(function(event){
            return event.month == currentMonth + 1;
        });
        
        var nextEventsArr = events.filter(function(event){
            return event.month == currentMonth + 2;
        });
        
        var upcomingCurrent = currentEventsArr.filter(function(event){
            return event.day >= currentDay;
        });
        
        upcomingEventsArr = upcomingCurrent.concat(nextEventsArr);

        for (var i = 0; i < currentEventsArr.length; i++) {
            var currentEvents = 
                '<div class="date">'+
                    '<h3>' + currentMText + ' ' + currentEventsArr[i].day + ', ' + currentEventsArr[i].year + '</h3>' +
                    '<p>' + currentEventsArr[i].title + '</p>' +
                    '<p>' + currentEventsArr[i].description + '</p>' +
                    '<a href="'+ currentEventsArr[i].link + '" class="btn btnred" target="_blank">More Details</a>' + 
                '</div>'; 
            $('#currentevents').append(currentEvents);
        }

        for (var i = 0; i < nextEventsArr.length; i++) {
            var nextEvents = 
                '<div class="date">'+
                    '<h3>' + nextMText + ' ' + nextEventsArr[i].day + ', ' + nextEventsArr[i].year + '</h3>' +
                    '<p>' + nextEventsArr[i].title + '</p>' +
                    '<p>' + nextEventsArr[i].description + '</p>' +
                    '<a href="'+ nextEventsArr[i].link + '" class="btn btnred" target="_blank">More Details</a>' + 
                '</div>'; 
            $('#nextevents').append(nextEvents);
        }
        
        // for (var i = 0; i < 4; i++) {
        //     var upcomingEvents = 
        //         '<div class="date">'+
        //             '<h3>' + months[upcomingEventsArr[i].month - 1] + ' ' + upcomingEventsArr[i].day + ', ' + upcomingEventsArr[i].year + '</h3>' +
        //             '<p>' + upcomingEventsArr[i].title + '</p>' +
        //         '</div>'; 
        //     $('#upcoming').append(upcomingEvents);            
        // }
    }
};
xhttp.open("GET", "events.json", true);
xhttp.send();

// contruct arrays

// var currentEventsArr = events.filter(function(event){
//     return event.month == currentMonth + 1;
// });

// var nextEventsArr = events.filter(function(event){
//     return event.month == currentMonth + 2;
// });

// var upcomingCurrent = currentEventsArr.filter(function(event){
//     return event.day >= currentDay;
// });

// upcomingEventsArr = upcomingCurrent.concat(nextEventsArr);

// Constructing into HTML

// creating the current events
// for (var i = 0; i < currentEventsArr.length; i++) {
//     var currentEvents = 
//         '<div class="date">'+
//             '<h3>' + currentMText + ' ' + currentEventsArr[i].day + ', ' + currentEventsArr[i].year + '</h3>' +
//             '<p>' + currentEventsArr[i].title + '</p>' +
//             '<p>' + currentEventsArr[i].description + '</p>' +
//             '<a href="'+ currentEventsArr[i].link + '" class="btn btnred">More Details</a>' + 
//         '</div>'; 
//     $('#currentevents').append(currentEvents);
// }

// creating the next month events
// for (var i = 0; i < nextEventsArr.length; i++) {
//     var nextEvents = 
//         '<div class="date">'+
//             '<h3>' + nextMText + ' ' + nextEventsArr[i].day + ', ' + nextEventsArr[i].year + '</h3>' +
//             '<p>' + nextEventsArr[i].title + '</p>' +
//             '<p>' + nextEventsArr[i].description + '</p>' +
//             '<a href="'+ nextEventsArr[i].link + '" class="btn btnred">More Details</a>' + 
//         '</div>'; 
//     $('#nextevents').append(nextEvents);
// }

// creating the upcoming events section of the index page
// for (var i = 0; i < 4; i++) {
//     var upcomingEvents = 
//         '<div class="date">'+
//             '<h3>' + months[upcomingEventsArr[i].month - 1] + ' ' + upcomingEventsArr[i].day + ', ' + upcomingEventsArr[i].year + '</h3>' +
//             '<p>' + upcomingEventsArr[i].title + '</p>' +
//         '</div>'; 
//     $('#upcoming').append(upcomingEvents);
    
// }
