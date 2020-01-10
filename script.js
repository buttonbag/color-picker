
const slider = document.querySelectorAll('.color-slider input[type=range]');
const textInput = document.querySelectorAll('.result input[type=number]');
// const picker = document.querySelectorAll('.color-picker input');

function updateColor() {
	console.log(this.name, this.value);
	document.documentElement.style.setProperty(`--${this.name}`, this.value);
	
	const results = document.querySelector(`input.${this.name}`);
    results.value = `${this.value}`;

    // update sliders after typing
    // console.log(results);
}

// function customPicker() {
// 	console.log(`${this.name}`, this.value);
// 	document.documentElement.style.setProperty(`--${this.name}`, this.value);
// }

function logChange() {
    console.log(`${this.value}`)
}

slider.forEach( slider => slider.addEventListener('mousemove', updateColor) );
slider.forEach( slider => slider.addEventListener('change', updateColor) );
textInput.forEach( textInput => textInput.addEventListener('input', updateColor) ); // a way to type in number values
// picker.forEach( picker => picker.addEventListener('change', customPicker) );

// todo