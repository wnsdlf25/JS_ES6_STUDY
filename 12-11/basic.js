JavaScript 쓰는 이유
- HTML 변경하려고 씀 ex) document.getElementById('hello').innerHTML='goodbye'
- HTML 이벤트 발생시 해당 코드 실행하려고 씀 ex) document.getElementById('button').addEventListener('click', function(){code~~~~})
- 자료 저장해두려고 씀 ex) const name = 'choi'; let age = 20;
- 코드 축약하려고 함수를 사용 ex) function 작명(){code~} 
- 파라미터로 함수 다양하게 사용 ex) function 작명(파라미터){code~} 
()=>{} : 화살표 함수
자료를 한번에 여러개 저장하려면 Array, object 사용 ex) var name = ['kim', 'choi']   var name2 = {name : 'kim', age : 20}
자료를 뽑으려면 name[1]; -> choi   name.age -> 20
코드를 조건부로 실행 할때는 if / else  ex) if (조건식){code~} else if (조건식) {code~} else {code~}
반복되는 코드는 for ex) for(var i = 0; i < 3; i++){code~}
forEach를 사용하여 자료의 수만큼 반복 시킴 ex) [1,2,3,4].forEach(function(){code~});
