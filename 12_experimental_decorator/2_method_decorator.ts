/**
 * method decorator
 */

class Idol {
    name: string

    constructor(name: string) {
        this.name = name;
    }

    @TestMethodDecorator
    @Configurable(false)
    @MethodCallLogger('Winter', 23)
    dance() {
        return `${this.name}이 춤을 춥니다.`
    }

}

/**
 * 1) target -staric method에 데코레이팅 힐 경우 생성자 함수를 가리킨다.
 *           - 인스턴스 메서드에 데코레이팅 할 경우 인스턴스의 프로토타입을 가리킨다. 
 * 
 * 2) propertyKey- 메서드의 이름 
 * 
 * 3) descriptor - property descriptor
 */


function TestMethodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    console.log('LogCall')
    console.log('------target-------');
    console.log(target);
    console.log('------propertyKey-------');
    console.log(propertyKey);
    console.log('------descriptor-------');
    console.log(descriptor);

}

const winter = new Idol('김민정');
console.log('------run dance-----');



function Configurable(configurable: boolean) {
    return function (target: any, propertyKey: string, decorator: PropertyDescriptor) {
        decorator.configurable = configurable;
    }

}



// value 변경
function MethodCallLogger(username: string, age: number) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.log(`안녕하세요 저는 ${username}이고 나이는 ${age}입니다.`);

            const thisAssign = originalMethod.apply(this, ...args); // apply를 지우면 인스턴스 메서드는 출력시 undifined가 된다.

            return thisAssign;
        }
    }
}




/**
 * this는 JavaScript에서 현재 실행 중인 메서드가 속한 객체를 가리키는 특수한 키워드입니다. 함수를 호출할 때 함수가 속한 객체를 호출 컨텍스트로 지정하기 위해 사용됩니다.

클래스의 인스턴스를 생성하면, 해당 클래스의 생성자 함수가 호출되어 객체가 생성됩니다. 이때 생성된 객체는 클래스의 프로토타입에 정의된 메서드를 상속받습니다.

예를 들어, const winter = new Idol('김민정'); 코드에서 Idol 클래스의 인스턴스를 생성하면 Idol 클래스의 생성자가 호출되고, this는 새로 생성된 객체를 가리킵니다. 즉, this는 winter 객체를 가리키게 됩니다.

데코레이터는 메서드에 적용되는 함수로서, 데코레이터가 적용된 메서드가 호출될 때 해당 함수가 실행됩니다. 이때 데코레이터 함수 내부에서 this는 데코레이터가 적용된 메서드가 속한 객체, 즉 메서드를 호출하는 객체를 가리킵니다.

따라서 originalMethod.apply(this, ...args)에서 this는 데코레이터가 적용된 메서드(dance())를 호출하는 객체인 winter를 가리킵니다. apply 메서드를 사용하여 originalMethod 함수를 this 컨텍스트로 실행하면, 
this 객체가 originalMethod 함수 내부에서 사용되는 this로 전달되게 됩니다.

결과적으로 this.name은 데코레이터가 적용된 메서드를 호출하는 객체인 winter의 name 속성을 나타내게 됩니다.
 */



/**
 * 
 * 일반적으로 데코레이터 함수는 래핑 함수로 사용되어 원본 메서드를 감싸고,
 *  원본 메서드의 동작을 변경하거나 추가 동작을 수행합니다.
 * 
 * 
 * "this 키워드는 해당 메서드가 포함된 객체를 가리키고 데코레이터 함수는 해당 메서드를 감싸고 있기때문에 
 * 데코레이터 함수에서 해당 메서드를 사용하기위해 메서드를 호출해도 this키워드는 데코레이터 함수를 가리키지 않는다.
 * 그러기때문에 apply를 통해서 this키워드를 해당 데코레이터 함수를 가리키도록 한다." 
 */


/**
 * apply(this,args)
 * agrs는 호출 메서드의 파라미터 값이다. 
 */


class Dog {
    name: string;
    bread: string;

    constructor(name: string, bread: string) {
        this.name = name;
        this.bread = bread;
    }

    @Complaint()
    bark() {
        return `${this.name}가 시끄럽게 짖고있습니다. 조용히좀 시키세요!!`
    }
}

const myDog = new Dog("오리", "리트리버");
myDog.bark();


function Complaint() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any) {

            const original = originalMethod.apply(this, ...args);


            const loadingMessage = (seconds: number): Promise<string> => new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('메서드 함수가 로딩중 입니다.')
                    reject('에러 발생')
                }, 1000 * seconds)
            })

            async function runner() {
                const start = performance.now();
                try {
                    const result = await loadingMessage(1);
                    console.log(result);
                    const result2 = await loadingMessage(3);
                    console.log('이웃주민들이 메세지를 보내왔습니다.');
                    const result3 = await loadingMessage(2);
                    console.log(original);
                } catch (e) {
                    console.log(e)
                } finally {
                    console.log('작업을 완료 했습니다.')

                }
                const end = performance.now();
                const executionTime = end - start;
                const executionTimeSeconds = (executionTime / 1000).toFixed(1);
                console.log(`작업 완료 시간: ${executionTimeSeconds}seconds`);
            }
            runner();






            return original;

        }

    }
}



console.log(Complaint());



//------------------------------------------------------------------------------------------



function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        console.log(`Method ${propertyKey} ,called with arguments: ${args}. Result: ${result}`);
        return result;
    };

    return descriptor;
}

class MyClass {
    @log
    public myMethod(arg1: string, arg2: number): string {
        return `Arguments: ${arg1}, ${arg2}`;
    }
}

const instance = new MyClass();
instance.myMethod("test", 123); // Output: Method myMethod called with arguments: test, 123. Result: Arguments: test, 123
