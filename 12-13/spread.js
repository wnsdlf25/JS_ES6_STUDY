//뭔가 내용물을 빼고싶을 때 사용
//Array에 붙이면 대괄호를 제거

var array = ["hello", "world"];
console.log(array);
// - [ 'hello', 'world' ]
console.log(...array);
// - hello world

// 문자에 붙이면 펼쳐짐

var 문자 = "hello";
console.log(...문자);
// - h e l l o
console.log(...문자[1]);
// - e

// array 합치거나 복사할 때 사용

var a = [1, 2, 3];
var b = [4, 5];
var c = [...a, ...b];
console.log(c);
// - [ 1, 2, 3, 4, 5 ]

// 독립적인 값을 가지도록 복사

var d = [...a];
a[3] = 4;
console.log(a);
// -[1, 2, 3, 4];
console.log(d);
// -[1, 2, 3];
