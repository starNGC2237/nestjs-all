import axios from 'axios';

const Get = (url: string) => {
    return (target: any, key: any, descriptor: PropertyDescriptor) => {
        const fnc = descriptor.value;
        axios.get(url).then((res) => {
            fnc(res, {
                status: 200,
                success: true,
            })
        }).catch((err) => {
            fnc(err, {
                status: 500,
                success: false,
            })
        })
    }
}
class Controller {
    constructor() {

    }

    @Get('https://jsonplaceholder.typicode.com/users')
    getList(res:any,status:any) {
        console.log(res.data,status)
    }
}