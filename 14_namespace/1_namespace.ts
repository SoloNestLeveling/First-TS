/**
 * 더 이상 사용하지 않는 방식
 * 
 * 코드를 따로따로 관리하는법
 * 
 * 이제는 import 그리고 export라는 것 을 사용한다.
 */


namespace Human {
    class Idol {
        name: string
        constructor(name: string) {
            this.name = name
        }
    }

    export const winter = new Idol('김민정');
}

namespace Animal {
    class Dog {
        bread: string
        constructor(bread: string) {
            this.bread = bread
        }
    }

}

//각각의 네임스페이스 안에 값들은 네임스페이스 안에서만 접근이 가능하다

// 네임스페이스 외부에서도 사용하고 싶으면 export 키워드를 사용해서 외부에서 접근 할 수 있겠 할 수 있다.