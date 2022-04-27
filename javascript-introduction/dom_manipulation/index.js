p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";
document.body.appendChild(p);

h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
document.body.appendChild(h3);

div = document.createElement("div");
div.style.cssText = "border: solid black; background-color: pink"

h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);
p2 = document.createElement("p");
p2.textContent = "ME TOO!";
div.appendChild(p2);

document.body.appendChild(div);