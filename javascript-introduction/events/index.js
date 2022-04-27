const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("Hello World");
});

const btn3 = document.createElement('button');
btn3.textContent = "Target";
btn3.addEventListener('click', e => console.log(e.target));
btn3.addEventListener('click', e => e.target.style.background = 'blue');
document.body.appendChild(btn3);

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => alert(button.id));
});