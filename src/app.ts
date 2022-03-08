export {}
type User = {
    id: number,
    name: string
}

const a: number = 10;
const b: number = 20;
const status: boolean = true;
const myName: string = "Nguyen Chi Dũng";
const myAge: number = 20;
const myObj: User = {id: 1, name: "Dũng"};

const numberArr: number[] = [1,2,3,4];
const stringArr: string[] = ["a", "b", "c"];
const objectArr: User[] = [{id: 1, name: "A"}, {id: 2, name: "B"}]

function sum(numA: number, numB:number):number{
    return numA + numB
}
sum(a,b)