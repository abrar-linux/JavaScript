var name = prompt("Enter you full name: ", "firstname lastname");
var dob = prompt("Enter the date of your birthday", "dd");
var mob = prompt("Enter the month of your birthday", "mm");
var year = prompt("Enter the full year of your birth day", "YYYY");
var currentDate = new Date();
var timeNow = currentDate.getHours();
timeNow = currentDate.getHours();
    if (timeNow >= 5 && timeNow <=12) {
    console.log("Hello "+ name +" Good Morning");
    }
    else if (timeNow >= 12 && timeNow <= 18) {
    console.log("Hello "+ name +" Good Afternoon");
    }
    else {
    console.log("Hello "+ name +" Good Evening");
    }
currentDate.setDate(dob);
currentDate.setMonth(mob-1);
currentDate.setFullYear(year);
console.log("Your Date Of Birth is: " + currentDate);
dateDiff = (new Date() - currentDate)/(1000*60*60*24*365);
dateDiffToString = dateDiff.toString();
separator = dateDiffToString.indexOf(".")
totalyears = dateDiffToString.slice(0,separator);
months = (dateDiffToString.slice(separator)*365/30).toString();
separator = months.indexOf(".");
totalMonth = months.slice(0,separator);
days = (months.slice(separator)*30).toString();
separator = days.indexOf(".");
totalDays = days.slice(0,separator);
hours = (days.slice(separator)*24).toString();
separator = hours.indexOf(".");
totalHours = hours.slice(0,separator);
minutes = (hours.slice(separator)*60).toString();
separator = minutes.indexOf(".");
totalMinutes = minutes.slice(0,separator);
seconds = (minutes.slice(separator)*60).toString();
separator = seconds.indexOf(".");
totalSecond = seconds.slice(0,separator);
seconds = (minutes.slice(separator)*60).toString();
console.log("You are "+totalyears+" years "+ totalMonth+" Months "+totalDays+" Days "+totalHours+" Hours "+totalMinutes+ " Minutes "+totalSecond+" Seconds Old");
console.log("Your Age in Days " + Math.round(dateDiff*365));