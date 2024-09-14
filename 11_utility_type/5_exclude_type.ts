/**
 * exclude type
 * 일번적인 유니언 타입을 넣어준다.
 * 제외하고 싶은 타입을 두번쨰에 입력한다.
 */


type NoString = Exclude<string | number, string> // 정상적으로 string은 제외
type NoFunction = Exclude<boolean | string | (() => void), Function> 
