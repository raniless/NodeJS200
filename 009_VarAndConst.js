let fruit1 = 'apple';
fruit1 = 'banana';

const pi = 3.14;

console.log('fruit1 : ', fruit1);
console.log('pi : ', pi);

//const는 값을 한 번만 넣을 수 있음, 한 번 넣은 이후 다른 값으로 변경할려는 경우 에러 발생
//(TypeError: Assignment to constant variable.)
pi = 3.15;
console.log(pi);
