

/* 

19:50~20:50 노마드 크롬by바닐라 2.1.2.3.4.5

#2.0 Your first JS Function (13:11)
#2.1 More Function Fun (10:24)
#2.2 JS DOM Functions (08:49)
#2.3 Modifying the DOM with JS (06:43)
#2.4 Events and event handlers (07:01)
#2.5 If, else, and, or (11:09)


*/

/*
function sayHello(name, age){
  console.log("Hello" + name + ' you are' + age + "years old");
}
sayHello("nicolas", 15);
*/
/* 더 간략하게 ▼ */
/*
function sayHello(name, age){
  console.log(`Hello ${name} you are ${age} years old`);
}
sayHello("nicolas", 15);

const greetNicolas = sayHello("nicolas", 15);
console.log(greetNicolas);




function sayHello(name, age){
  return `Hello ${name} you are ${age} years old`;
}
const greetNicolas = sayHello("nicolas", 15);
console.log(greetNicolas);



// 실습

/*

function subway(station1, station2){
  return station1 + station2;
}
const anyang = subway("boemgye","pyoungchon");
const gwachon = subway("Seoul Grand Park","Government Complex Gwacheon");
console.log(anyang, gwachon);
console.log(gwachon);


function convenienceStore(brand1, brand2){
  return brand1 + brand2;
}
const major = convenienceStore("CU","gs25");
const miner = convenienceStore("seveneleven","storyway");
console.log(major);
console.log(miner);

*/


/*

document도 object야
HTML document는 자바스크립트가 되지
console.log처럼 document는 많은 .(점) 어떤걸 가지고 있어


*/

//const title = document.getElementById("title");
const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS"

/*
우리가 찾게 될 모든 객체들의 함수들
DOM(Document Object Model)형태로 변경 가능해
네 페이지에서 자바스크립트로 선택한것은 객체(object)까 되지.
*/

title.style.color = "red"
document.title = "kkk"



























