/**
 * import 가져오기
 * 
 * 상대경로 입력
 * 
 *  ./ = 현재 폴더를 의미한다. (15_import_and_export)
 *  ../ = 상위 폴더를 의미한다.(15번 폴더 이외의 폴더들)
 */

import test from './1_export_default_1'; // import의 이름은 실제 class와는 전혀 관련이 없다. 아무거나 만들어도된다.


// import로 class IdolModel을 가져 왔으니 인스턴스를 만들어 보자

//const winter = new Idolmodel('김민정', 23);
//console.log(winter);  // 정상적으로 출력이 된다.


//console.log(test);  // 12가 출력된다.

// export default를 어디에 선언했냐에 따라 결과 값은 달라진다.
//import 이름을 변경 시킬 필요는 없다.



//const cat: test = {
//    name: '오리',
//    bread: 'british fold'
//}


// export default로 객체화한 값을 사용하는법

const winter = new test.Idolmodel('김민정', 23);

console.log(winter);
console.log(test.number);