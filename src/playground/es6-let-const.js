var nameVar = 'var';
var nameVar = 'let';
console.log('nameVar', nameVar);

let nameLet = 'const';
nameLet = 'int';
console.log('nameLet', nameLet);

const nameConst = 'char';
console.log('nameConst', nameConst);

var fullName = 'Mort Cord';

if(fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}