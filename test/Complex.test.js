const expect = require('chai').expect;
import Complex from '../src/complex';

describe('Complex', function() {
  describe('#constructor', function() {
    it('sets real and imaginary correctly', () => {
      var complex = new Complex(6, 7);
      expect(complex.real).to.equal(6);
      expect(complex.imaginary).to.equal(7);
    });
  });

  describe('#equals', function() {
    describe('given two complex numbers with the same values', function() {
      it('shows them to be equal', function () {
        var complex1 = new Complex(2,3);
        var complex2 = new Complex(2,3);
        expect(complex1.equals(complex2)).to.equal(true);
      });
    });

    describe('given two complex numbers with different values', function() {
      it('fails the equality test', function () {
        var complex1 = new Complex(3, 4);
        var complex2 = new Complex(66, 77);
        expect(complex1.equals(complex2)).to.equal(false);
      });
    });
  });

  describe('#add', function() {
    it('returns the sum of two Complex instances', function () {
      var c1 = new Complex(4, 5);
      var c2 = new Complex(3, -2);
      var sum = c1.add(c2);
      expect(sum.real).to.equal(7);
      expect(sum.imaginary).to.equal(3);
    });
  });

  describe('#multiply', function() {
    it('returns the product of two Complex instances', function () {
      var c1 = new Complex(4, 5);
      var c2 = new Complex(3, 2);
      var product = c1.multiply(c2);
      expect(product.real).to.equal(2);
      expect(product.imaginary).to.equal(23);
    });
  });

  describe('#exp', function() {
    describe('given a complex number raised to 0', function() {
      it('returns the real part augmented by 1', function () {
        var complex = new Complex(3, 5);
        var exponentiated = complex.exp(0);
        expect(exponentiated.real).to.equal(complex.real + 1);
        expect(exponentiated.imaginary).to.equal(0);
      });
    });

    describe('given a complex number raised to 2 power', function() {
      it('returns the square of the complex number', function () {
        var complex = new Complex(3, 5);
        var squared = complex.exp(2);
        var product = complex.multiply(complex);
        expect(squared.real).to.equal(product.real);
        expect(squared.imaginary).to.equal(product.imaginary);
      });
    });
  });

  describe('#magnitude', function() {
    it('returns the magnitude of a complex number', function () {
      var complex = new Complex(3, -4);
      var computedMagnitude = Math.sqrt( Math.pow(complex.real, 2) + Math.pow(complex.imaginary, 2));
      expect(complex.magnitude()).to.equal(computedMagnitude);
    });
  });

  describe('#complexConjugate', function() {
    it('returns a new Complex instance which is the complex conjugate', function () {
      var complex = new Complex(3, 4);
      var conjugate = complex.complexConjugate();
      expect(conjugate.real).to.equal(3);
      expect(conjugate.imaginary).to.equal(-4);
    });
  });

  describe('#prettyPrint', function() {
    it('prints a string version of the complex number', function () {
      var complex = new Complex(-3, -4);
      expect(complex.prettyPrint()).to.equal('-3-4i');
    });
  });

});
