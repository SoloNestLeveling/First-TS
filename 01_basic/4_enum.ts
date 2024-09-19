/**
 * Enum
 */


/**
 * API 요청을 한다.
 * 상태는 4가지 상태
 * 
 * done - 요청을 완료 상태
 * error- 에러가 생긴 상태
 * loading -로딩상태
 * initial - 초기상태
 */


function runWork() {
    let state = 'intial';

    try {
        state = 'loading';
        //작업을 실행한다.

        state = 'done';

    } catch (e) {
        state = 'error';
    } finally {
        return state;
    }
}

console.log(runWork() === 'done'); //만약 done 스펠링을 틀리면 false가 된다.

//스펠링 문제 때문에 자바 스크립트에서는 전부 변수로 만든다.

const initialState = 'intial';
const loadingState = 'loading';
const doneState = 'done';
const errorState = 'error';


function runWork2() {
    let state = initialState;

    try {
        state = loadingState;
        //작업을 실행한다.

        state = doneState;

    } catch (e) {
        state = errorState;
    } finally {
        return state;
    }
}

console.log(runWork2() === doneState); // 스펠링이 잘못돼서 false가 나올 실수가 없다


// 이제 타입스크립트의 경우 enum을 사용한다.

enum State {
    initial,  // 여기서부터 숫자 0이 부여  값을 넣어주고 싶은면 initial = 'initial',  이렇게 넣어준다. 
    loading,
    done,
    error,
}

function runWork3() {
    let state = State.initial;  //이런 식으로 스테틱 처럼 State 변수를 가져오면 설정한 값들을 불러올수 있다.

    try {
        state = State.loading;
        //작업을 실행한다.

        state = State.done;

    } catch (e) {
        state = State.error;
    } finally {
        return state;
    }
}

console.log(runWork3() === State.done);
console.log(runWork3());


//근데 enum은 변수를 할당하는순간 변수마다 순서대로 숫자 0부터 부여가된다.
// done은 3번째 즉 2번이 부여되면서 runWork3 출력시 숫자 2가 출력된다.
// 이것을 방지 하고 싶으면 done = 'done', 이런식으로 선언해주면 된다.
