/* 객체 */
/*
기본타입을 제외한 모든 타입은 참조타입(객체)
객체는 0개 이상의 프라퍼티로 구성
프라퍼티는 프라퍼티명(key)과 프라퍼티값(value)으로 구성
JS에서 객체는 연관배열 (Associative Array): key(index)가 문자열인 배열
*/

// 객체 생성법

// 1. 객체리터럴
const obj1 = {
    name: "이순신",
    age: 54,
    address: "조선국 한성부 건천동"
}
console.log(obj1, typeof obj1);

// 2. Object 생성자
// 객체리터럴로 객체를 생성해도 내부적으로 Object 생성자로
// 변환되어 해석
const obj2 = new Object();
obj2.name = "강감찬";
obj2.age = 82;
obj2.address = "고려 금주(서울 관악구 봉천동)";
console.log(obj2, typeof obj2);

// 3. Object.create
const obj3 = Object.create(Object);
obj3.name = "을지문덕"; // name은 Function의 이름이라 읽기전용
obj3.age = 100;
obj3.address = "고구려 평양";
console.log(obj3, typeof obj3);

// 4. 생성자 함수
function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}
const person = new Person("왕건", 30, "신라 패강진 송악군(경기도 개성시)");
console.log(person, typeof person);
console.log(person instanceof Person);
// Person은 Object를 상속받았다 (X), 부모와 자식 관계가 아님
// Person은 Object를 확장했다 (O), 동료 관계
console.log(person instanceof Object);

// *** 매우 중요 ***
// prototype 프라퍼티
// 생성자함수는 prototype이라는 프라퍼티를 가진다.
// 자바스크립트의 모든 객체는 적어도 하나의 다른 객체를 상속(확장)한다.
// prototype프라퍼티는 상속(확장)해 준 객체의 참조

// Person생성자함수가 가진 prototype이라는 프라퍼티를 통해서
// Person객체에 printhobby라는 프라퍼티를 새로 생성(동적 확장)
Person.prototype.hobby = ["장기", "바둑"];

Person.prototype.printHobby = function() {
    console.log(this.hobby);
}

person.printHobby();
console.log(typeof Person.prototype);
console.log(Person.prototype instanceof Object);
console.log(person instanceof Person);
console.log(person instanceof Object);

const person2 = new Person('강감찬', 30, '서울시 관악구');
person2.hobby = ["게임", "등산"];
person2.printHobby();
console.log();

for (prop in person) {
    console.log(prop, person[prop]);
}
console.log();
for (prop in person2) {
    console.log(prop, person2[prop]);
}
console.log();

// 객체 프라퍼티 반복
// 방법 1
for (prop in obj1) {
    console.log(prop, obj1[prop]);
}
console.log();
// 방법 2
for (prop of Object.getOwnPropertyNames(obj1)) {
    console.log(prop, obj1[prop]);
}
console.log();

// 객체 프라퍼티 추가
obj1.hobby = ["축구", "야구"];
obj1["gender"] = "남";

// 객체 메서드 추가
obj1.printName = function() {
    console.log(this.name);
};
obj1.printName();

// 객체 메서드 제거
delete obj1.printName;

console.log(Person);
