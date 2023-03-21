import { Calculadora } from "../src/calculator";
test('adds 1+2 equal 3',() =>{
    //expect(1+2).toBe(3);
    const calc = new Calculadora()
    //expect(1+4).toBe(5);
    //actual
    const actual = calc.sumNumber(1,2);

    //expected = 3
    const expec =3;
    expect(actual).toBe(expec);
});
test('substract 1 - 2 to equal -1',() =>{
    const calc = new Calculadora();
    //actual
    const actual = calc.restNumber(1,2);
    //expected
    const expec = -1;
    expect(actual).toBe(expec);
    expect(actual).toBeTruthy;
});
