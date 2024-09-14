const crypto = require('crypto');


const metadataMap = new WeakMap();

interface UserInfo {
    id: string;
    password: string
}

const user: UserInfo[] = [];

function setMetadata(target: any, key: string, value: [string, string][]) {

    if (!metadataMap.has(target)) {
        metadataMap.set(target, new Map())
    }

    const targetMeta = metadataMap.get(target);

    const keyValuePairs = Object.fromEntries(value);

    targetMeta.set(key, keyValuePairs);
}



function getMetadataKey(target: any, key: string): any | undefined {

    const targetMeta = metadataMap.get(target);
    return targetMeta ? targetMeta.get(key) : undefined

}



async function getAllMetadataKey(target: any): Promise<Record<string, string> | undefined> {
    const targetMeta = metadataMap.get(target);

    if (!targetMeta) {
        return undefined;
    } else {
        const getMetaKey = getMetadataKey(user, "user1");
        const password = getMetaKey ? getMetaKey["password"] : undefined;

        try {
            const salt = crypto.randomBytes(12).toString('base64');
            console.log('salt:', salt);

            const key = await new Promise<string>((resolve, reject) => {
                crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err: any, key: any) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(key.toString('base64'));
                    }
                });
            });

            console.log('password', key);
        } catch (err) {
            console.error('Error:', err);
        }
    }

    return Object.fromEntries(targetMeta);
}




setMetadata(user, "user1", [["id", "김민정123"], ["password", "koe003212"]])

console.log(getAllMetadataKey(user));



