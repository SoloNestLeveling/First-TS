/**
 * extract type
 * 
 * exclude의 반대 타입이다.
 */


type OnlyString = Extract<string | number, string> 
type OnlyFunction = Extract<boolean | string | (() => void), Function> 
