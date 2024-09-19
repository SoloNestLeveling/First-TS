/**
 * object union
 */

/**
 *  유추된 객체 타임 유니언
 */

const dogOrCat = Math.random() > 0.5 ?
    //강아지
    {
        name: '별이',
        age: 2,
    } :
    //고양이
    {
        name: '오리',
        bread: '코숏'

    }

dogOrCat.name;
dogOrCat.age;   //특이하게 nmber|undefied라고 나온다 이유는 50% 확률로 값이 있을 수도 있지만 고양이가되면 값이 없기 때문이다.
dogOrCat.bread; // 같은 현상

//그런데 특이하게 dogOrCat 타입으로 보면 dog일경우  bread가 옵셔널로 들어간 것을 볼 수있다
// 이러한 현상을 막고 싶다면 직접 타입을 선언한다.

// 직접 타입 선언시

interface Dog {
    name: string;
    age: number;
}

interface Cat {
    name: string;
    bread: string;
}

type DogOrCat = Dog | Cat;


const dogOrCat2: DogOrCat = Math.random() > 0.5 ?
    //강아지
    {
        name: '별이',
        age: 2,
    } :
    //고양이
    {
        name: '오리',
        bread: '코숏'

    }

dogOrCat2.name; // 뭐 당연히 잘 된다.
dogOrCat2.age; // 하지만 age를 가져오면 확률상 고양이가 될 수있기때문에 접근이 불가능하다!!


// 값을 가져오고 싶은면 네로잉을 통해 타입을 유추하고 가져오면 된다.

if ('age' in dogOrCat2) {
    dogOrCat2 //정상적으로 dog 타입으로 유추
    dogOrCat2.age // dog 타입으로 유추되었기 때문에 값을 가져 올 수 있다.
} else {

}