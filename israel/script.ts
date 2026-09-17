const username: string = "Edim";
const age: number = 25;
const isActive: boolean = false;
const array = [1,2];

const arrayOfArray: Array<number>[] = [[1,2]] 
const anotherArrayOfArray: number[][] = [[3,4]] // reads backwards "array of array of number"
// Array<number> ==> number[]
const arr: Array<Array<string>> = [["Edim", "John", "Paul"]];

let mixedArray: (number | string)[] = ["Viki", "Doyin", 1, 2]
let differentArrayReassignment: number[] | string[] = [1, 2, 3]
differentArrayReassignment  = ["Lukman", "Francis"];

function compareTriplets(a: number[], b: number[]): number[]{
  return [1, 2];
}

const customerDetails: {
  name: string;
  age: number;
  status: string;
  isActive: boolean
} = {
  name: "Richard",
  age: 32,
  status: "sleeping",
  isActive: false
}

// we can store a data type in a variable and use it 
type randomType = number;
let random:randomType = 4;

type CustomerDeets= {
  name: string;
  age: number;
  status: string;
  isActive: boolean
}

// we can also use the interface keyword

interface CustomerDets {
  name: string;
  age: number;
  status: string;
  isActive: boolean
}

let customer:CustomerDeets = {
  name: "Victoria",
  age: 28,
  status: "Not sleeping",
  isActive: true
}

// to extend the type created with the type keyword, we use "&" but to extend a type with the interface keyword, we use "extends"

type CustomerDeetsWithBalance = CustomerDeets & {
  balance: number
}

interface CustomerDetsWithBalance extends CustomerDeets {
  balance: number
}

// An interface keyword can only used for an object

// you can make a property readonly by using the "readonly" keyword or optional by using the "?" operator
interface customer {
  readonly id: string;
  name: string;
  email?: string;
}

// We can also use the square bracked notation to extend a particular property
type FirstCustomer = customer["email"]

// You can also use the Pick in-built function to extend more than one property
type secondCustomer = Pick<customer, "email" | "id">

// We can also use the "Omit" keyword to omit some properties just like pick
// We use the "Partial" generic to make the extended properties optional

interface Animal {
  id: string;
  name: string;
  sound: string;
  nameOfOffspring: string;
  habitat: string;
  isHermaphrodite: boolean
}

interface Mammal {
  reproductionType: string;
}

interface Dog extends Pick<Animal, "id" | "name" | "sound">, Mammal {
  noOfLimbs: number;
}

interface Cat extends Omit<Animal, "habitat" | "isHermaphrodite">, Mammal {
  noOfLimbs: number;
}

interface Bird extends Partial<Pick<Animal, "habitat" | "isHermaphrodite">> {
  noOfLimbs: number;
}

const bird: Bird = {
  noOfLimbs: 1,
  isHermaphrodite: false
}

interface Lizard extends Partial<Animal> {
  color: string
}