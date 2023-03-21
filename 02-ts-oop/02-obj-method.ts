class MyDate2{
    year: number;
    month: number;
    day: number;
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
//const myDate = new MyDate(1995, 2, 15);
//console.log(myDate);
const myDate2 = new MyDate2(1978, 3, 7);

console.log(myDate2.printdate());