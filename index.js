const lodash = require('lodash');
const {arrayNumeros, arrayLetras} = require("./array");


const arrayUnico = lodash.uniq(arrayNumeros);
const arrayUnico2 = lodash.uniq(arrayLetras);
console.log(arrayUnico);
console.log(arrayUnico2);