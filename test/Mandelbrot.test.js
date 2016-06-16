const expect = require('chai').expect;
import Mandelbrot from '../src/Mandelbrot';

describe('Mandelbrot', function() {
  it('is true', function () {
    var mandelbrot = new Mandelbrot();
    mandelbrot.generate();
  });
});
