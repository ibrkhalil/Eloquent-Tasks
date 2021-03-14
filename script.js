// hashCount = "";
// for(let i = 0; i<8; ++i){
//     for(let j = 0; j<i; ++j)
//         {
//             hashCount+='#';
//         }
//     console.log(hashCount+"\n");
//     hashCount = "";
// }
// task 1

// for(let i = 1; i<=100; ++i){
//     if(i % 5 == 0 && i % 3 == 0)
//         console.log('fizzbuzz');
//     else if(i % 3 == 0)
//         console.log('fizz');
//     else if(i % 5 == 0)
//         console.log('buzz');
//     else
//     console.log(i);
// }
// task 2

// let gridRow = '';
// let gridN = 8;
// for(let i = 0; i<gridN; ++i)
// {
//     if(i % 2 == 0)
//     {
//       for(let j = 0; j < gridN/2; j++)
//         gridRow+=' #';
//         console.log(gridRow,'\n');
//         gridRow='';}
//     else
//     {
//       for(let j = 0; j < gridN/2; j++)
//         gridRow+='# ';
//         console.log(gridRow,'\n');
//         gridRow='';}
// }
// task 3

// let min = (x,y) => (x>y) ? y : x;
// task 4

// let recursiveEvenOdd = (x) => {
//     if (x == 2)
//         return true;
//     else if(x == 1)
//         return false;
//     else
//         return recursiveEvenOdd(x-2);
// }
// task 5

// let countBs = (str) => {
//     return countChar(str,"B")
// }
// let countChar = (str,target) => {
//     let count = 0;
//     for(let i = 0; i<str.length; ++i)
//         if(str[i] == target)
//         count++;
//         return count;
//     }
// task 6

// let range = (arrStr,arrEnd,step=1) => {
//     let nums = [];
//     if(step>=1)
//     for(let i = arrStr; i<=arrEnd ; i+=step)
//         nums.push(i);
//     else{
//         for(let i = arrStr; i>=arrEnd ; i+=step)
//         nums.push(i); 
//     }
//     return nums;
// }
// console.log(range(5,2,-1));

// let sum = (arr) => {
//     let total = 0;
//     for(let i = 0; i<=arr.length; ++i){
//         total += i;
//     }
//     return total
// }
// console.log(sum(range(1,10)));
// task 7

// let reverse = (arr) => {
//     let newArr = [];
//     for(let i = 0; i<arr.length; ++i)
//         newArr.unshift(arr[i])
//     return newArr;
// }

// let reverseInPlace = (arr) => {
//     let temp = []
//     let length = arr.length;
//     for(let i = 0; i<length ; ++i){
//         temp[i] = arr.pop();
//     }
//     return temp;
// }
// console.log(reverseInPlace([10,20,30,40]));
// task 8