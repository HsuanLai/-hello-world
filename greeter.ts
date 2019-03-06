interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Hsuan ohoh", lastName: "User hahaha" };

document.body.innerHTML = greeter(user);