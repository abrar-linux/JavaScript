var anyNum = Number(prompt("Enter any Number"));
anyNum = Math.ceil(anyNum);
var text = prompt("Enter any text");
var trunCate = text.slice(0, anyNum);
console.log("The Sliced String is: ", trunCate);
var reversedText = "";
for (var i=(trunCate.length -1); i >= 0; i--) {
    reversedText = reversedText + trunCate.charAt(i);
    }
console.log(reversedText);