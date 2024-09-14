/**
 * constructor parameter type
 * 
 * class constructor의 parameter를 가져오는법
 */

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
}

type ConstructorParameter = ConstructorParameters<typeof Idol>;


//-----------------------------------------------------------------

class Aespa {
    members: ConstructorParameter[]

    constructor(members: ConstructorParameter[]) {
        this.members = members
    }

    aespaMembers(members: ConstructorParameter[]) {
        return members.map((x) => `aespaMember: ${x}`);
    }

}



const members: ConstructorParameter[] = [
    ['김민정', 22],
    ['카리나', 23],
]


const aespaMembers = new Aespa(members);

console.log(aespaMembers.aespaMembers(members));