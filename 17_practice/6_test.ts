import { trace } from "console"

type MataType = { [key: string]: [string, string][] }

const mataMap = new Map<any, any>()
const mataKey = Symbol("UserInfo")



//set mata
const setMataData = (target: any, key: string, value: [string, string][]) => {


    if (!mataMap.has(target)) {
        mataMap.set(target, new Map())
    }

    const getTaget = mataMap.get(target)
    const valuePairs = Object.fromEntries(value)

    getTaget.set(key, valuePairs)
}





//get mata value



const getMataValue = (target: any, key: string): {} | undefined => {
    const getTarget = mataMap.get(target)
    return getTarget ? getTarget.get(key) : undefined
}

const getAllMataValue = (target: any): MataType | undefined => {
    const getTarget = mataMap.get(target)

    return getTarget ? getTarget : undefined
}


const getAllMataKey = (target: any): string[] | undefined => {
    const getTarget = mataMap.get(target);

    return getTarget ? Array.from(getTarget.keys()) : undefined;
}


setMataData(mataKey, "User1", [["ID", "winter"], ["PASSWORD", "dhrudas3984"]])
setMataData(mataKey, "User2", [["ID", "aa"], ["PASSWORD", "fenje32201"]])
console.log(getMataValue(mataKey, "User1"))
console.log(getMataValue(mataKey, "User2"))

console.log(getAllMataValue(mataKey))
console.log(getAllMataKey(mataKey))
