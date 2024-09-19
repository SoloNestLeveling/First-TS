/**
 * visivility keyword
 * 
 * 1) public (기본값) - 어디서든 접근이 가능하다.
 * 2) protected - 현재 클래스 및 하위(자식) 클래스에서 접근 가능하다.
 * 3) private - 현재 클래스 내부에서만 접근이 가능하다.
 */

class PropertyParent {
    public publicProperty = 'public property';
    protected protectedProperty = 'protected property';
    private privateProperty = 'private property';
    #jsProperty = 'js property'


    this() {        // 이렇게 해당 함수 내부에서는 전부 접근이 가능 하다.
        this.publicProperty;
        this.protectedProperty;
        this.privateProperty;
        this.#jsProperty;
    }

}

class Propertychild extends PropertyParent {
    this() {        // 하지만 자식클래스에서는 private에 접근 할 수 없다.
        this.publicProperty;
        this.protectedProperty;
        //this.privateProperty;
        //this.#jsProperty;
    }
}


const propertyChild = new Propertychild();

propertyChild.publicProperty; // 인스터스시 정상적으로 접근가능
// 하지만 나머지들은 인스턴스에서 접근이 불가능 