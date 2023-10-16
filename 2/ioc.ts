class A{
    name:string;
    constructor(name:string){
        this.name = name;
    }
}
class B{
    a:any;
    c:any;
    constructor(mo:Container){
        // 弱耦合
        this.a = mo.get('a');
        this.c = mo.get('c');
        // 强耦合
        // this.a = new A('starmars哈哈哈').name;
    }
}
/**
 * class C{
    a:string;
    constructor(){
        // 强耦合
        // this.a = new A().name;
    }
}
*/

class C{
    name:string;
    constructor(name:string){
        this.name = name;
    }
}
class Container{
    modules:any;
    constructor(){
        this.modules = {};
    }

    // 收集类的引用，注入到容器中
    provide(key:string, module:any){
        this.modules[key] = module;
    }

    get(key:string){
        return this.modules[key];
    }
}

let container = new Container();
container.provide('a', new A('starmars哈哈哈'));
container.provide('c', new C('starmars哈哈哈2'));