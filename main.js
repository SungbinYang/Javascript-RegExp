console.log(123);

const str = `
010-1234-5678
ysb05222@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=Avengers
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// 첫번째 인수에 찾을 문자열을 입력
// g flag : 검색해서 찾은 문자열만 배열로 반환
// i flag : 대소문자 구분 없음
// const regexp = new RegExp('the', 'gi');
// const regexp = /the/gi;
// console.log(str.match(regexp)); // 존재하지 않으면 null

// console.log(regexp.test(str)); // 존재하지 않으면 false

// console.log(str.replace(regexp, 'AAA')); // 원본데이터 손상되지 않음
// str = str.replace(regexp, 'AAA');
// console.log(str);

// .는 정규식에서는 특정 명령이기 떼문에 앞에 \를 붙여준다.
// console.log(str.match(/\.$/gim));
// console.log(str.match(/d$/gm));
// console.log(str.match(/^T/gm));
// console.log(str.match(/h..p/g)); // .은 문자열의 모든 글자를 배열단위로 출력
// console.log(str.match(/dog|fox/g));
// console.log(str.match(/https?/g));
// console.log(str.match(/\b\w{2,3}\b/g));
// console.log(str.match(/[가-힣]{1,}/g));
// console.log(h.replace(/\s/g, ''));

console.log(str.match(/.{1,}(?=\@)/g));
console.log(str.match(/(?<=\@).{1,}/g));