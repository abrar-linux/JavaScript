var courses = [];
courses.push(prompt("Enter the name of Course 1"));
courses.push(prompt("Enter the name of Course 2"));
courses.push(prompt("Enter the name of Course 3"));
courses.push(prompt("Enter the name of Course 4"));
courses.push(prompt("Enter the name of Course 5"));

console.log(courses);

alert("If you need to edit any of the course, just change its value");

var courseedit = prompt("Course 1", courses[0]);
    if (courseedit !== courses[0]) {
    courses.splice(0,1,courseedit);
    }
courseedit = prompt("Course 2", courses[1]);
    if (courseedit !== courses[1]) {
    courses.splice(1,1,courseedit);
    }
courseedit = prompt("Course 3", courses[2]);
    if (courseedit !== courses[2]) {
    courses.splice(2,1,courseedit);
    }
courseedit = prompt("Course 4", courses[3]);
    if (courseedit !== courses[3]) {
    courses.splice(3,1,courseedit);
    }
courseedit = prompt("Course 5", courses[4]);
    if (courseedit !== courses[4]) {
    courses.splice(4,1,courseedit);
    }

console.log(courses);