console.log("=======1======");

function stringBasics(){
    console.log("My dream company is Google");
    var hobbyOne = 'reading';
    var hobbyTwo ='singing';
    var hobbyThree = 'dancing';
    console.log("My hobbies are :",hobbyOne,hobbyTwo,hobbyThree);
    res1 = hobbyOne.length
    console.log("length of hobby1:",res1);
    res2 = hobbyTwo.length
    console.log("length of hobby2:",res2);
    res3 = hobbyThree.length
    console.log("lenghth of hobby3:",res3);
    result = res1+res2+res3;
    console.log("The final result is:",result);
}
stringBasics()
console.log("========2=======");

console.log("========A=======");

var str ="     Hey you are doing good, keep it up     " 
console.log("The given string is :",str);

console.log("========length=======");

var len = str.length;
console.log("The length of the string is:",len);

console.log("========trim=======");


var cut = str.trim()
console.log("The trim sentence will be:",cut);

console.log("========length after trim=======");


var len2 = cut.length;
console.log("The length after trim:",len2);

console.log("========space remove=======");


var remove = len - len2;
console.log(`the total number of space remove are: ${remove}`);

console.log("========Char at=======");


var position = cut.charAt(0)
console.log("the character at 0th position :",position);

console.log("========char At=======");


var positionTwo = cut.charAt(cut.length-1)
console.log(`the character at last position :${positionTwo}`);

console.log("========index of=======");


var index = str.indexOf('good')
console.log("The index is:",index);

console.log("========Includes=======");



var present = str.includes('up')
console.log(present);

console.log("========sunstring=======");


var sub = cut.substring(22)
console.log(sub);

console.log("========includes=======");


var present01 = str.includes('Hey')
console.log(present01);

console.log("========split=======");


var split = cut.split(" ")
console.log(split);

console.log("=======split length=======");


var len3 = split.length;
console.log(len3);










    
    
    
    
    
