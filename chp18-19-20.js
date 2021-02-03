var courses = [];
for (var i = 1; i<6; i++) {
courses.push(prompt("Enter the name of Course "+i));
}
console.log(courses);
alert("If you need to edit any of the course, just change its value");
for (var j=0; j<5; j++) {
var courseedit = prompt("Course "+[j+1] , courses[j]);
    if (courseedit !== courses[j]) {
    courses.splice(j,1,courseedit);
    }
}
console.log(courses);