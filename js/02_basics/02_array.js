//difference in array push, concat, spread

const marvelHeros = ["thor", "spidey", "staarnge"];
const dcHeros = ["batman", "superman", "joker"];

//PUSH
marvelHeros.push(dcHeros);
console.log(marvelHeros);
// [ 'thor', 'spidey', 'staarnge', [ 'batman', 'superman', 'joker' ] ]
//      0       1           2                   3  dcHeros are inseed as one whole array in 3 index       

//to access spidey
console.log(marvelHeros[1])

//to access jolker
console.log(marvelHeros[3][2])

//#######################################################################################################


// CONCAT
console.log("CONCAT")
const marvel_heros = ["thor", "spidey", "staarnge"];
const dc_heros = ["batman", "superman", "joker"];

console.log(marvel_heros.concat(dc_heros))

// ...SPREAD  BEST PRACTICE
const allHero = [...marvel_heros, ...dc_heros]
console.log(`All heros with spread ${allHero}`)
console.log(allHero)

//#######################################################################################################
console.log("MAKING MULTI LEVEL ARRAY TO FLAT ARRAY ")

const multiLevelArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]  
console.log(multiLevelArray)        //[ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]

const flatLevelArray = multiLevelArray.flat(Infinity) //instead of infinity we can give depth number like 2 or 3 to make it flat upto those leve
console.log(flatLevelArray)   
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]  

// checking if it is array
console.log(Array.isArray("Sameer"))  //false

// converting string to Array
console.log(Array.from("Sameer"));   //[ 'S', 'a', 'm', 'e', 'e', 'r' ]

//interesting , it returns empty array as it should be notify to make array of key or value
console.log(Array.from({name:"sameer"}))   //[]

//MAKING ARRAY OF FROM MULTIPLE VAR
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))




