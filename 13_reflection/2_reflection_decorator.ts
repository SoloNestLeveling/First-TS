/**
 * reflection and decorator
 */

import 'reflect-metadata';

// 메타데이터에 들어갈 키값을 공용으로 만들어준다
// 일반적으로 symbol을 사용하는 이유는 실행하는 동안 절대 동일한 값이 존재하지 않도록 하기 위해
const restrictParamValueKey = Symbol('restrictParamValue')


interface RestrictionInfo<T> {
    paramIndex: number;
    restrictedValues: T[];
}


// 파라미터 데코레이터

function RestricParamValue<T>(restrictedValues: T[]) {
    return (target: any, propertyKey: string, paramIndex: number) => {

        // 메타데이터를 불러 오는 이유는 기존의 저장된 값들이 있으면 그값들을 불러오고 , 그 값들에 추가하기 위해서 
        // 기존 값들이 있다면 불러오고 그렇지 않다면 (??) []를 반환한다.
        const prevMeta = Reflect.getMetadata(restrictParamValueKey, target, propertyKey) ?? [];


        const info: RestrictionInfo<T> = {
            paramIndex,
            restrictedValues,
        }

        Reflect.defineMetadata(restrictParamValueKey, [
            ...prevMeta,
            info,
        ], target, propertyKey);

        console.log(Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey));
    }
}

console.log('--------------------------')



// 메서드 데코레이터

function ValidateMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metas: RestrictionInfo<any>[] = Reflect.getOwnMetadata(restrictParamValueKey,
        target, propertyKey) ?? [];

    const original = descriptor.value;

    descriptor.value = function (...args: any) {
        const invalids = metas.filter(
            (x) => !x.restrictedValues.includes(args[x.paramIndex])
        );

        if (invalids.length > 0) {
            throw Error(`잘못된 값입니다. ${invalids.map((x) => args[x.paramIndex]).join(', ')}`)
        }

        return original.apply(this, args);
    }
}


//클래스
class Idol {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }


    // style에는 무조건 '신난게'와 '열정적으로'만 받고싶다
    // 하지만 그냥 '신나게' |'열정적으로' 이렇게 넣으면 런타임에 다른 값이 들어가도 에러가 발생하지 않는다
    @ValidateMethod
    sing(@RestricParamValue(['신나게', '열정적으로']) style: string,
        @RestricParamValue([1, 2, 3]) ranking: number) {
        return `${this.name}이 ${style} 노래를 부릅니다`
    }
}

const winter = new Idol('김민정', 23);

console.log(winter.sing('신나게', 1));
console.log(winter.sing('열정적으로', 2));
console.log(winter.sing('착하게', 4));// 런타임시 제한된 값이외에도 값이 출력된다.

//이런 현상을 방지 하기위해 메서드에 데코레이터 하고 추가 코딩을 한다.