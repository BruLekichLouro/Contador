let count = 0;

function increment() {
	count++;
	setCurrentNumber(count);
}

function decrement() {
	count--;
	setCurrentNumber(count);
}

function setCurrentNumber(value){
    document.getElementById('currentNumber').innerHTML= value;
}
