// 'use strict'
// function Phone(brand, price, color, display, RamMemory, Procesor){
// 	this.brand = brand;
// 	this.price = price;
// 	this.color = color;
// 	this.display = display;
// 	this.RamMemory = RamMemory;
// 	this.Procesor = Procesor;
// }
// Phone.prototype.printInfo = function() {
// 	console.log(" The phone brand is " + this.brand + " color is " + this.color + " and the price is " + this.price + "." + " size of display is " + this.display + " Ram Memory = " + this.RamMemory + " Smartphone use processor " + this.Procesor);
// }

// var iPhone11Pro = new Phone("Apple", 2250, "silver", "5.80'/463ppi/OLED/1125x2436px", 6, "Apple A13" );
// var SamsungGalaxyS10 = new Phone("Samsung", 2600, "black", "6.10'/551ppi/AMOLED/1440x3040px", 8, "Samsung Exynos 9820" );
// var OnePlus7Pro = new Phone("OnePlus", 3600, "bluegradient", "6.67'/515ppi/AMOLED/1440x3120px", 6-8-12, "Qualcomm Snapdragon 855" );

// iPhone11Pro.printInfo();
'use strict'

function Button(text) {
	this.text = text || 'Hello';
}
Button.prototype = {
	create: function() {
		var self = this;
		this.element = document.createElement('button');
		this.element.innerText = this.text;
		this.element.addEventListener('click', function() {
			alert(self.text);
		});
		document.body.appendChild(this.element)
	}
}

var btn1 = new Button('Hello!');
// Wywołanie funkcji tworzącej element
btn1.create();