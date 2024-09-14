/**
 * import 값 가져오기
 */

import { IdolModel, number, Cat } from "./2_export_1";
// 여기서는 {}안에 명칭을 마음대로 선언하면 안되고 가져올 해당 값의 이름이랑 똑같이 해야 한다.

const gucciWinter = new IdolModel('김민정', 23);
console.log(gucciWinter);

console.log(number);

const cat: Cat = {
    name: '오리',
    bread: 'british short hair'
}

console.log(cat);