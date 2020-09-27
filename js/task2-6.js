function mapArray(array) {
    'use strict';
    const numbers = new Array(array.length);
    for(let i = 0; i < array.length; i += 1) {
      // Write code under this line
      numbers[i] = array[i] * 10;
    }
    return numbers;
  }