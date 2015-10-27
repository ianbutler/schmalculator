function Calculator() {}

Calculator.prototype.add = function( num1, num2 ) {
	return num1 + num2;
};

Calculator.prototype.subtract = function( num1, num2 ) {
	return num1 - num2;
};

Calculator.prototype.multiply = function( num1, num2 ) {
	return num1 * num2;
};

Calculator.prototype.divide = function( num1, num2 ) {
	if ( num2 === 0 ) { return NaN; }
	return num1 / num2;
}



function ScientificCalculator() {};

ScientificCalculator.prototype = Calculator.prototype;

ScientificCalculator.prototype.sin = function( num1 ) {
	return Math.sin(num1);
};

ScientificCalculator.prototype.cos = function( num1 ) {
	return Math.cos(num1)
};

ScientificCalculator.prototype.tan = function( num1 ) {
	return Math.tan(num1);
};

ScientificCalculator.prototype.log = function( num1 ) {
	return Math.log(num1)
};


function withExponents(){
	this.pow = function ( num1, exp ) {
		return Math.pow( num1, exp );
	};
	this.multiplyExp = function( arr1, arr2 ) {
		return Math.pow( arr1[0], arr1[1]) * Math.pow( arr2[0], arr2[1] );
	};
	this.divideExp = function( arr1, arr2 ) {
		return Math.pow( arr1[0], arr1[1]) / Math.pow( arr2[0], arr2[1] );
	};
};

var calculator = new ScientificCalculator();
withExponents.call( calculator );



/*  
The delay funtion works but isn't a promise.  I don't have any experience 
working with promises but would love to learn.  It's something that is on my list.
*/
var delay = function( time, instance, method, arguments ) {
	// this doesn't work below
	// returns 1 because the value doesn't exist yet until after the settimtout delay kicks in.
	// need to add a promise for it to fully work
	return setTimeout(instance[method], time, arguments[0], arguments[1]);
}


