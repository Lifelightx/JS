class Person {
    constructor(name, age){
        this.name = name
        this.age = age
        console.log('Object created.')
    }
    intro(){
        return `hello I am ${this.name} and age is ${this.age}`
    }
}

class Programmer extends Person{
    constructor(name, age, lang){
        super(name,age);
        this.lang = lang
    }
    proIntro(){
        return `I know ${this.lang}`
    }
    
}
const devJeeban = new Programmer('Jeeban',22,'Python');
console.log(devJeeban.intro())
console.log(devJeeban.proIntro())
// const jeeban = new Person('Jeeban',12);
// console.log(jeeban.intro())
// const pooja = new Person('Pooja', 11);
// console.log(pooja.intro())