/**
 * generic in class
 */


class Pagination<Data,Message>{
    data:Data[];
    message?:Message;
    lastFetchedAt?:Date;

    constructor(data:Data[], message?:Message){
        this.data =data;
        this.message =message;
    }
}

const pagination= new Pagination<string,string>(['1','2','3'],'첫번째 페이지');

pagination.data

//타입을 명시해주고 싶은면 제어릭은 꼭 넣어준다. 그냥 항상 넣는 방식을 사용해보자!!

