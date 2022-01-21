console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('Your form has been submitted successfully')
	console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function compliment() {
	alert("You're gorgeous, I love you, give me kisses.")
}
let duck = document.querySelector(".duck")
duck.addEventListener('mouseover',compliment)