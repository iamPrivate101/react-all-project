//array

const arr1 = [1,2,3,4,5]

const hero = ["spiderman", "iron man" , "strange"]

const money = new Array("rs" , "dollar", "ionr")

console.log(arr1)
console.log(arr1[3])

arr1.push(6)
arr1.push(7)
console.log(arr1)

const lastElement = arr1.pop()
console.log(arr1)
console.log(lastElement)

arr1.unshift(9) //push 9 in the first of array
console.log(arr1)

arr1.shift()  //pops teh arry from first
console.log(arr1)

console.log(arr1.includes(3))  //if there is 3 in index then returns true else false

console.log(arr1.indexOf(9)) //-1 means its not present in the array
console.log(arr1.indexOf(4))  //returns the index number 3


//converting the array to string
const newArray = arr1.join()
console.log(newArray)
console.log(typeof newArray)

console.log("#################")

const arr = [0,1,2,3,4,5,6]

console.log("A", arr )  //[0,1,2,3,4,5,6]
const mya1 = arr.slice(1,4)  
console.log(mya1)       //[1,2,3]  starts from the index and ends before the last value 
console.log("B", arr)  //[0,1,2,3,4,5,6]

//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(arr.splice(1,4))  //[1,2,3,4,]   all the array from start to end and remove from original array
console.log("C" , arr)      //[0,5,6]  splice element will be remove and only remaining element will be there in orginal array


