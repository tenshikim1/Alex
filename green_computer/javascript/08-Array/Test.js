function printfArray(a){
    
    console.log("%s",a);
}

function selectionSort(a,b)
{
    var tmp;

    for(var i=0; i<b-1; i++){
        for(var j=i+1; j<b; j++)
        {
            if(a[i] > a[j])
            {
                tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
        }
    }
}

var readline = require('readline-sync');

var size;

size = readline.question("배열의 크기를 입력하세요: ");

var data = [];

for(var i=0; i<size; i++){
    data[i] = readline.question(">>" + Number(i+1) + "번째 값을 입력하세요: ");
}

console.log("[입력한 데이터]");
printfArray(data);

selectionSort(data, size);
printfArray(data);