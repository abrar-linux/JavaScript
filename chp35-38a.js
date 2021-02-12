function titleStat(inputStat){
    var title = "";
    var inputValue = inputStat.split(" ");
    for (var i=0; i < inputValue.length; i++) {
        var title = title + inputValue[i][0].toUpperCase() + inputValue[i].slice(1) + " "
        }
    console.log(title);
    //return title;
    }