var grade = [
		[ 75, 82, 91 ],       // 둘리의 과목별 점수
		[ 88, 64, 50 ],       // 도우너의 과목별 점수
		[ 100, 100, 90 ],     // 또치의 과목별 점수
		[ 70 ]                // 마이콜의 과목별 점수
];
    var hi = "hello";

	// 배열의 행 수
	var row = grade.length;

    console.log(hi);
    console.log(row);
    console.log("이차배열: " + grade);
	
	for (var i = 0; i<row; i++) {

		// 배열의 열 수는 각 행마다 개별적으로 구해야 한다.
		var col = grade[i].length; //int col = sizeof(grade[i]) / sizeof(int);

		// 반복문 안에서 선언된 변수는 매 실행시마다 새로 생성된다.
		var sum = 0;
		var avg = 0;

		for (var j = 0; j<col; j++) {
			// i번째 위치의 0번째에 각 과목별 점수에 대한 누적처리
			sum += grade[i][j];
		}

		// i번째 위치의 평균점수 구하기 = 총점 / 과목수
		// i번째 학생의 과목수는 grade배열의 i번째에 대한 길이
		avg = sum / col;

		console.log("총점=%d, 평균=%d\n", sum, avg.toFixed(2));
    }