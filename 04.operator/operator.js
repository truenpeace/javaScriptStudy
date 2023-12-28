// 연산자

// 산술연산이 불가능한 경우 NaN(Not A Number): 숫자가 아닌 숫자
// (NaN의 타입은 number)
console.log(100/'hello'); // NaN
console.log(+'hello'); // NaN

// 피연산자를 형변환하여 연산이 가능하면 형변환한다.
// 단, undefined는 어떠한 경우에도 형변환 되지 않는다.
// 형변환에서 제일 중요한 것은 : 연산에 필요한 타입으로 변환이 가능한가?
console.log(+'100', typeof(+'100')); // 100 number
console.log(+'백', typeof(+'백')); // NaN number
console.log(+false, typeof(+false)); // 0 number
console.log(1+null, typeof(1+null)); // 1 number

// == : 형변환을 해서라도 값이 같으면 true
// === : 타입도 값도 모두 동일해야 true
console.log(1=='1'); // true
console.log([]==false); // true
// console.log([]===false); // []는 object타입, false는 boolean타입
console.log(NaN==NaN); // 이 연산으로 NaN은 비교가 불가하다. 따라서 false
console.log(NaN===NaN); // 이 연산으로 NaN은 비교가 불가하다. 따라서 false
console.log(0==-0); // true
console.log(0===-0); // true
console.log(Number.isNaN(1+undefined)); // NaN인지 비교하는 방법1, true
console.log(Object.is(NaN, NaN)); // NaN인지 비교하는 방법2, true
console.log(Object.is(0, -0)); // 양수, 음수까지 비교하는 방법, false

// 지수연산자 : ES7
console.log(2**3); // 8
//console.log(-2**3); // error남
console.log((-2)**3); // -의 지수일때는 괄호 사용, -8
console.log(Math.pow(2, 3)); // 8

// delete : 객체의 프라퍼티 제거
const obj = {
    name: "홍길동",
    age: 30,
    address: "조선 한양시"
};
delete obj.address;
for (key in obj) {
    console.log(`property name:${key}, property value:${obj[key]}`);
}
/*
property name:name, property value:홍길동
property name:age, property value:30
*/

// 객체의 프라퍼티 추가
obj.hobby = ['낚시','등산'];
for (key in obj) {
    console.log(`property name:${key}, property value:${obj[key]}`);
}
/*
property name:name, property value:홍길동
property name:age, property value:30
property name:hobby, property value:낚시,등산
*/
