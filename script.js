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

// let newArr = [];
// let listToArray = (list) => {
//     if(list === undefined)
//         return newArr;
//     newArr.unshift(list.value)
//     // console.log(newArr);
//     return listToArray(list.rest)
// }

// let arrayToList = (arr) => {
//     let rest;
//     for(let i = 0; i<arr.length; ++i)
//        rest = {
//             value:arr[i],
//             rest
//         }        

//     return rest;
// }
// console.log(listToArray(arrayToList([1,2,3])));
// task 9

// let deepEqual = (x,y) => {
//     if (x === y)
//         return true;
//     else if (typeof x === undefined || typeof y === undefined)
//         return false;


//         if(typeof x === 'object' && typeof y === 'object')        
//          {
//             if(x === null || y === null)
//                 return false
//             else
//             for(let i = 0; i < Object.keys(x).length; ++i)
//                 if(Object.keys(x)[i] !== Object.keys(y)[i])
//                 return false;
//             return true;    
//          }
//         return false
// }

// task 10

// let reducer = (arr) => 
//         arr.reduce((accumulator,currentValue) => {
//            return accumulator = accumulator.concat(currentValue)
//         },[])

// let test = [[10,20,30],[40,50,60],[70,80,90]]
// console.log(reducer(test))

// task 11

// let loop = (val,test,update,body) => {

//     for(;;){
//         if(!test(val))
//             break
//         else
//         {
//             body(val)

//         }
//         val += update;
//     }
// }
// let i = 1;
// loop( i, test => test<10,1,(i) => {console.log(i)})

// task 12

// let everyLoop = (arr,test) => {
//     for(let i = 0; i < arr.length; ++i)
//     {
//         if(!test(arr[i]))
//             return false
//     }
//     return true
// }

// let everyLoopSome = (arr,test) => {
//     let result = arr.some(test)
//     return result
// }

// task 13

// function characterScript(code) {
//   for (let script of SCRIPTS) {
//     if (script.ranges.some(([from, to]) => code >= from &&
//                                            code < to)) {
//       return script;
//     }
//   }
//   return null;
// }

// function countBy(items, groupName) {
//   let counts = [];
//   for (let item of items) {
//     let name = groupName(item);
//     let known = counts.findIndex(c => c.name == name);
//     if (known == -1) {
//       counts.push({name, count: 1});
//     } else {
//       counts[known].count++;
//     }
//   }
//   return counts;
// }

// didn't solve task 14 (Dominant Writing Direction)
/************************************************************************************************************************************************* */
// class Vector {
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//         this.magnitude = Math.sqrt (Math.pow(x,2) + Math.pow(y,2));
//     }

//     plus(vector){
//         return this.magnitude + vector.magnitude
//     }

//     minus(vector){
//         return this.magnitude - vector.magnitude
//     }

//     get length(){
//         return this.magnitude
//     }
// }


// let v1 = new Vector(2,2);
// let v2 = new Vector(4,4);
// console.log();

// task 15

// class Group {
//     constructor(arr) {
//         this.arr = arr;
//     }

//     add(item) {
//         for (let i = 0; i < this.arr.length; ++i)
//             if (item === this.arr[i])
//                 return null;
//         this.arr.push(item)
//     }

//     delete(item) {
//         for (let i = 0; i < this.arr.length; ++i)
//             if (this.arr[i] === item)
//                 this.arr.splice(i, 1)
//     }

//     has(item) {
//         for (let i = 0; i < this.arr.length; ++i)
//             if (this.arr[i] === item)
//                 return true;
//         return false;
//     }

//     static from(arr) {
//         let temp = [];
//             arr.map((item,index) => {
//                 for(let i = index+1; i<arr.length; ++i)
//                     if(arr[i] === item)
//                         arr.splice(i,1)
//             })   
//         return arr;
//     }
// }

// task 16

// class Group {
//     constructor(arr) {
//         this.arr = arr;
//     }

//     add(item) {
//         for (let i = 0; i < this.arr.length; ++i)
//             if (item === this.arr[i])
//                 return null;
//         this.arr.push(item)
//     }

//     delete(item) {
//         for (let i = 0; i < this.arr.length; ++i)
//             if (this.arr[i] === item)
//                 this.arr.splice(i, 1)
//     }

//     has(item) {
//         for (let i = 0; i < this.arr.length; ++i)
//             if (this.arr[i] === item)
//                 return true;
//         return false;
//     }

//     static from(arr) {
//         let temp = [];
//             arr.map((item,index) => {
//                 for(let i = index+1; i<arr.length; ++i)
//                     if(arr[i] === item)
//                         arr.splice(i,1)
//             })   
//         return arr;
//     }
// }

// class GroupIterator {
//     constructor(items){
//         this.items = items;
//         this.count = -1;
//     }

//     next() {

//         if(this.items.length === this.count) return {done: true}

//         return {value:this.items[this.count+=1],done:false}
//     }
// }

// let Iterator = new GroupIterator(Group.from([1,2,3]))
// console.log(Iterator.next());
// console.log(Iterator.next());
// console.log(Iterator.next());
// console.log(Iterator.next());

// task 17

// let obj = Object.create(null)
// console.log(obj);
// obj.hasOwnProperty = (prop) => {
//     for(key in obj)
//         if(key === prop)
//         return true
//         return false
// }
// console.log(obj.hasOwnProperty("hasOwnProperty")) 
// console.log(Object.prototype.hasOwnProperty("hasOwnProperty"))

// task 18

// Retry
// function MultiplicatorUnitFailure() {}

// function primitiveMultiply(a, b) {
//   if (Math.random() < 0.5)
//     return a * b;
//   else
//     throw new MultiplicatorUnitFailure();
// }


// function reliableMultiply1(a, b) {
//   try {
//     return primitiveMultiply(a, b);
//   } catch (e) {
//     if (e instanceof MultiplicatorUnitFailure) {
//       return reliableMultiply1(a, b);
//     } else {
//       throw e;
//     }
//   }
// }

// function reliableMultiply2(a, b) {
//   for (;;) {
//     try {
//       return primitiveMultiply(a, b);
//     } catch (e) {
//       if (e instanceof MultiplicatorUnitFailure) {
//         continue;
//       } else
//         throw e;
//     }
//   }
// }

// console.log(reliableMultiply1(8, 5));
// console.log(reliableMultiply1(6, 6));
// Solution of task "Retry" copied from https://gist.github.com/spamwax/53df78f3f3277b2fb65a and was studied.
//  task 19

