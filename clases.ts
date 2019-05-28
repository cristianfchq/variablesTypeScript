class Calculadora{

    numero1:number;
    numero2:number;

    constructor(valorNumero1:number,valorNumero2:number){
        console.log('iniciando calculadora');
        this.numero1 = valorNumero1;
        this.numero2 = valorNumero2;

        console.log('numeros que se sumaran restaran multiplicaran y dividiran')
        console.log('Primer numero es : ' + this.numero1 + ' Segundo numero es : ' + this.numero2);
    }

    sumar(){
        return this.numero1 + this.numero2;
    }

    restar(){
        return this.numero1 - this.numero2;
    }

    multiplicar(){
        return this.numero1 * this.numero2;
    }

    dividir(){
        return this.numero1 / this.numero2;
    }
}

// let calA = new Calculadora (primerNumero,segundoNumero)

let calA = new Calculadora(10,50);

console.log('la suma es : ' + calA.sumar());
console.log('la resta es : ' + calA.restar());
console.log('la multiplicacion es : ' + calA.multiplicar());
console.log('la division es : ' + calA.dividir());

let calB = new Calculadora(15,3);

console.log('la suma es : ' + calB.sumar());
console.log('la resta es : ' + calB.restar());
console.log('la multiplicacion es : ' + calB.multiplicar());
console.log('la division es : ' + calB.dividir());

let calC = new Calculadora(30,100);

console.log('la suma es : ' + calC.sumar());
console.log('la resta es : ' + calC.restar());
console.log('la multiplicacion es : ' + calC.multiplicar());
console.log('la division es : ' + calC.dividir());