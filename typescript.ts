const username: string = "Edim";
const age: number = 25;
const isActive: boolean = false;
const array: string[] | Array<string> = ["1", "2"];
let mixedArray: (number | string)[] = [1, 2, "1", "2"];

let customerName = "Dayo";
// Trying to reassign to a different data type will throw an error
customerName = 9;

function compare(a: number[], b: number[]): number[] {
  return [];
}

const staircaseProblem = (n: number): string => {
  return "";
};

function compareTriplet(a: number[], b: number[]): number[] {
  // Do something
  return [];
}

const customerDetails: {
  name: string;
  age: number;
  status: string;
  isActive: boolean;
} = {
  name: "Richard",
  age: 82,
  status: "Sleeping",
  isActive: false,
};

customerDetails.name = "Francis";

type RandomType = number | string;
let random: RandomType = 1;
let nonRandom: RandomType = 6;

type CustomerDeet = {
  readonly name: string;
  age: number;
  status: string;
  isActive?: boolean;
};

type AdminInfo = {
  isAdmin: boolean;
  isSuperAdmin: boolean;
};

interface CustomerDeets {
  name: string;
  age: number;
  status: string;
  isActive: boolean;
}

type CustomerDeetsPlusBalance = CustomerDeet & {
  balance: number;
};

// interface CustomerDeetsPlusBalance extends CustomerDeet {
//   balance: number;
// }

// type SampleType =

const customerDeets: CustomerDeet = {
  name: "Richard",
  age: 82,
  status: "Sleeping",
  // isActive: false,
};

const customerDeetsWithBalance: CustomerDeetsPlusBalance = {
  name: "Richard",
  age: 82,
  status: "Sleeping",
  isActive: false,
  balance: 1000,
};

// Variable declaration
const arrowFunc = (param: string): string => {
  return "";
};

// Type declaration
type FunctionType = (param: string) => string;

// const arrowFuncWithType: FunctionType = (param) => {
//   return ""
// }

type GenericFunctionType<R, P> = (param: P) => R;

const arrowFuncWithType: GenericFunctionType<string, string[]> = (param) => {
  return "";
};

// Variable declaration
const num: number = 2;

// Type declaration
type NumberType = number;

const numberThree: NumberType = 3;

interface Animal {
  id?: string;
  name?: string;
  hasSound?: boolean;
  getSound: (p: string) => string;
  nameOfOffspring?: string;
  habitat?: string;
  isHermaphrodite?: boolean;
}

interface Mammal {
  reproductionType: string;
}

interface Dog extends Pick<Animal, "id" | "name" | "hasSound">, Mammal {
  noOfLimbs: number;
}

interface Cat extends Omit<Animal, "habitat" | "isHermaphrodite">, Mammal {
  noOfLimbs: number;
}

interface Bird extends Partial<Pick<Animal, "habitat" | "isHermaphrodite">> {
  noOfLimbs: number;
}

const randomNumber: number = 2;

const bird: Bird = {
  noOfLimbs: 1,
  isHermaphrodite: false,
};

interface Lizard extends Required<Animal> {
  color: string;
}

const Francis: Lizard = {
  color: "blackAndRed",
  hasSound: true,
  id: "",
  name: "",
  getSound: () => "click",
  nameOfOffspring: "",
  habitat: "",
  isHermaphrodite: false,
};

function joinOrSplit(data: string | string[]): string | string[] {
  if (typeof data === "string") {
    return data.split(" ");
  } else {
    return data.join(" ");
  }
}

function firstItem<T>(array: T[]): T {
  return array[0];
}

let numbers = ["1", "2", "3"];
firstItem<string>(numbers);

type TransactionStatus = "pending" | "successful" | "failed";
// String literal types are case-sensitive
const transactionStatus: TransactionStatus = "PENDING";

let israel = 2;
