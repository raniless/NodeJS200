const scores = [85, 95, 76];

const average = (list, total, idx) => {
  if(idx == list.length) return total / idx;
  return average(list, total + list[idx], idx+1);
};

console.log('average:', average(scores, 0, 0));
