// var now = new Date(); // remember js starts with zero

// // console.log(now.toString()); // turn it into something that humans can read with the toString method
// // console.log(now.getFullYear());
// // console.log(now.getDay()); // result is 3, day of the week, wednesday
// // console.log(now.getDate());
// // console.log(now.getHours());
// // console.log(now.getMinutes());
// // console.log(now.getSeconds());

// now.setFullYear(now.getFullYear());

// console.log(now.toString());



// var now = new Date(2004, 1, 29); 

// // now.setDate(now.getDate() - 5);
// now.setFullYear(now.getFullYear() - 1)

// console.log(now.toString());



//calculate which day of the week you were born

// //1
// var now = new Date(2017, 11, 30); 
// now.setFullYear(now.getFullYear() - 27)
// console.log(now.toString());

// //2
// var now = new Date(1990, 11, 30); 
// console.log(now.toString());




//first day of your immunization after you were born






//which month was it 1000 days after you were born, add to date 1000, then get month(remember it starts with 0)

// var then =  new Date(1990, 11, 30); 
// var now = new Date();

// var msPerHour = 1000 * 60 * 60 //1000 ms in an hour, 60 secs in a min, and 60 mins in an hour

// console.log((now.getTime() - then.getTime()) / 1000 / 60 / 60) //milliseconds is 1000, secs 60, mins 60
// console.log((now.getTime() - then.getTime()) / msPerHour) // this many hours I have lived




// var then =  new Date(1990, 11, 30); 
// var now = new Date();

// var msPerWeek = 1000 * 60 * 60 * 24 * 7//1000 ms in an hour, 60 secs in a min, and 60 mins in an hour, 24 hours in a day

// console.log((now.getTime() - then.getTime()) / 1000 / 60 / 60) 
// console.log((now.getTime() - then.getTime()) / msPerWeek) // this many days i have lived



// var start = new Date();
// for(var i = 0; i < 100000; i++){
//     console.log(i);
// }

// var end = new Date();
// console.log((end.getTime() - start.getTime()) / 1000)




// var timestamp = Date.parse('2012-01-26T15:00:00.100Z'); // z means time zone(0 timezone)

// console.log('TS:', timestamp)

// var then = new Date(timestamp);

// console.log(then.toString());


//-----------------------------------------
//Exercises below
//------------------------------------------

//Q1 [DONE]
// var now = new Date(2016, 2, 14, 03, 12);
// console.log(now.toString());





// Q2 [DONE]
// var date = new Date(2012, 0, 3);

// function getWeekDay(date){
//     var weekDay = date.toString().split(' ');
//     return weekDay[0];
// }
// console.log(getWeekDay(date));





//Q3
//needs fixing

// var now = new Date(2017, 8, 20); 

// var days = 0;

// function getDateBefore(date, days){
    
//     now.setDate(now.getDate() - days)
//     var numDay = now.toString().split(' ')
//     numDay[2];


// }

// console.log(getDateBefore(now, 2)) // 18
// console.log(getDateBefore(date, 1) ); // 1, (1 Jan 2015)

// var now = new Date(2004, 1, 29); 

// // now.setDate(now.getDate() - 5);
// now.setFullYear(now.getFullYear() - 1)

// console.log(now.toString());






//Q4 [DONE]
// var date = new Date();

// function getLastDayOfMonth(year, month){
//     return new Date(year, month + 1, 0).getDate();
// }
// console.log(getLastDayOfMonth(2012, 1)) // 29






//Q5 [DONE]

//return the name of the month

// function nameOfMonth(date) {
//     date = new Date().toString();
//     console.log(date.getDate())
    

// }


// console.log(nameOfMonth(new Date(2009, 10, 11)));
// // "October" 
// console.log(nameOfMonth(new Date(2014, 11, 13)));
// // "November"







// Q6





// Q7













// Q3 solutions

// var now = new Date(2017, 8, 20);

// var date = new Date(2015, 0, 2);

// function getDateBefore(date, days){ 
//     var newDate = new Date(date) // so create a new date to not modify the parameter date
//     var currentDay = newDate.getDate();
//     newDate.setDate(currentDay - days)
//     return newDate
// }

// // var today = new Date(2015, 0, 2);

// console.log( getDateBefore(date, 1).toString() ); // 1, (1 Jan 2015)
// console.log( getDateBefore(date, 2).toString() ); // 31, (31 Dec 2014)
// console.log( getDateBefore(date, 365).toString() ); // 2, (2 Jan 2014)




//Q5
// var date = new Date(2012, 0, 3);

// function nameOfMonth(date){
//     var monthName = date.toString().split(' ');
//     return monthName[1];
//     }
    
//----------------
// var monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// return monthArr[date.getMonth()]


//----------------------

/* var monthArr = {
    0: 'January', 
    1: 'February', 
    2: 'March', 
    3: 'April', 
    4: 'May', 
    5: 'June', 
    6: 'July', 
    7: 'August', 
    8: 'September', 
    9: 'October', 
    10: 'November', 
    11: 'December'
    }
return monthArr[date.getMonth()]


*/

// console.log(nameOfMonth(new Date(2009, 10, 11)));
// // "October" 
// console.log(nameOfMonth(new Date(2014, 11, 13)));
// // "November"





//Q6

// var now = new Date(2017,9,16,10)

// function getSecondsToday(){
//     // var today = new Date()
//     // today.setHours(0, 0, 0)
//     // var midnightTs = today.getTime()
//     // var currentTs = new Date().getTime()
//     // return ((currentTs - midnightTs)/ 1000)

// //----------------------------------------

// var now = new Date();
// var hours = now.getHours()
// var mins = now.getMinutes()

// return (hours * 60 * 60) + (mins * 60) //getting hours past and getting the minutes past


// }
// console.log(getSecondsToday()) // 36000

//----------------------------------------
// function getSecondsToday() {
//     var today = new Date()
//     today.setHours(0, 0, 0)
//     var midnight = today.getTime()
//     var currentHour = new Date().getTime()
//     return ((currentHour - midnight)/1000)
// }

// console.log(getSecondsToday())








//Q7 get the total number of seconds in the day then substract the seconds that have past
//
// var now = new Date()

// function getSecondsToTomorrow(){
// var now = new Date();
// var hours = now.getHours()
// var mins = now.getMinutes()

// return (hours * 60 * 60) + (mins * 60) //getting hours past and getting the minutes past


// }
// console.log(getSecondsToTomorrow()) // 36000

//------------
// function getSecondsToTomorrow() {
//     var today = new Date()
//     var tomorrow = new Date(today)
//     tomorrow.setDate(today.getDate() + 1)
//     tomorrow.setHours(0, 0, 0)
//     return ((tomorrow.getTime() - today.getTime()) / 1000)
// }

// console.log(getSecondsToTomorrow())