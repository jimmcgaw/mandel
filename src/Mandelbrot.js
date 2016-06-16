import Complex from './Complex';

// Mandelbrot iteraton formula is: z1 = z^2 + C
// LaTeX: $$ z_1 = z^2 + C $$

export default class Mandelbrot {
  constructor(){
    this.set = [];
  }

  isInMandelbrotSet(complex){
    if (complex.magnitude() > 2){
      return false;
    }
    return true;
  }

  generate(){
    let real, imaginary, z;
    for (imaginary = 0; imaginary <= 200; imaginary++){
      for (real = 0; real <= 300; real++){
        // console.log("Iteration with real: " + (real-200)/100 + " and imaginary: "+ (imaginary+100)/100);
        const C = new Complex((real-200)/100, (imaginary+100)/100);
        z = new Complex(0, 0);
        let currentReal = 0, currentImaginary = 0;
        for (let i = 0; i < 200; i++){
          z = z.exp(2).add(C);
          if (isNaN(z.real) || isNaN(z.imaginary)){
            z.real = currentReal;
            z.imaginary = currentImaginary;
            break;
          }
          currentReal = z.real;
          currentImaginary = z.imaginary;
        }
        console.log(z.prettyPrint());
        if (this.isInMandelbrotSet(z)){
          var coordinates = [z.real, z.imaginary];
          this.set.push(coordinates);
        }
      }
    }
    console.log(this.set);
  }
}
