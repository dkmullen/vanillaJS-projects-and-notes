// replaceAll()
let string = 'Hello my friends. Nice to see all you friends.';
console.log(string.replaceAll('friends', 'zombies'));

//textContent from html (or use innerHTML?)
let greeting = document.querySelector('#greeting');
let message = greeting.textContent;
greeting.textContent += 'Here is something new to be added to the greeting.';

// also don't forget querySelector and querySelectorAll;

let form = document.querySelector('#form');
let data = new FormData(form);
// Then, can iterate over FormData, w/c returns arrays of [name, value] for form fields

// Array.from - copy an array or get an array from an arrayy-like object like NodeList
let sandwiches = ['turkey', 'tuna', 'ham', 'pb&j'];
let sandwichesCopy = Array.from(sandwiches);

// Get all of the button elements
let btns = document.querySelectorAll('button');

// Create an array of their text content
let btnsArr = Array.from(btns, function (btn) {
	return btn.textContent;
});


