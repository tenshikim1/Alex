/*var readline = require("readline-sync");


var day = readline.question("몇 일간 여행을 다녀오겠습니까?: ");
day =Number(day);
var money = [];
var sum=0;

for(var i=0; i<day; i++)
{
    console.log(i+1);
    money[i] = readline.question(" 일차 예산을 입력하세요: ");    

}
for( var i=0; i<day; i++)
{
    sum += Number(money[i]);
}

console.log("총 예산은 %d원 입니다.",sum);*/

var readlineSync = require('readline-sync');

function printfArray(a){
    console.log(a);
}

function selectionSort(a){
    for(var i=0; i<a.length-1; i++)
    {
        for(var j=i+1; j<a.length; j++)
        {
        if(a[i]>a[j])
        {
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        }
    }
}

function reversSort(a){
    var half = parseInt(a.length / 2);

    var tmp;
    for(var i=0; i<half; i++)
    {
        tmp = a[i];
        a[i] = a[a.length-i-1];
        a[a.length-i-1] = tmp;
    }
}

var size = readlineSync.question('배열의 크기를 입력하세요: ');
size = Number(size);

var data = new Array(size);

for (var i=0; i<data.length; i++){
    data[i] = readlineSync.question(">>"+(i+1)+"번째 값을 입력하세요: ");
    data[i] = Number(data[i]);
}

console.log("[입력한 데이터]");
printfArray(data);

console.log("[순차정렬 결과]");
selectionSort(data);

printfArray(data);
console.log("[역순정렬 결과]");

reversSort(data);
printfArray(data);
