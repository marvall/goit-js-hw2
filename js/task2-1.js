const getItemsString = function(array) {
    'use strict';
    // Write code under this line
    let result = "";
    for(let i = 0; i < array.length; i++){
      result += `${i + 1} - ${array[i]}\n`;
    };
    return result;
  };
  console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));