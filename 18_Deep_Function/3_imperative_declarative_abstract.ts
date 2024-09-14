/**
 * 명령형,선언형,추상화
 */


//명령형 일반적인 객체지향 패러다임에서 사용하는방식, 컴파일러에게 특정 작업을 어떻게 해야 하는지 알려주는 것이다.


const imperativeArray: number[] = [1, 2, 3]

for (let i = 0; i < imperativeArray.length; i++) {
    console.log(imperativeArray[i])
} // array의 길이를 가져와서 길이 만큼 반복하면서 인덱스를 사용해 배열의 각 요소를 얻어오라고 명령한다.


const declarativeArray: number[] = [1, 2, 3]

declarativeArray.forEach((x) => console.log(x))

// 추상화된 내장 함수를 통해 "어떻게" 라는 부분이 살아졌다. forEach 이름만 봐도 무엇을 할지 어느정도 가늠이 된다.