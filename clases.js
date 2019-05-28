"use strict";
var Calculadora = /** @class */ (function () {
    function Calculadora(valorNumero1, valorNumero2) {
        console.log('iniciando calculadora');
        this.numero1 = valorNumero1;
        this.numero2 = valorNumero2;
        console.log('numeros que se sumaran restaran multiplicaran y dividiran');
        console.log('Primer numero es : ' + this.numero1 + ' Segundo numero es : ' + this.numero2);
    }
    Calculadora.prototype.sumar = function () {
        return this.numero1 + this.numero2;
    };
    Calculadora.prototype.restar = function () {
        return this.numero1 - this.numero2;
    };
    Calculadora.prototype.multiplicar = function () {
        return this.numero1 * this.numero2;
    };
    Calculadora.prototype.dividir = function () {
        return this.numero1 / this.numero2;
    };
    return Calculadora;
}());
// let calA = new Calculadora (primerNumero,segundoNumero)
var calA = new Calculadora(10, 50);
console.log('la suma es : ' + calA.sumar());
console.log('la resta es : ' + calA.restar());
console.log('la multiplicacion es : ' + calA.multiplicar());
console.log('la division es : ' + calA.dividir());
var calB = new Calculadora(15, 3);
console.log('la suma es : ' + calB.sumar());
console.log('la resta es : ' + calB.restar());
console.log('la multiplicacion es : ' + calB.multiplicar());
console.log('la division es : ' + calB.dividir());
var calC = new Calculadora(30, 100);
console.log('la suma es : ' + calC.sumar());
console.log('la resta es : ' + calC.restar());
console.log('la multiplicacion es : ' + calC.multiplicar());
console.log('la division es : ' + calC.dividir());
