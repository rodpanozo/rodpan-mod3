//interface no tiene una implementacion de comportamiento

export interface Driver{
    //Atributos
    database: string;
    password: string;
    port: string;

    //metodos
    connect(): void;
    disconnect(): void;
    isConnected(name: string):boolean;
}
//const driverX = new Driver();

const driver: Driver ={
    database: '',
    password: '',
    port: '456',
    connect: function (): void{
        throw new Error("Function not implemented")
    },
    disconnect: function(): void{
        throw new Error("Function not implemented")
    },
    isConnected: function(): boolean{
        throw new Error("Funtion not implemented")
    }
}