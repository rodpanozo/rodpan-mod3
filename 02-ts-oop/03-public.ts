// OOP abstraction, herencia, accesibilidad, herencia

class MyDate3{
    year: number;
    public month: number;
    public day: number;
    constructor(year: number, month: number, day:number)
    {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    printdate(){
        return `${this.year}/${this.month}/${this.day}`;
    }
}

const myDate3 = new MyDate3(1978,3,7);
