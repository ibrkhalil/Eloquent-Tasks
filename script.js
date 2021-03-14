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

