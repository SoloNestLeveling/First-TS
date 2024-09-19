/**
 * overloading
 * 
 * 파라미터를
 * 1) 1개 받거나
 * 2) 3개를 받는 함수
 * 
 * 만약에 하나의 파라미터만 입력받는다면
 * 아이돌 맴버들을 하나의 스트링으로 입력받는다.
 * 예) '윈터,카리나,닝닝,지젤'
 * 
 * 만약에 세개의 파라미터를 받는다면
 * 각각 아이돌을 각각의 파라미터의 값으로 입력한다.
 * 예) '윈터','카리나'.....
 */


function idolmembers(memberOrmembers: string, member2?: string, member3?: string): string {
    if (member2 && member3) {
        return `에스파 멤버: ${memberOrmembers}, ${member2}, ${member3}`;
    } else {
        return `에스파 멤버: ${memberOrmembers}`;
    }
}

console.log(idolmembers('윈터,카리나'));

console.log(idolmembers('윈터', '카리나', '닝닝'));


//만약 2개의 아규먼트만 넣어준다면 

console.log(idolmembers('윈터', '카리나')); //if문 else가 실행

//하지만 우리는 오로지 1개 또는 3개만 입력 받고 싶다면


//--------------------오버라이딩------------------------



//오버로딩 : 밑에 함수와 이름을 똑같이 만들어야 한다.

function idolmembers2(memberOrmembers: string): string;
function idolmembers2(member1: string, member2: string, member: string): string;
// 파라미터 이름은 달라도 상관없다! 순서가 중요하다.


function idolmembers2(memberOrmembers: string, member2?: string, member3?: string): string {
    if (member2 && member3) {
        return `에스파 멤버: ${memberOrmembers}, ${member2}, ${member3}`;
    } else {
        return `에스파 멤버: ${memberOrmembers}`;
    }
}


//console.log(idolmembers2('윈터','카리나'));// 이렇게 두개의 아규먼트 입력시 에러를 발생하고 에러메세지를 보면
//1또는 3개의 아규먼트만 입력가능하다고 뜬다.


class Winter {
    constructor(
        private name: string,
        private age: number
    ) { }
}

const winter = new Winter('김민정', 23);

console.log(winter);
