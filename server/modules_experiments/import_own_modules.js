import math, { add, sub, mult } from 'en-math';
import hello from 'en-hello';
import { bar } from 'en-variables';

console.log(bar); // display a local variable from `en-variables` module
console.log(foo); // display a global variable from `en-variables` module
console.log(hello());
console.log(math);
console.log(add(1, 2));
console.log(sub(2, 1));
console.log(mult(2, 2));
