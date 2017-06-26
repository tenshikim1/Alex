
	/** 1) 배열의 생성 방법 */
	// 배열의 생성과 데이터 저장의 개별처리
	var dooly = new Array(); // <-- 빈 배열 (var dooly = [])
    
    //배열 크기에 제한이 없다.
	dooly[0] = 75; // <-- 필요한 만큼 데이터 추가
	dooly[1] = 82;
	dooly[2] = 91;
    //숫자를 입력받았을 때만 형변환 해주면 된다!!!!

	var douneo = new Array(88, 64, 50); // 비추
	
	var ddochy = [ 100, 100, 90 ];  // 추천

	var micol = [ 70 ];

	/** 2) 배열의 길이 조회하기 */
	// int형 변수 3개가 모였기 때문에 배열의 크기는 12
	// 그러므로 배열의 크기에서 int의 크기를 나누면 배열의 길이가 된다.
	var length1 = dooly.length;        //int length1 = sizeof(dooly) / sizeof(int);
	var length2 = douneo.length;        //int length2 = sizeof(douneo) / sizeof(int);
	var length3 = ddochy.length;        //int length3 = sizeof(ddochy) / sizeof(int);
	var length4 = micol.length;        //int length4 = sizeof(micol) / sizeof(int);

	/** 3) 배열의 활용 */
	// 배열은 index가 0부터 순차적으로 증가하는 특성이 있기 때문에,
	// 반복문으로 활용이 용이하다.
	var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;

	// 각 배열요소의 값에 대한 합계 구하기
	for (var i = 0; i < length1; i++) {
		sum1 += dooly[i];
	}

	for (var i = 0; i < length2; i++) {
		sum2 += douneo[i];
	}

	for (var i = 0; i < length3; i++) {
		sum3 += ddochy[i];
	}

	for (var i = 0; i < length4; i++) {
		sum4 += micol[i];
	}

	// 배열의 전체 길이로 나누어, 평균을 구할 수 있다.
	var avg1 = sum1 / length1;
	var avg2 = sum2 / length2;
	var avg3 = sum3 / length3;
	var avg4 = sum4 / length4;

	/** 4) 결과확인 */
	console.log("[둘리] 총점=%d, 평균=%d\n", sum1, avg1.toFixed(2));
	console.log("[도우너] 총점=%d, 평균=%d\n", sum2, avg2.toFixed(2));
	console.log("[또치] 총점=%d, 평균=%d\n", sum3, avg3.toFixed(2));
	console.log("[마이콜] 총점=%d, 평균=%d\n", sum4, avg4.toFixed(2));
    console.log("둘리 과목별 점수: " + dooly);
    console.log("마이콜 과목별 점수: " + micol);
    console.log("또치 과목별 점수: %s" , ddochy); // 배열 통째로 출력할때 %s