export class Animal{
    constructor(public name: string){}
    move(){
        console.log('Moving ..... !!!');
    }
    greeting(){
        return `Hello I'm ${this.name}`;
    }
}
//const pet1 = new Animal('pelusa');
//console.log(pet1.greeting());

export class Cat extends Animal{}
export class Dog extends Animal{
    owner: string 
    constructor(name: string, owner: string){
        super(name);
        this.owner = owner;
    }

woof(){
    console.log('WOOFFFFF ...');
    }
}

const dog1 = new Dog('Nena','Bob');
console.log(dog1.greeting());
console.log(dog1.woof());

//Polimorfismo
const pet3: Animal = new Dog('petname','owner')
