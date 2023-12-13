변수 - 자료 임시 저장공간

var
- 재선언 재할당 가능 / 범위 - function
function 함수(){
    var name2 = 'choi';
    name2;  - 가능
}

name2; - 불가능

let
- 재선언 불가능, 재할당 가능 / 범위 - {}중괄호
if (ture){
    let name3 = 'Choi;'
}
const
- 재선언 재할당 불가능 / 범위 - {}중괄호
if (ture){
    const name3 = 'Choi;'
}

Hositing
- 변수의 선언을 변수 범위 맨위로 끌고오는 현상
console.log(name4); - undefinded
var name4 = 30;
console.log(name4); - 30

전역변수
- 모든 곳에서 쓸 수 있는 변수

var name5 = 40;
-전역변수;
window.names = "choi";
-전역변수;
function asd() {
  console.log(name5);
  var name6 = 402;
  -지역변수;
}

asd();
-40;
console.log(window.names);
-choi;


