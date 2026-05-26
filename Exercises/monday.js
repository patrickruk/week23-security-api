

let contacts = [{
  name: "patrick",
  phone: "0788997733",
  email: "pazzo@pro.com"
},
{
  name: "balacca",
  phone: "0788779933",
  email: "balacca@outlook.com"
},
{
  name: "rebecca",
  phone: "0788779933",
  email: "rebecca@yahoo.com"
}];

console.log("Name of first contact:",contacts[0].name);
contacts[1].country = "Kivu republic";

contacts.push({
  name: "John",
  phone: "0799887733",
  email: "duyaduya@gmail.com"
});

contacts.forEach(contact => console.log("name:",contact.name,"phone",contact.phone,"Email",contact.email));

let findJohn = contacts.find( c => c.name === "john" , console.log("john found!"));

contacts.pop();

console.log("________________ let us print only emails_____________________________ \n");
contacts.forEach(conta =>
  console.log(conta.email)
);
console.log("\n");

