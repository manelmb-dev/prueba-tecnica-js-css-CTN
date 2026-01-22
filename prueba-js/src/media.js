export default (json) => {
  let sum = 0;

  for (const person of json) {
    sum += person.edad;
  }

  const avg = sum / json.length;

  return Number(avg.toFixed(2)).toString().replace('.', ',');
};