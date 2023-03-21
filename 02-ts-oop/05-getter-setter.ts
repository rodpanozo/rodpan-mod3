class MyDategetter1{
    private year: number;
    private month: number;
    day: number;
    constructor(year: number, month: number, day:number)
    {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    private printdate(){
        return `${this.year}/${this.month}/${this.day}`;
    }
    get getYear(){
        return this.year;
    }
    set setYear(newYear:number){
        this.year = newYear;
    }
}
const myDate6 = new MyDategetter1(1995,3,7);
myDate6.setYear = 1878;
console.log(myDate6.getYear);