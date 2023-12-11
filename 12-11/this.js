1. this를 그냥 사용하면 window를 가리킨다
2. strict mode 에서 일반함수 내에서쓰면 undefined가 뜬다
3. 오브젝트 내 함수안에서 쓰면 그 함수를 가지고 있는 오브젝트를 뜻함
var object = {
  data: "choi",
  function: function () {
    console.log(this);
  },
};

object.function();
-> { data: 'choi', function: [Function: function] }
4. 오브젝트 내 화살표함수로 쓰면 함수밖에 있는것을 쓰기 때문에 window가 뜬다.
window란 함수나 변수를 전역공간에서 만들면 {window}에 보관됨
5. 기계 안에서 쓰면 새로 생성되는 오브젝트를 뜻함 constructor
function 기계() {
  this.name = "kim";
}
var object = new 기계();

console.log(object);
-> 기계 { name: 'kim' }
6. 이벤트리스너 안에서는 e.currentTarget(지금 이벤트가 동작하고 있는 곳) 이 실행됨
document.getElementById("btn").addEventListener("click", function (e) {
  console.log(this);
  console.log(e.currentTarget);
});
-> <button id="btn">버튼</button> <button id="btn">버튼</button>

var object = {
  names: ["kim", "choi", "park"],
  functio: function () {
    console.log(this); - > { names: [ 'kim', 'choi', 'park' ], functio: [Function: functio] }
    object.names.forEach(function () {
      console.log(this); -> window
    });
  },
};

object.functio();
7.화살표 함수를 사용하여 그 위에 this 가 있는것 처럼 똑같이 결과를 출력할 수 있다.
- 위 코드에서는 forEach(()=>{console.log(this)})이런식으로 되어있다면 functio 밑에 있는 this와 같은 결과 값을 출력한다.
