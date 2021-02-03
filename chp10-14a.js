var totalMarks = 500;
var markObtained = 0;
var marks = 0;
for (var i =1; i < 6; i ++) {
    marks = Number(prompt("Enter the marks obtained in Course "+[i]));
    if (marks <= 100) {
        markObtained = marks + markObtained;
    }
    else {
    alert("Enter the Marks within 100");
    marks = Number(prompt("Enter the marks obtained in Course "+[i]));
    markObtained = marks + markObtained;
    }
}
var totalPercent = ((markObtained/totalMarks)*100).toFixed(2);
console.log("The total Percentage of this Student is : "+totalPercent+"%");