/**
 * pick type : 가져오고 싶은 속성만 가져오기
 * omit type : 원하지 않는 속성만 제외하기
 */

interface Post {
    title: string;
    content: string;
    date: Date;
}

function creatPost(post: Post): Post {
    return post;
}


//이렇게 할 경우 post의 모든 속성들을 입력해야한다.

console.log(creatPost({
    title: '요즘 개발자 취업 어떤가요?',
    content: '30살 넘어서도 해볼만한가요?',
    date: new Date(),

}));



// 우릭 원한는 것은 기본적으로 계속 입력 받아야하는 date는 함수 안에서 실행해주고
// 나머지 속성들만 가져오는 것 

function pickedPost(post: Pick<Post, 'title' | 'content'>) {

    return {
        ...post,
        date: new Date(),
    }
}

console.log(pickedPost({
    title: 'ddd',
    content: 'dwd',
}))       // 이렇게 title,content만 입력해줘도 된다.

// 출력해보면 date는 함수 안에서 값을 넣어주고 리턴했기 때문에 함수 실행시 매번 출력된다.


/**
 * 
 * omit
 */

function omittedPost(post: Omit<Post, 'date'>) {

    return {
        ...post,
        date: new Date(),
    }
}

console.log(omittedPost({
    title: 'ddd',
    content: 'dwd',
}))       // 이렇게 title,content만 입력해줘도 된다.



interface UserInfo {
    id: string;
    password: number;
    state: string;
}

function user1(basicInfo: Pick<UserInfo, 'id' | 'password'>) {
    return {
        ...basicInfo,
        state: '대한민국'
    }
}

console.log(user1({
    id: 'qhfrm1070',
    password: 232142
}))