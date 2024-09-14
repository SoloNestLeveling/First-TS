

const mataMap = new Map<any, any>();
const UserInfo: [string, string][] = [];



const setMataData = (target: any, key: string, value: [string, string][]) => {

    if (!mataMap.has(target)) {
        mataMap.set(target, new Map());
    }

    const targetMata = mataMap.get(target)
    const keyValuePairs = Object.fromEntries(value)

    targetMata.set(key, keyValuePairs);
}




const getMataKey = (target: any, key: string): Record<string, string> | undefined => {
    const targetMata = mataMap.get(target);

    return targetMata ? targetMata.get(key) : undefined;

}



const getAllMetadata = (target: any): Record<string, string> | undefined => {
    const targetMata = mataMap.get(target);

    return targetMata ? Object.fromEntries(targetMata) : undefined
}



const getPassword = (target: any, key: string): string | undefined => {

    const userKey = getMataKey(target, key)
    return userKey ? userKey["password"] : undefined
}


const getAllPasswords = (target: any): string[] => {
    const targetMata = mataMap.get(target);

    if (!targetMata) {
        return [];
    }

    const passwords: string[] = [];
    targetMata.forEach((key: any) => {
        const password = key["password"];
        if (password) {
            passwords.push(password);
        }
    });

    return passwords;
}




setMataData(UserInfo, "user1", [["Id", "Winter"], ["password", "dkoe03042##"]])
setMataData(UserInfo, "user2", [["Id", "KyungMin"], ["password", "eisn3821**"]])

console.log(getMataKey(UserInfo, "user1"))
console.log(getAllMetadata(UserInfo))
console.log(getPassword(UserInfo, "user1"))

console.log(getAllPasswords(UserInfo))
console.log("-----------------------------")


// 이상 접속시 패스워드 hash화 하기




enum AccessUserInfo {
    Normal,
    Worring

}

let accessString = {};
let normalString: string[] = [];
let warringSting: string[] = [];

const accessUserInfo = (message: string, target: any, access: AccessUserInfo = AccessUserInfo.Normal) => {

    const timeStamp = new Date().toISOString();


    switch (access) {
        case AccessUserInfo.Normal
            : accessString = "Normal";
            break;

        case AccessUserInfo.Worring
            : accessString = "Worring"
            break;
    }

    const logRecord = `${timeStamp}  [${accessString}] : ${message} `

    if (access === AccessUserInfo.Worring) {
        warringSting.push(logRecord)
    } else {
        normalString.push(logRecord)
    }

    if (warringSting.length > 0 && access === AccessUserInfo.Worring) {
        console.log(getAllPasswords(UserInfo));
    }



}




accessUserInfo("이상 접속 발생", UserInfo, AccessUserInfo.Worring);
accessUserInfo("정상 접속", UserInfo, AccessUserInfo.Normal);

console.log(warringSting)
console.log(normalString)
console.log(UserInfo)


