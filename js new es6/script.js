// 1

let name "Ivan",
	age = 30,
	mail = 'ex@mail.ru'l

document.write('Пользователю' + name + ' ' + age +' лет. Его почтовый адрес: ' + mail);

let name = "Ivan",
	age = 30,
	mail = 'ex@mail.ru';
document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);

// 2

function varTest() {
	var x = 1;
	if (true) {
		var x = 2;
		console.log(x)
	}
	console.log(x);
}

function letTest() {
	let x = 1;
	if (true) {
		let x = 2;
		console.log(x);
	}
	console.log(x);
}

// 3

function makeArray() {
	var items = [];
	for (var i = 0; i < 10; i++) {
		var item = function() {
			console.log(i);
		};
		items.push(item);
	}
	return items;
}
var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();

// 4

let fun = () => {
	console.log(this);
};

fun();

let obj = {
	number: 5,
	sayNumber: function() {
		let say = () => {
			console.log(this);
		};
		say();
	}
};

obj.sayNumber();

// 5

function calc0rDouble(number, basis) {
	basis = basis || 2;
	console.log(number*basis);
}
calc0rDouble(3,5);
calc0rDouble(6);
 
 // fff

function calc0rDouble(number, basis = 2) {
	console.log(number*basis);
}
calc0rDouble(3,5);
calc0rDouble(6);

// 6

class Rectange {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
	calcArea() {
		return this.height * this.width;
	}
}

const square = new Rectange(10,10);

console.log(square.calcArea());

// 7
 
 let video = ['youtube', 'vimeo', 'rutube'],
 	 blogs = ['wordpress', 'livejournal', 'blogger'],
 	 internet = [...video, ...blogs, 'vk', 'facebook'];
 console.log(internet);

 function log(a, b, c) {
 	console.log(a);
 	console.log(b);
 	console.log(c);
 	console.log(a + b + c);
 }
 let numbers = [2, 5, 7];

 log(...numbers);