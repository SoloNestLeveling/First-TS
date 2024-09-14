/**
 * parameter decorator
 */

class Winter {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    dance(@ParameterDecorator adj: string, @ParameterDecorator venue: string) {
        return `${this.name}가 ${venue}에서 ${adj} 춤을 춥니다.`

    }
}

const winter = new Winter('winter');
winter.dance('파워풀하게', '옥상에서');


function ParameterDecorator(target: any, propertyKey: string, paramIndex: number) {

    const original = target[propertyKey];

    target[propertyKey] = function (...args: any[]) {
        console.log(`${paramIndex} 번쨰 값인 ${propertyKey}가 정의되었습니다. ${target}`)
        console.log(target)
        console.log(propertyKey)

        return original.apply(this, args);
    }

}


//--------------------------------------------------------------------------------


class Idol {

    name: string;
    constructor(name: string) {
        this.name = name
    }

    @IdolMember
    sayHello() {
        return `안녕하세요 저는 ${this.name}입니다.`
    }
}
const winter2 = new Idol('Winter')
const person = new Idol('오경민')
winter2.sayHello();
person.sayHello();



function IdolMember<T extends { name: string }>(target: T, propertyKey: string, descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value;


    descriptor.value = function (this: T, ...args: any[]) {
        const methodValue = this.name;
        if (methodValue === 'Winter') {
            console.log(`안녕하세요 저는 김민정 이고 에스파 멤버입니다.`);
        } else if (methodValue === '장원영') {
            console.log(`안녕하세요 저는 장원영 이고 아이브 멤버입니다.`);
        } else {
            console.log(`아이돌이 아닙니다!`)
        }

        const result = originalMethod.apply(this, args);
        return result
    }

}




class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    dance(@Param say: string) {
        console.log(`${say}: ${this.name}`)
    }
}


function Param(target: any, propertyKey: string, paramIndex: number) {
    console.log(`${target[propertyKey]}`)
}