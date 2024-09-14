import 'reflect-metadata';


class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`안녕하세요 저는 ${this.name}이고 나이는 ${this.age}입니다.`)
    }
}

const winter = new Idol("김민정", 23)


Reflect.defineMetadata('groupName', 'winter', winter.)

console.log(Reflect.getMetadata('groupName', winter))


Reflect.defineMetadata('sm', 'Idol', Object.prototype)
console.log(Reflect.getOwnMetadataKeys(Idol))
