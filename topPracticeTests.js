function capitalize(string){
    let firstChar = string.charAt(0);
    let capFirstChar = firstChar.toUpperCase();
    let restOfString = string.slice(1);
    return capFirstChar+restOfString;
};

function reverseString(string){
    let stringReversed = '';
    for (let index = 0; index < string.length; index++) {
        let letter = string.substring(string.length-index-1,string.length-index);
        stringReversed += letter;
    }
    return stringReversed
};

const calculator = (()=>{
    const add = (a,b) => a+b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };

})();

function caesarCipher(string,key){

    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let cypher = '';

    //reduce keys longer than the alphabet
    while (key>alphabet.length) {
        key -=alphabet.length
    }

    for (let index = 0; index < string.length; index++) {
        const character = string.substring(index,index+1);
        let position = alphabet.indexOf(character);
        let characterCypher = ''
        //if the character isn't in the alphabet, repeat the character
        if(position<0){
            characterCypher = character;
        //else if the position+key is greater than alphabet length, subtract 26
        } else if((position+key)>(alphabet.length-1)){
            characterCypher = alphabet[position+key-alphabet.length]
        //else shift the character
        }else{
            characterCypher = alphabet[position+key]
        };
        cypher += characterCypher;
    }
    return cypher;
};

function analyzeArray(array){

    let object = {};

    //average
    
    let sum = 0;

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sum += element;
        
    }
    object.average = sum/array.length;
    
    //min

    let min = array[0];
    for (let index = 0; index < array.length; index++) {
        let b = array[index+1];
        min =  b<min ? b : min;
        object.min = min; 
    }
    
    //max

    let max = array[0];
    for (let index = 0; index < array.length; index++) {
        let b = array[index+1];
        max =  b>max ? b : max;
        object.max = max; 
    }

    //length
    object.length = array.length

    return object;

    return {
        average: 4,
        min: 1,
        max: 8,
        length: 6
      };
};


module.exports = {
    capitalize, 
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
};






