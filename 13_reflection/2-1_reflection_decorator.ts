import 'reflect-metadata'



const restrictedValueKey = Symbol('restrictedValueKey');

interface ValueInfo<T> {
    index: number;
    restrictedValues: T[];
}

function RestrictedParamValue<T>(restrictedValues: T[]) {
    return (target: any, propertyKey: string, index: number) => {
        const restrictMeta = Reflect.getOwnMetadata(restrictedValueKey, target, propertyKey) ?? [];

        const valueInfo: ValueInfo<T> = {
            index,
            restrictedValues,
        }

        Reflect.defineMetadata(restrictedValueKey, [
            ...restrictMeta,
            valueInfo
        ], target, propertyKey)

        console.log(Reflect.getOwnMetadata(restrictedValueKey, target, propertyKey));
    }
}




// 메서드 데코레이터

function ValidateMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metas: ValueInfo<any>[] = Reflect.getOwnMetadata(restrictedValueKey, target, propertyKey) ?? []

    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const invalids = metas.filter(
            (x) => !x.restrictedValues.includes(args[x.index])
        )
        if (invalids.length > 0) {

            throw Error(`잘못된 값입니다. ${invalids.map(x => args[x.index])}, ${invalids.length}`);


        } else {
            console.log(invalids.length);
        }

        return originalMethod.apply(this, args);
    }
}






class Idol {
    name: string;
    age: number;
    state: string;


    constructor(name: string, age: number, state: string) {
        this.name = name;
        this.age = age;
        this.state = state;
    }

    @ValidateMethod
    sing(@RestrictedParamValue(['신나게', '열정적으로']) adj: string) {
        return `${this.name}가 ${adj} 춤을 춥니다.`
    }
}


const winter = new Idol('윈터', 23, '대한민국');

console.log(winter.sing('신나게'));
console.log(winter.sing('열정적으로'));
console.log(winter.sing('섹시하게'));
console.log(winter.sing('섹시게'));
console.log(winter.sing('섹게'));


