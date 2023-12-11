var 사람 = {
  name: "최준일",
  sayHi: function () {
    console.log("안녕 나는 " + this.name + "이야");
  },
};

사람.sayHi();

var 자료 = {
  data: [1, 2, 3, 4, 5],
};

자료.전부더하기 = function () {
  var 합 = 0;
  this.data.forEach(function (a) {
    합 = 합 + a;
  });
  console.log(합);
};
자료.전부더하기();

<button id="버튼">버튼</button>;

document.getElementById("버튼").addEventListener("click", function () {
  setTimeout(() => {
    console.log(this.innerHTML);
  }, 1000);
});
