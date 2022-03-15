let ob = {};
console.log(ob);

let objSejal = {
  Name : "Sejal",
  Age : 20,
  PhoneNo : 9266473867,
  lastName : 'Singh'
};

console.log(objSejal);

let capAmerica ={
    Name: 'Steve',
    Age : 56,
    Friends : ['Natasha', 'Thor', 'Tony'],
    Address: {
        City: 'Queens',
        State: 'Haryana'
    },
    sayHi(){
        console.log("Cap America Says Hiii!!")
    }
}

//whole object
//console.log(capAmerica);

//name of capAmerica
console.log(capAmerica.Name);
//age of capAmerica
console.log(capAmerica.Age);
//friemds of capAmerica
console.log(capAmerica.Friends)
//address object
console.log(capAmerica.Address)
//city of address object
console.log(capAmerica.Address.City);
//sayHi function
console.log(capAmerica.sayHi())

//add a new key
capAmerica.Movies= ['Avengers', 'Civil war', 'Endgame']
console.log("Object after update : ", capAmerica);

//deleting a  key
delete capAmerica.Movies;
console.log("Object after deletion : ", capAmerica )

capAmerica.Friends[5] = "Added";
console.log(capAmerica.Friends)