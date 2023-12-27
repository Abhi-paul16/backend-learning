// JS Classes

// contructors will call automatically when we initialize object through class.


class User {
    constructor(username , email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptedPassword(){
        return `${this.password}djhwjdw`
    }

    changeUsername(){
       return `${this.username.toUpperCase()}` 
    }
}


const chai =  new User("chai" , "chai@gmail.com", "123");

console.log(chai.encryptedPassword());