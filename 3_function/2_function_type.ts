/**
 * function type
 */
type aespaMembers = (x: string) => string;

const idol = (aespa: aespaMembers) => {
    return ['카리나', '윈터', '지젤', '닝닝'].map(aespa);
}

console.log(idol((x) => `에스파: ${x}`));


//기본 방식

const aespa2 = () => {
    return ['윈터', '카리나'].map((x) => `에스파 맴버: ${x}`);
}

console.log(aespa2());



//interface

interface multiyply {
    (x: number, y: number): number;
}

const multiyplyNumber: multiyply = (x, y) => {
    return x * y
}

console.log(multiyplyNumber(3, 4));