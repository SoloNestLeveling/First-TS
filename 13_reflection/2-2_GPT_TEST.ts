import 'reflect-metadata';


// 1) 받은 인자 출력하기 

class User {
    @Log('Log argument 입니다.')
    logIn() {
        return `로그인 되셨습니다. `
    }

}

const user = new User()
user.logIn();

function Log(logInfo: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.log(`함수 이름: ${propertyKey}, 받은 인자: ${logInfo} `)

            return original.apply(this, args);
        }
    }
}


//2)  제한된 값 설정하기



const restrictedParamKey = Symbol('restrictedParamKey');

interface RestrictedVelues<T> {
    index: number;
    restrictedValues: T[];
}

function RestrictedParam<T>(restrictedValues: T[]) {

    return (target: any, propertyKey: string, index: number) => {

        const matas = Reflect.getOwnMetadata(restrictedParamKey,target,propertyKey) ?? [];
        const values: RestrictedVelues<T> = {
            index,
            restrictedValues,
        }

        Reflect.defineMetadata(restrictedParamKey, [
            ...matas,
              values
        ], target, propertyKey);

        console.log(Reflect.getOwnMetadata(restrictedParamKey, target, propertyKey))

    }


}


function RestrictedMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const metas: RestrictedVelues<any>[] = Reflect.getOwnMetadata(restrictedParamKey, target, propertyKey) ?? [];

    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {

        const invalids = metas.filter(
            (x) => !x.restrictedValues.includes(args[x.index])
        );

        if (invalids.length > 0) {
            throw Error(`잘못된 값입니다. ${invalids.map((x) => args[x.index]).join(', ')}`)
        }

        return originalMethod.apply(this, args);

    }

}


class Person {
    name: string;

    constructor(name: string) {
        this.name = name
    }
    @RestrictedMethod
    userId(@RestrictedParam(['이쁘다', '아름답다']) appearance: string) {
        return `${this.name}은 ${appearance}`
    }
}

const winter = new Person('김민정');
console.log(winter.userId('이쁘다'));
console.log(winter.userId('못 생겼다'));






// 3)


function ValidArguments(restrictedArgs: (args: any[]) => boolean) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {

        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {

            if (!restrictedArgs(args)) {
                throw Error(`숫자만 입력하세요!`)
            }
            return originalMethod.apply(this, args);
        }
    }
}


class AddNumbers {
    @ValidArguments((args: any[]) => args.every(args => typeof args === 'number'))
    add(...numbers: number[]) {
        return numbers.reduce((p, n) => p + n, 0)
    }
}

const numbers = new AddNumbers()
console.log(numbers.add(1, 2, 3));
//console.log(numbers.add(1, 2, '3'));



// 4)  데이커 캐싱

// 캐쉬 값을 저장할 변수
// Map타입 인스턴스 생성



const userIdCache: Map<string, string> = new Map();

function DataCache<T extends { userName: string, id: string }>(target: T, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (this: T, ...args: any[]) {
        const cacheKey = this.id;

        if (!userIdCache.has(cacheKey)) {
            console.log(`${this.id}님 저희 사이트에 첫 방문을 환영합니다!`);

            userIdCache.set(cacheKey, this.id);
        } else {
            const result = originalMethod.apply(this, args);
            console.log(result)
            console.log(userIdCache);
            return result

        }


    };
}

class LogInUser {
    id: string;
    userName: string;

    constructor(id: string, userName: string) {
        this.id = id;
        this.userName = userName;
    }

    @DataCache
    sayHello() {
        return `${this.id}님 환영합니다!`;
    }
}

const user1 = new LogInUser('qhfrm1070', '오경민');
const user2 = new LogInUser('winter', '김민정')
user1.sayHello(); // 첫 번째 방문
user1.sayHello(); // 두 번째 방문
user2.sayHello();