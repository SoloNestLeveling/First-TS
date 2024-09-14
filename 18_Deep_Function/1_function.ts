

// 함수형 프로그래밍은 외부에 의존해서는 안된다.


var percentValue: number = 5;

const calculateTax = (value: number) => {
    return value / 100 * (100 + percentValue)
}

//이 함수는 외부 전역 변수인 percentValue값에 의존함으로 순수함수가 아닌다.. 전역 변수는 어떤한 변수에 의해 쉽게 값이 바뀔 수 가 있어 안전 하지 않다.


// 전역 변수에 의존하지 않는 순수 함수
const calculateTax2 = (value:number , percentValue:number)=>{
    return value/100 * (100+percentValue)
}



//함수와 메서드의 차이

//함수 - 함수 자체 이름으로 호출된다.

function name(name:string){
    return name;
}

name("winter");


//메서드 - 객체 내에 연관된 이름으로 호출된다.

const obj={
    simple : (a:string) =>{return a}
}

obj.simple('winter')