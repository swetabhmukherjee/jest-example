const axios = require('axios');
const URL = 'https://reqres.in/api/users?page=2';
class MyMethods{
    // constructor(){
    //     console.log('MyMethods constructor');
    // }

    getValues(){
        let result = {
            msg: 'Real Function Response'
        };
        return result;
    }
}

module.exports = new MyMethods();