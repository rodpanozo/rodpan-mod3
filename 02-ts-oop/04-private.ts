class MyDategetter{
    private year: number;
    private month: number;
    private day: number;
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
const myDate5 = new MyDategetter(1995,3,7);
myDate5.setYear = 1878;
console.log(myDate5.getYear);