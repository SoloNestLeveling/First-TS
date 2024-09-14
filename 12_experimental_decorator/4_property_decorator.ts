/**
 * property decorstor
 */

class UserModel {
    @PropertyLogger
    id: string;
    @PropertyLogger
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}

function PropertyLogger(target: any, propertyKey: string) {
    console.log(`${propertyKey} 값이 정의 되었습니다.`)
    console.log(target);
}