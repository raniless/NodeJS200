// define
const listEmployee = [
  {name:'kyeongrok', age:31, salary:4000},
  {name:'jihyun', age:31, salary:5000},
  {name:'minsup', age:35, salary:6000}
];

// process
//map 연산된 salary 값만 배열로 return
const raisedSalaryList = listEmployee.map(employee => (employee.salary * 1.1));
/*
위에 Line을 풀어서 쓰면 다음과 같다.
const raisedSalaryList = [];
for(employee of listEmployee) {
  raisedSalaryList.push(employee.salary * 1.1);
}
*/

raisedSalaryList.forEach(salary => console.log('salary : %d', salary));
/*
위에 Line을 풀어서 쓰면 다음과 같다.
for(salary of raisedSalaryList) {
  console.log('salary : %d', salary);
}
*/
