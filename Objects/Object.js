const mySym = Symbol("key1")

const Jsuser = {
  name : "Farook",
  "fullname": "Farook Ahmed",
  [mySym]:"myKey1",
  age : 24,
  location: "Karachi",
  email: "Farook.behan@gmail.com",
  isloggedin: false,
  LastLoginDays: ["Monday", "Tuesday"]
}
Jsuser.greeting = function() {
  console.log("Hello Js user");
}
Jsuser.greetingtwo = function() {
  console.log(`Hello Js user, ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());

Jsuser.email = "Farook.behan@gmail.com"
//Object.freeze(Jsuser)
Jsuser.email = "zafar.behan@gmail.com"
//console.log(Jsuser);
console.log(typeof Jsuser[mySym])
console.log(Jsuser["fullname"])
console.log(Jsuser.name)
console.log(Jsuser["name"])