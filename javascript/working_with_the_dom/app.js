// // what is the DOM?
// // DOM = document object model

// const h1 = document.getElementById('main-title');
// h1.textContent = 'Some new Title!';
// h1.style.color = 'white';
// h1.style.backgroundColor = 'black';

// const li = document.querySelector('li:last-of-type');
// li.textContent = li.textContent + ' (Changed!)';

// const body = document.body;

// const listItemElements = document.getElementsByTagName('li');

// for (const listItemElem of listItemElements) {
//     console.dir(listItemElem);
// }

const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

button.addEventListener('click', () => {
    // if (section.className === 'red-bg visible') {
    //     section.className = 'red-bg invisible';
    // } else {
    //     section.className = 'red-bg visible';
    // }

    section.classList.toggle('visible');
    section.classList.toggle('invisible');
});

