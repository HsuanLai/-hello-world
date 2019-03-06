function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Hsuan ohoh", lastName: "User hahaha" };
document.body.innerHTML = greeter(user);
