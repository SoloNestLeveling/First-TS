/**
 * key and value mapping
 * 
 * 많이 복잡함
 */

enum State {
    loading,
    done,
    error,
}

//조금 억지로 api상태를 설정해보자

type GlobalApiStatus = {
    getUser: State;
    paginateUser: State | undefined;
    banUser: State | null;
    getPosts: State;

}

type UserApiStatus = {
    getUser: State;
    paginateUser: State | undefined;
    banUser: State | null;
}                         //만약 이렇게 가져오면 나중에 변경할때 하나하나 일일이 변경해야한다.


// 좀 더 좋은 방법 key값 입력
type UserApiStatus2 = {
    getUser: GlobalApiStatus['getUser'];
    paginateUser: GlobalApiStatus['paginateUser'];
    banUser: GlobalApiStatus['banUser'];
}

// 더 더 좋은 방법 key value mapping하기

type UserApiStatus3 = {
    [k in 'getUser' | 'paginateUser' | 'banUser']: GlobalApiStatus[k];
}

//----------------------------------------------------------------------


// 미친 기능 엄청나게 강력한 유틸리티 타입으로 타입 가져오는법!!

// 1) pick 유틸리티  : 가져오고싶은 프로퍼티만 상속하는법

type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'paginateUser' | 'banUser'>;

// 이렇게 가져오고 싶은것만 가져올수 있다!!!! 미친 유틸리티!!



// 2) omit 유틸리티 : 제외하고 싶은것만 제외하고 가져오는법

type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>;



/**
 *  1) keyof 유틸리티 : 객체의 모든 키값을 유니언으로 가져온다.
 *  2) Exclude 유틸리티 : 특정 타입을제외한다,
 * 
 */

type AllKeys = keyof GlobalApiStatus;

const key: AllKeys = 'getUser' //이런식으로 key을 전부 사용 할수 잇다.



//그러면 응용해서 위에서 했던 키 값 맴핑을 keyof로 응용해보자


type KeyUserApiStatus = {
    [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
}
// 어메이징!! 좀더 간결해졌다!! 하지만 우리는 getPosts 프로퍼티는 원하지 않는다
// 그러면 원하지 않는 프로퍼티만 제외하는법


// Exclude 유틸리티

type KeyUserApiStatus2 = {
    [k in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[k];
}

// 마법처럼 우리가 원하는 'getPosts'가 제외 되고 맵핑 되었다!!