var 함수 = function () {};

var 함수2 = () => {};

쓰는 이유
1. 파라미터를 넣을때 조금 더 직관적임

var 함수3 = (a) => {
  return a + 10;
};

console.log(함수3(5));
-> 15
2. 파라미터가 1개면 소괄호 생략 가능
3. 코드가 한줄이면 중괄호도 생략 가능

[1, 2, 3, 4].forEach((a) => console.log(a));
