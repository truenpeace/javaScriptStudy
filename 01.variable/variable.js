/* 변수 */
/*
변수는 선언, 초기화, 할당의 단계를 거쳐서 사용한다.
자바스크립트에서는 선언만한 변수를 자동으로 undefined로 초기화한다.
*/

// 1. 선언
var v1; // 가급적 사용하지 말자.
let l1; // 변수 선언할 때
const c1 = null; // 상수 선언할때, 상수는 초기화 후에 값 변경 불가
console.log('1. 선언>>>')
console.log(v1);
console.log(l1);
console.log(c1);

// 2. 초기화
v1 = 1;
l1 = 'hello';
// c1 = "hi"; // error
console.log('\n2. 초기화>>>')
console.log(v1);
console.log(l1);
console.log(c1);
// ★★★ 변수의 타입은 값이 초기화 되거나 할당될 때 결정된다.
// ★★★ 변수에 따른 타입의 값이 할당되면 변수의 타입은 할당한 값의
//        타입으로 변경된다.
let v2 = 1;
console.log(`v2=>${v2}, type=>${typeof v2}`);
v2 = 'Hello';
console.log(`v2=>${v2}, type=>${typeof v2}`);
v2 = true;
console.log(`v2=>${v2}, type=>${typeof v2}`);

// 호이스팅 (Hoisting)
// 변수나 함수를 선언하지 않아도 엔진이 해당 블럭 상단에 선언해 준다.
// 즉, 선언문을 끌어올려 준다.
// 호이스팅 가능: var, 함수
// 호이스팅 불가: let, const
console.log(v6);
var v6;

// 1. hello함수를 호출
// 2. hello함수 없으면 코드 안에 hello함수 정의가 있는지 검색
// 3. hello함수 정의를 상단으로 끌어 올림 (호이스팅)
// 4. 그 후에 한 줄씩 실행
// 호이스팅을 하는 목적은 코딩실수를 눈감아 주고 코딩편의성을 주기 위함.
// 변수는 무조건 선언한 후에 사용한다.

hello();
function hello() {
    console.log("Hello");
}

// 변수의 스코프 (scope) : 변수를 사용할 수 있는 범위(영역)
// JS는 전역(global), 함수(function), 블럭(block) 3가지 스코프가 있다.
// 함수, 블럭 스코프를 지역(local) 스코프라 부르기도 한다.
// ex) JAVA의 경우 static, non-static, local이 있다.

// 1. 전역 : 함수나 블럭 밖에서 선언한 변수
var gv = "gv";
let gl = "gl";
const gc = "gc";

// 2. 함수 : 함수 내에서 선언한 변수, 함수내에서만 참조 가능
function fscope() {
    var fv = "fv";
    let fl = "fl";
    const fc = "fc";
}

// 3. 블럭 : 블럭 내에서 선언한 변수, 블럭내에서만 참조 가능
{
    var bv = "bv"; // 블럭 내 var로 선언한 것은 전역변수
    let bl = "bl";
    const bc = "bc";
}

// 전역스코프는 꼭 필요한 경우가 아니면 가급적 사용을 자제한다.
// 실행하는 동안 계속 메모리를 사용하므로

