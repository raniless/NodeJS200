const destinations = ['런던', '로마', '파리', '암스테르담'];

const searchDestination = '파리';

for(let destination of destinations) {
  // if(searchDestination == destination) {
  if(searchDestination.equals(destination))
    console.log(searchDestination, '입니다');
    break;
  }
}
