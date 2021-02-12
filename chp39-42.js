totalObtained = 0;
for (i =1; i <=5; i++){
marksObtained = Number(prompt("Enter the Marks Obtained in Course"+[i]));
var totalObtained = totalObtained + marksObtained;
}
var percent = (totalObtained/500)*100;
console.log(percent);

switch(true){
    case percent >= 90: //&& percent <= 100:
        console.log("Grade A+");
        break;
    case percent > 75: //&& percent < 90:
        console.log("Grade A");
        break;    
    case percent > 60: //&& percent < 74:
        console.log("Grade B");
        break;
    case percent > 45: //&& percent < 60:
        console.log("Grade C");
        break;    
    case percent > 30: //&& percent < 44:
        console.log("Grade D");
        break;    
    case percent > 0: //&& percent < 29:
        console.log("Grade F");
        break;
    default:
        console.log("something is wrong");
}