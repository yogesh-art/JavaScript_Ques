//How to return unique elements from an array-->Using filter,indexOf
// const arr = [1,2,2,3,4,4,5,7,7,1];

// const result = arr.filter((ele,index,self)=>{
//   return self.indexOf(ele) === index
// })


// console.log(result);

//How to return unique elements from an array-->Using set
// const arr = [1,2,2,3,4,4,5,7,7,1];

// const result = new Set(arr);

// const finalResult = [...result];

// console.log(finalResult);

//How to return unique elements from an array-->Using for,push
// const arr2 = [];
// const arr1 = [1,2,2,3,4,4,5,7,7,1,70,70];

// for(let i=0;i<arr1.length;i++){
//   if(!arr2.includes(arr1[i])){ 
//     arr2.push(arr1[i]);
//   }
// }

// console.log(arr2);




 
// How to return duplicate elements from an array-->Using filter
// const arr = [1,2,2,3,4,4,5,7,7,1];

// const result = arr.filter((ele,index,self)=>{
//   return self.indexOf(ele) !== index
// })

// console.log(result);



// How to find occurrence of each element in an array

// const arr = [1,2,2,3,4,4,5,7,7,7,7,7,1];
// const obj = {};

// for(let i=0;i<arr.length;i++){
//   const num = arr[i];
//   if(obj[num]){
//     obj[num] = obj[num] + 1;
//   }
//   else{
//     obj[num] = 1;
//   }
// }

// console.log(obj);


//How to find factorial of a given number

// const num=5;

// let fact = 1;
// for(let i=1;i<=num;i++){
//   fact=fact*i
// }

// console.log(fact);


//How to find maximum element from an array using reduce// Can be done using for also
// const arr = [1,3,4,6,5,5,60,70];

// const result = arr.reduce((acc,ele,index)=>{
//   if(ele>acc){
//     acc = ele
//   }
//   return acc;
// },0);

// console.log(result);

//How to find seoncd maximum element from an array for becasue for se easy padega

// const arr = [1,60,60,70,70,6,6,4,5,4];


// const result = arr.filter((ele,index,self)=>{
//   return self.indexOf(ele) === index
// })

// // console.log(result);

// const sortedUniqueArray = result.sort((a,b)=>{
//   return a-b;
// })

// console.log(sortedUniqueArray[sortedUniqueArray.length-2]);



// How do you find the first non-repeating element in an array?
// const arr = [1,1,1,2,2,3,4,5,2,3,2,3,2,5,50];

// for(let i=0;i<arr.length;i++){
//   if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
//     console.log(arr[i]);
//     break;
//   }
// }

//How to check if two arrays are equal

// const arr1 = [1,2,3,6,5];
// const arr2 = [1,2,3,4,5];

// let flag = 1;
// if(arr1.length !== arr2.length){
//   flag=0;
// }else{
//   for(let i=0;i<arr1.length;i++){
//     if(arr1[i]===arr2[i]){
//       flag = 1;
//     }else{
//       flag = 0;
//       break;
//     }
//   }
// }

// if(flag===0){
//   console.log("Not Equal");
// }else{
//   console.log("Equal")
// }


const str1 = 'abcabcdabefabc';

const str2 = "";

for(let i=0;i<str1.length;i++){
  if(!str2.includes(str1[i])){
    str2.push(str1[i]);
  }
}





























