// null, undefined
// let v = null; 선언은 했고, null값으로 초기화 되었다.
//      v의 타입도 값도 null
// let v; 선언은 했고, 초기화 하지 않아 엔진이 undefined로 초기화 해준다. 
//      v의 타입도 값도 undefined
let v3;
console.log(v3); // undefined
let v4 = undefined;
console.log(`${v4}, ${typeof v4}`); // undefined, undefined
let v5 = null;
console.log(`${v5}, ${typeof v5}`); // null, object

// symbol
// ES6에서 추가된 변경불가능한(immutable) "기본타입"
// 기본타입들은 값이 같으면 같다고 판별, 심볼은 값이 같아도 다르다고 판별
// 일반적으로 객체의 프라퍼티의 키값으로 사용하기 위해서 만든다.
// 아래 예제는 sym1, sym2가 모두 Symbol타입이고, 가진 값도 1로 동일하다.
// 하지만 두개의 심볼은 서로 유일하기에 같지 않다.
let sym1 = Symbol(1); // 1값을 가진 유일한 심볼
let sym2 = Symbol(1); // 1값을 가진 유일한 심볼
console.log(sym1.description); // 1
console.log(sym2.description); // 1
console.log(sym1==sym2); // false
console.log(sym1===sym2); // false
console.log(typeof sym1, typeof sym2); // symbol symbol
console.log(sym1.description===sym2.description); // 심볼 안의 값은 서로 같기에 true가 나온다.
console.log(typeof sym1.description); // 심볼 안의 값의 타입은 String이다.

const person = {
    sym1: {
        "name": "이순신"
    },
    sym2: {
        "name": "강감찬"
    }

};
console.log(person.sym1.name); // 이순신
console.log(person.sym2.name); // 강감찬
