class Person{
    constructor(name = 'anon', age = 0){
        this.name = name;
        this.age = age;
    }

    getGretting(){
        // return 'Hi ' + this.name + '!';
        return `Hi, I'm ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old`
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let desc = super.getDescription();

        if(this.hasMajor()){
            desc += ` Their major is ${this.major}`;
        }

        return desc;
    }
}

class Traveler extends Person{
    constructor(name, age, loc){
        super(name, age);
        this.loc = loc;
    }



    getGretting(){
        let greet = super.getGretting();

        if(this.loc){
            greet += `I'm visiting from ${this.loc}`;
        }

        return greet;
    }
}

const me = new Traveler('MortCord', 16, 'vin');
console.log(me.getGretting());

const other = new Student();
console.log(other.getGretting());
console.log(other.getDescription());
console.log(other.hasMajor());