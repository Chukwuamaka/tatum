const age : number = 25;

const Name : string = "John Doe";

const isStudent : boolean = true;

const hobbies : string[] = ["reading", "gaming", "coding"];
const mixArray : (string | number | boolean)[] = ["hello", 42, true];

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
};

interface Car {
    make: string;
    model: string;
    year: number;
}

const student : Person = {
    name: "Alice",
    age: 20,
    isStudent: true
};

const motor : Car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

interface Animal {
    id : string,
    name : string;
    species: string;
    sound: string;
    nameOfSpring : string,
    habitat: string;
    isHermaphodite: boolean;
    isWalking: boolean;
}

interface Mammal {
    reproductionType : string,
}

interface Dog extends Pick<Animal, "id" | "name" | "sound">, Mammal {
    noOfLimbs : number;
}

interface Cat extends Omit<Animal, "habitat" | "isHermaphodite">, Mammal {
    noOfLimbs : number;
}

interface Bird extends Partial<Pick<Animal, "id" | "name" | "sound">> {
    noOfLimbs : number;
}

const bird : Bird = {
    noOfLimbs: 1
}

function joinOrSplit(data: string | string[]): string | string[] {
    if(typeof data === "string") {
        return data.split(" ");
    } else {
        return data.join(" ");
    }
}