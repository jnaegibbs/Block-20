
const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const root = document.getElementById("root");

    const h1 = document.createElement("h1");
    h1.innerText = "FREELANCERS";
    root.appendChild(h1);

    const ul = document.createElement("ul");
    root.appendChild(ul); 
    const li = document.createElement("li");
    users.forEach((users) => {
        return users.name;
    })
    li.innerText = users.name;
    root.appendChild(li);
    };
    


//call the main function
main(); 

//Continue working inside your main() function to create an unordered list element.
//Loop through the users array creating li elements. 