const scores = [85, 95, 76];

const sum = (list, total, idx) => {
  if(idx == list.length) return total;
  return sum(list, total + list[idx], idx+1);
};

console.log('sum:', sum(scores, 0, 0));
