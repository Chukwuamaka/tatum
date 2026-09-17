for (let i = 0;i<5;i += 1){
    console.log('Iteration ${i}');
}
const  greeting ='Hello';
const name = "Doyin";
console.log(greeting + name );
console.log (`${greeting} ${perspn}`);


const students=
    ["Doyin","Tolu","Viki","Debs"];
    for(const student of students){
        console.log(students);
    }

    const student = {
        name :"Doyin",
        age : 25,
        course:"Computer science"
    };

    for(const key in student){
        console.log(`${key}:${student[key]}`); 
    };
    
    function runStringMethods(){
        const str = "Hello World Doyin 2";

        // Sting Methods
        console.log(str.length);
        console.log(str.includes(2) );
        console.log(str.endsWith("World"));
        console.log(str.startsWith("Hello"));
        console.log(str.charAt());
        console.log(str.toLowerCase());
        console.log(str.toUpperCase());
        console.log(str.slice(0.5));
        console.log(str.replace("World","Doyin"));
        console.log(str.trim());
        console.log(str.split(o));
        
    
//All array mehtods please .
const arr = [1,2,3,4,5];
console.log(arr.length);
console.log(arr.join(" "));
console.log(arr.slice(0,2));

//Add new element with arr,splice
arr.splice(2,0,6);// [1,2,6,3,4,5]
arr.splice(2,0,6,7,8);//[1,2,6,7,8,45 ]
//Five more examples of arr,splice
arr.splice(0,1); 
arr.splice(4,1);
arr.splice(3,2);
arr.splice(0,1);
console.log(arr.splice(1,2));

}
runStringMethods();

const users = [
    {name : "Viki", active:true},
    {name :"Debs", active:true},
    {name:"Driz", active:false},

];
const user ={name:"Debs",active :true};
console.log(personnalinfo)
const { active, name :firstName, age} = user;
console.log(firstName ,age);



const userProperties=["name","age","school","department"];
const userPlusCountryArray=[...userProperties,"Nigeria"];
console.log({...userPlusCountryArray});

const number =[1,2,3,4, ];


//for (const user of users){
    
//}
[array].method((item, index,array)=>{}
//DO whatever
);
users.filter((use,index,array) => user.active);
number.forEach((number) => console.log(number));




const specailUser = {
    name:"Debs",
    
}
