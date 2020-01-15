
const slider = document.querySelectorAll('.color-slider input[type=range]');
// const rSlider = document.querySelectorAll('.color-slider input[name=r]');
// const gSlider = document.querySelectorAll('.color-slider input[name=g]');
// const bSlider = document.querySelectorAll('.color-slider input[name=b]');
const textInput = document.querySelectorAll('.result input[type=number]');
// const picker = document.querySelectorAll('.color-picker input');

function updateColor() {
	console.log(this.name, this.value);
	document.documentElement.style.setProperty(`--${this.name}`, this.value);
	
	const inputResults = document.querySelector(`input[type=number].${this.name}`);
    inputResults.value = `${this.value}`;
    
    //updates slider value after typing in field
    for(i=0; i<3; i++) {
        slider[i].value = textInput[i].value;
    }
}

// function customPicker() {
// 	console.log(`${this.name}`, this.value);
// 	document.documentElement.style.setProperty(`--${this.name}`, this.value);
// }

// function logChange() {
//     console.log(`${this.value}`)
// }

slider.forEach( slider => slider.addEventListener('mousemove', updateColor) );
slider.forEach( slider => slider.addEventListener('change', updateColor) );
textInput.forEach( textInput => textInput.addEventListener('input', updateColor) ); // a way to type in number values
// picker.forEach( picker => picker.addEventListener('change', customPicker) );

// todo