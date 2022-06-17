//1.create a <p> "Hey I'm red" , colored red

//create the element in the document
const paragraph = document.createElement('p');
//select an existing element in the document
const container = document.querySelector('#container');

//change the text of p
paragraph.textContent = 'Hey I\'m red!';
//set the color to red
paragraph.style.color = 'red';
//display p on the page by nesting under an existing element
container.appendChild(paragraph);

//2.create an <h3> tag: "I'm a blue h3!" , colored: blue
const header3 = document.createElement('h3');
header3.textContent = 'I\'m a blue h3!';
header3.style.color = 'blue';

//reuse container from earlier
container.appendChild(header3);

