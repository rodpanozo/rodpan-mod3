console.log(Math.PI);
console.log(Math.max(1,2,3,8,5,9));

class MyMathv2{
    //el uso de read only restringe que la variable se edite
    static readonly PI=3.1415;
    static CONSTANTE =99;

    static max(...numbers: number[]){
        return Math.max(...numbers);
    }
}

console.log(MyMathv2.PI)
console.log(MyMathv2.CONSTANTE)
console.log(MyMathv2.max(5,9,12,6,8,88));
