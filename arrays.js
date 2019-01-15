const numbers = [1,2,3,4,5,6,7,8,9];
const names =['shrek','fiona','farquad'];

const values = [...names,...numbers ];
console.log(values);

const mutant = {name: 'Xavier', power: 'Telepatia', rank: 5}
const mutant2 = {...mutant,name: 'Magneto', power: 'Magnetismo', rank: 4}

//iterations
for(let i=0;i<names.lenght;i++){
	if(i==1){
		break;
	}
	console.log(names[i]);
}


//== comparar
//=== valor


function logitems(item,index,arregloriginal){
	console.log(`name:  ${item} at item:  ${index}`);
	console.log(arregloriginal);
}

names.forEach(logitems);


const myfunction = function(name){
	console.log('oles '+ name)
}

myfunction('hitler');


const sum = (a,b) =>{return a + b};
const resta = (a,b) => a - b;

names.forEach(item => console.log(item));

const fullnames=[];
names.forEach(item => fullnames.push(item + 'Cendejas'));
console.log(fullnames);

const output2 = names.map(item => item+' Cendejas');
console.log(output2);
//names.map(item => )