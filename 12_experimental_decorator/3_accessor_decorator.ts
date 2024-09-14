/**
 * 
 * accessor decorator
 */

class Reactangle {
    #height: number;
    #width: number;

    constructor(height: number, width: number) {
        this.#height = height;
        this.#width = width;
    }
    @Configurable(false)
    get height() {
        return this.#height;
    }
    @Configurable(false)
    get width() {
        return this.#width;
    }

}

function Configurable(configurable: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        descriptor.configurable = configurable;
    }

}

console.log(Object.getOwnPropertyDescriptors(Reactangle.prototype));