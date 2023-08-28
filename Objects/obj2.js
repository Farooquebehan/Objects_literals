// const tinderUser = new Object()
 //following is non singleton obj and above is singleton obj
const tinderUser = {}

tinderUser.id = "125 cd"
tinderUser.name = "farook"
tinderUser.isloggedin = false
// console.log(tinderUser);

 const regularUser = {
    email: "farook.behan@gmail.com",
    fullname:{
        username: {
            firstname:"Farook",
            lastname:"Ahmed"

        }
    }
 }
 //console.log(regularUser.fullname.username);

 const obj1 = {1:"a" ,  2:"b" }
 const obj2 = {3:"a" , 4:"b" }

 //const obj3 = {obj1, obj2}
//  const obj3 = Object.assign({},obj1, obj2)
 const obj3 = {...obj1, ...obj2}
 console.log(obj3);
const user = [
    {
        id:1,
        email:"Farook.behan@gmail.com"
    },
    {
        id:1,
        email:"Farook.behan@gmail.com"
    },   
]

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isloggedin'));



