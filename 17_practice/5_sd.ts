import { userInfo } from "os"

class LogCache {
    normal?: string
    worring?: string
}


class Worring extends LogCache {
    worring: string = "잘못된 접근 방식 입니다."
}

class Normal extends LogCache {
    normal: string = "정상"
}

type GenericTernary<T extends LogCache> = T extends Worring ? Worring : Normal


const worring: GenericTernary<Worring> = new Worring()
console.log(worring)

interface Info {
    name: string
    age: number
    part: string
}


const infoWinter: Info = {
    name: "winter",
    age: 23,
    part: "visual"
}


function keyGeneric<O, K extends keyof O>(obj: O, key: K) {
    return obj[key]
}


console.log(keyGeneric(infoWinter, "name"))



const userList = {
    userInfo: {
        userName: '김민정',
        userAge: 23,
        state: '대한민국'
    }
}


function getInerKey<O, K extends keyof O>(obj: O, key: K) {

    const inerKey: any = obj[key]

    return inerKey ? inerKey["userName"] : undefined




}

console.log(getInerKey(userList, "userInfo"));





const obj = {
    winter: 1010,

    foo() {
        console.log(`foo's this : ${this}`)
        console.log(`foo's this : ${this.winter}`)

        // function basic() {
        //     console.log(`foo's this : ${this}`)
        //     console.log(`foo's this : ${this.winter}`)
        // }
        // basic()
    }


}

obj.foo()
console.log(obj.foo.prototype)
console.log(obj.constructor)




interface CurrentState {
    open(): void,
    close(): void
}


class OpenStore implements CurrentState {
    open(): void {
        console.log("현재 가게 운영중")
    }

    close(): void {
        console.log("오후 10시 Close")
    }
}

class CloseStore implements CurrentState {
    open(): void {
        console.log("매일 오전 9시 Open")
    }

    close(): void {
        console.log("운영종료")
    }
}


class StoreInfo {

    openOrClose(): CurrentState {
        const currentTime = new Date()
        const currentHour = currentTime.getHours()

        if (currentHour >= 9 && currentHour <= 22) {
            return new OpenStore
        } else {
            return new CloseStore
        }
    };
};


const storeInfo = new StoreInfo()

const openOrClose = storeInfo.openOrClose()

console.log(`현재 시간: ${new Date().getHours()}:${new Date().getMinutes()}`)

openOrClose.open()
openOrClose.close()

