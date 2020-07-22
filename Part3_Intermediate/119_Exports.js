/*
 - exports : 모듈을 분리하고 다른 곳에서 불러와 사용하기 위한 함수
*/
const printHello = () => console.log('hello');;

exports.printHello = printHello;

exports.printMessage = (message) => {
  console.log(message);
}
