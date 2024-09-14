/**
 * non nullable type
 * 
 * null이 될 수 없는 값들만 추출한다.
 */

type NonNull = NonNullable<string|number|boolean|null|undefined|object>;

// 타입을 보면 당연히 null,undefined는 null이 될 수 있기때문에 자동을 제외한다.