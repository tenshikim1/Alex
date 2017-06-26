var readline = require("readline-sync");

var num = [];
var temp;
for(var i=0; i<5; i++){
    console.log("%d", i+1)
    num[i] = readline.question(" 번째 숫자를 입력하세요: ");
    num[i] = Number(num[i])
    

}


for(var i=0; i<4; i++)
{
       for(var j=i+1; j<5; j++)
       {
           if(num[i]>num[j])
           {
               temp = a[i];
               a[i] = a[j];
               a[j] = temp;
           }
       }
    
}

console.log("정렬 결과: " + num);