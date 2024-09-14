const metadataMap = new WeakMap();

const winter: any[] = [];
const userLoginInfo: any[] = [];

function setMetadata<T>(target: any, key: string, value: T) {

    if (!metadataMap.has(target)) {
        metadataMap.set(target, new Map())
    }

    const targetMeta = metadataMap.get(target);
    targetMeta.set(key, value)

}



function getMetadataKey(target: any, key: string): any | undefined {

    const targetMeta = metadataMap.get(target);
    return targetMeta ? targetMeta.get(key) : undefined

}



function getAllMetadataKey<T>(target: any): Record<string, T> | undefined {

    const targetMeta = metadataMap.get(target);
    if (!targetMeta) {
        return undefined
    }
    return Object.fromEntries(targetMeta);
}


setMetadata(winter, "part", "visual")
setMetadata(winter, "name", "김민정")
setMetadata(winter, "age", 23)
setMetadata(winter, "Female", true)

console.log(getAllMetadataKey(winter))
console.log(getMetadataKey(winter, "age"))


