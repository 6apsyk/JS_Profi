let str = "Qwerty aren't dsfnm:'dsdnm, dsnd'adn dmfn!',- say mr.L."

const regexp = /\B'|'\B/g; 
let arrr = str.replace(regexp, '"');
console.log(arrr)


