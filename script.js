"use strict";
// Функция-генератор выдает результат поледовательно 
// 1 раз вызвали функцию, она выдала нам один результат
// 2 раз вызвали ту же самую функцию, она вызвала другой результат
function* generator() {
    yield 'S';
    yield 'c';
    yield 'a';
    yield 'q';
    yield 'z';
    yield 't';
}

const str = generator();

console.log(str.next().value);
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
// ______________________________________________________

function* count (n) {
    for (let i = 0; i <= n; i++) {
        yield i;
    }
}

for (let k of count(7)) {
     console.log(k);
}


/* const counter = count(7);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value); */