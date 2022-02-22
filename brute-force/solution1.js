function solution(answers) {
  var answer = [];
  
  let student1 = [1, 2, 3, 4, 5];
  let student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let score1 = answers.filter((a,i) => a === student1[i % student1.length]).length;
  let score2 = answers.filter((a,i) => a === student2[i % student2.length]).length;
  let score3 = answers.filter((a,i) => a === student3[i % student3.length]).length;
  
  var max = Math.max(score1, score2, score3);
  
  if (score1 === max) {answer.push(1)}
  if (score2 === max) {answer.push(2)}
  if (score3 === max) {answer.push(3)}
  
  return answer;
}