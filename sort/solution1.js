function solution(array, commands) {
  let answer = [];
  let part = [];
  let value = 0;
  
  for(let i = 0; i < commands.length; i++){
      part = array.slice(commands[i][0] -1, commands[i][1]).sort((a,b) => a - b); // js에서 sort는 문자열기준 정렬임을 주의
      answer.push(part[commands[i][2]-1]);
  }
  
  return answer;
}