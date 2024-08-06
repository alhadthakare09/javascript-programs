console.log("========1=======");

function one(){
    console.log("Its my first function ");
    
}
one()

function two(){
    console.log("Its my second function");
    
}
two()

console.log("========2=======");

function personalDetails(firstname,lastname,collegeName){
     console.log("My firstname is:",firstname);
     console.log("My lastname is:",lastname);
     console.log("My collegename is:",collegeName);
    
    
}
personalDetails('alhad','thakare','moze');


console.log("========3=======");

function addThreeValues(x,y,z){
    console.log("The Three Values are:",x,y,z);
    var res = x+y+z
    console.log("The Final result is :",res);
    
    

}
addThreeValues(10.23,600,40)
addThreeValues('hello','good','morning')

console.log("========4=======");

function bankDetails(bankName,accountNum,location,pinCode){
    console.log("The bank details are:",bankName,accountNum,location,pinCode);
    

}
bankDetails('CITI bank',345678978,'pune',34657)
bankDetails('Axis bank',445623978,'pune',45657)
bankDetails('HDCC bank',645638978,'pune',94657,'open')



