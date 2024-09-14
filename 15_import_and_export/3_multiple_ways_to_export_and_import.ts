/**
 * multiple ways to export and import
 */


// 1)import의 이름을 바꿔주는 방법 

//import { IdolModel as testname, number, Cat } from "./2_export_1";

//const gucciWinter = new testname('김민정', 23);
//console.log(gucciWinter);





// 2) 와일드카드

// import * as allTogether from './2_export_1';
// // export된 모든 값을 불러오고  불러온 값들의 이름을 allTogether라고 하겠다 라는 의미이다.
// // export된 모든 값을 하나의 객체로 묶는다.

// console.log(allTogether.IdolModel);
// console.log(allTogether.number);


// 3) export default와 export 같이 import 하기

// import testExportDefault, { IdolModel, number, Cat } from './2_export_1'

// console.log(testExportDefault);


// 4) baseUrl  : 최상의로 부터 경로를 설정할 수있다 좀더 직관적이다.


import { IdolModel } from "15_import_and_export/2_export_1"; // 이렇게 상위 폴더에 파일을 명시해서 더 직관적이다.


