function solution(n, lost, reserve) {
  let answer = n - lost.length;
  let tmp_lost = [];
  
  // lost와 reserve 두 개 모두 해당되는 학생은 reserve에서 빼고 answer 1 증가
  for (let i = 0; i < lost.length; i++) {
      if (reserve.includes(lost[i])) {
          reserve = reserve.filter(e => e !== lost[i]);
          answer++;
      } else {
          // lost, reverse 두 개 모두해당되지 않는 학생
          tmp_lost.push(lost[i]);
      }
  }
  lost = tmp_lost;
  
  for (let i = 0; i < lost.length; i++) {
      if (reserve.includes(lost[i] - 1)) { // 자신보다 앞번호인 학생
          reserve = reserve.filter((e) => e !== lost[i] - 1);
          answer++;
      }
      else if (reserve.includes(lost[i] + 1)) { // 자신보다 뒷번호인 학생
          reserve = reserve.filter((e) => e !== lost[i] + 1);
          answer++;
      }
  }
  
  return answer;
}