const scores = [80, 90, 70, 100];

const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

console.log(average);