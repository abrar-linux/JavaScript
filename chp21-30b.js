var title = "";
var inputStat = prompt("Enter any Statement");
inputValue = inputStat.split(" ");
for (var i=0; i < inputValue.length; i++) {
    var title = title + inputValue[i][0].toUpperCase() + inputValue[i].slice(1) + " "
    }
console.log(title);