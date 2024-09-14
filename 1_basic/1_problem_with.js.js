"use strict";
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(1, 2));
console.log(add(1, '2')); //당연히 에러가 뜬다.
//  타입스크립트는 이런식으로 타입을 지정해서 좀더 직관적이고 명확하게 코드를 짤 수 있다.


