// 향상된 반복문

const obj = {
    name: "홍길동",
    age: 30,
    address: "조선 한양시"
};

const arr = [1, 2, 3, 4, 5];

// for ~ in : 객체의 프라퍼티 반복
for (let key in obj) {
    console.log(`${key} = ${obj[key]}`);
}
/*
name = 홍길동
age = 30
address = 조선 한양시
*/

// for ~ of : Iterable(string, array, map, set, ...)
for (let ele of arr) {
    console.log(ele);
}
/*
1
2
3
4
5
*/



const map = new Map();
map.set("korea", "한국");
map.set("japan", "일본");
map.set("china", "중국");
console.log(map); // Map(3) { 'korea' => '한국', 'japan' => '일본', 'china' => '중국' }

const set = new Set();
set.add("사과");
set.add("망고");
set.add("수박");
console.log(set); // Set(3) { '사과', '망고', '수박' }

const str = "abcdef";
console.log(str); // abcdef
