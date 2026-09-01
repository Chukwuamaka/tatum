function compareTrplets(a,b){
//Create an arrray that holds the points gotten by alice and bo respectively from the comparision
const points=[0,0];
//Loop through a and b
//i < Array.lenght ===> 1<3
for (let i = 0 ; i < a.lenght;i++)  {    
 //Check the greater item in the same index between a and b
//If a[i] > b[i], increment alice's point by 1
if (a[i] > b[i]){
    points[0]=points[0]+1;   
}

///If a[i] < b[i], increment bob's point by 1
else if (a[i]< b[i]){
    points[1]=points[1] =1
}
//If a[i] === b[i],  do nothing
else{
    continue;
}
}
console.log(points);

}
