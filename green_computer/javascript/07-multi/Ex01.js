var sum1 =Number(0), sum2=Number(0);

for (var i = 1; i<= 100; i++){

    if(i % 2 ==0) {
        sum1 += i;
    } else {
        sum2 += i;
    }

}

console.log("sum1=%d, sum2=%d", sum1, sum2);