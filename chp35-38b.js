function factor(){
    num = Number(prompt("Enter the Number to Factorialize"));
    var answer =1;
    for (var i=num; i>=1; i--){
    answer = answer * i;
    }
    return answer;
    }