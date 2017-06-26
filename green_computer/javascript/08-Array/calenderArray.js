/** 달력 구성에 필요한 기본 정보 */
const MONTH = 8         // #define = const 8월
const START_DAY = 1     // 시작요일-월요일(0=일~6=토)
const WEEKS = 5         // 이번달의 주 수

	var last_days = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

	// 이번달의 마지막 날짜
	var last_day = last_days[MONTH - 1];

    var cal = new Array(WEEKS);

    for (var i=0; i<WEEKS; i++) {
        cal[i] = new Array(7);
    }
	var index = 0;  // 2차 배열에 대한 순차적 인덱스
	var day = 1;    // 날짜

	/** 2) 배열에 달력 데이터 저장하기 */
	for (var i = 0; i<WEEKS; i++) {
		for (var j = 0; j<7; j++) {
			// 2차 배열의 각 원소에 순차적인 인덱스를 적용한다.
			// ex) cal[1][2] --> cal[9]
			index = (i * 7) + j;

			// 인덱스가 시작날짜 이후이고, 날짜(day)가 마지막날 이전이라면?
			if (index >= START_DAY && day <= last_day) {
				// 배열에 날짜를 의미하는 값을 저장하고 날짜 1증가
				cal[i][j] = day++;
			} else {
                cal[i][j] = 0; // undefined 지워줌
            }
		}
	}


    console.log("\t\t\t%d월\n\n", MONTH);
	for (var i = 0; i<WEEKS; i++) {
		for (var j = 0; j<7; j++) {
			if (cal[i][j] == 0) {
				// 출력후 줄바꿈 하지 않음. 단 서식문자(%d, %s) 사용 못함.
                process.stdout.write("\t");
			}
			else {
				process.stdout.write(cal[i][j] + "\t");
			}
		}

		console.log("\n");
	}
