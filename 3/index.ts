const doc:MethodDecorator = (target:any,key:string|symbol,descriptor:any) => {
    console.log(target, key, descriptor);
}

/**
 * 类装饰器
 * 
 * 
 * @1doc
class Starmars{
    constructor(){
        console.log('Starmars')
    }
}
// 向下兼容
// doc(Starmars)
 * 
 */

/**
 * 属性装饰器
 * 方法装饰器
 * 参数装饰器
 * 
*/
class Starmars{
    
    public name:string;
    constructor(){ 
        this.name = 'starmars'
    }

    @doc
    getName(){
        return this.name;
    }
}
const starmars:any = new Starmars();

console.log(starmars.name)