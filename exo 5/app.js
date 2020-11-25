let a = prompt("votre 1er nombre avec décimal");
let b = prompt("votre 2eme nombre à décimal");

let a1 = parseInt(a);
let b1 = parseInt(b);

let a2 = Math.trunc(a1);
let b2 = Math.trunc(b1);

alert(a2 * b2);