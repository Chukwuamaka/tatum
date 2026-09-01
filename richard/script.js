function runStringMethods() {
    const str = "Hello World";
    console.log(str.length);
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());
    console.log(str.indexOf("World"));
    console.log(str.slice(0, 5));
    console.log(str.replace("World", "Doyin"));
    console.log(str.trim());
    console.log(str.split("o"));
    console.log(str.charAt(0));
    console.log(str.includes("World"));
    console.log(str.startsWith("Hello"));
    console.log(str.endsWith("World"));

    // All array methods please
    const arr = [1,2,3,4,5];
    console.log(arr.join(" "));
    console.log(arr.slice(0, 2));
    // Add new element with arr.splice
    arr.splice(2, 0, 6); //[1, 2, 3, 4, 5]
    arr.splice(2, 0, 6, 7, 8);
    console.log(arr.splice(1, 2));

}
runStringMethods();