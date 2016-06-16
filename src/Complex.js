export default class Complex {
  constructor(real, imaginary){
    this.real = real;
    this.imaginary = imaginary;
  }

  equals(otherComplex){
    if (!(otherComplex instanceof Complex)){
      throw new TypeError("Value provided must also be of type 'Complex'.")
    }
    if (otherComplex.real === this.real && otherComplex.imaginary == this.imaginary){
      return true;
    }
    return false;
  }

  add(otherComplex){
    if (!(otherComplex instanceof Complex)){
      throw new TypeError("Value provided must also be of type 'Complex'.")
    }
    return new Complex(otherComplex.real + this.real, otherComplex.imaginary + this.imaginary);
  }

  multiply(otherComplex){
    if (!(otherComplex instanceof Complex)){
      throw new TypeError("Value provided must also be of type 'Complex'.")
    }
    var f = this.real * otherComplex.real;
    var o = this.real * otherComplex.imaginary;
    var i = this.imaginary * otherComplex.real;
    var l = this.imaginary * otherComplex.imaginary;
    l = -l;
    return new Complex(f + l, o + i);
  }

  exp(n){
    if (n === 0){
      return new Complex(this.real + 1, 0);
    } else if (n === 1){
      return this;
    } else {
      var c = this;
      for (var i = 1; i < n; i++){
        c = c.multiply(c);
      }
      return c;
    }
  }

  magnitude(){
    return Math.sqrt( Math.pow(this.real, 2) + Math.pow(this.imaginary, 2) );
  }

  complexConjugate(){
    return new Complex(this.real, -this.imaginary);
  }

  prettyPrint(){
    var operator = "";
    if (this.imaginary >= 0){
      operator = "+";
    }
    return this.real.toString() + operator + this.imaginary.toString() + 'i';
  }
}
