const destination = ['런던', '파리', '로마'];
console.log('destination :', destination);

// shift() : 배열의 첫 번째 값을 빼고 배열에서 삭제
const shiftValue = destination.shift()
console.log('shiftValue :', shiftValue);
console.log('remain : ', destination);

// unshift(value) : 배열의 첫 번째에 value 추가 후 배열길이 return
const unShiftSize = destination.unshift('뉴욕');
console.log('unShiftSize : ', unShiftSize);
console.log('destination : ', destination);
