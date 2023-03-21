//reducir la creacion de objetos de las clases base o clases padres

export abstract class Animal2{
    constructor(protected name: string){}
    move(){
        console.log('Moving .....');
    }
    greeting(){
        return `Hello I'm ${this.name}`;
    }
}

