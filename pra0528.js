/*

const title = document.querySelector("title");

function handleResize(event) {
  console.log(event);
}

window.addEventListener("resize", handleResize);
*/



// 누군가타이틀을클릭할때마다 색깔을 파란색으로 변경할거야

function handleClick(){
  title.style.color = "red";
}
title.addEventListener("click", handleClick);



// 니꼬식 if-else

// 1
/*
if ("10" === 0) {
  console.log("hi"); //참이면 실행
} else {
  console.log("ho"); //거짓이면 실행
}*/

// 2
/*
if (20 > 5 && "nicolas" === "necolas") {
  console.log("yes"); //참이면 실행
} else {
  console.log("no"); //거짓이면 실행
}


20 > 5 얘랑
 "nicolas" === "necolas" 얘랑

&& (and)는 둘 다 참이어야 실행.
|| (or)는 둘 중 하나만 참이어도 실행.

 

const age = prompt("몇살??");

if (age >= 18 && age <= 21) {
  console.log("마실 순 있지만 안마시는게 나음");
} else if (age > 21) 11
{
  console.log("마셔도 됨");
} else {
  console.log("마시지 마");
}

*/


const age = prompt("나잇대");
if (age < 10 ) {
  console.log("어린이");
} else if (age < 20) {
  console.log ("십대");
} else if (age < 30) {
  console.log("이십대");
} else {
  console.log ("삼십대 이상");
}