function solution(clothes) {
  var answer = 1;
  var obj = {};
  for (var i = 0; i < clothes.length; i++){
      obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1; //키값이 없으면 1로 지정후 + 1, 키값이 있으면 불러와서 + 1
  }
  
  for (var key in obj){
      answer *= obj[key];
  }
  
  return answer - 1; // 옷을 입지 않은 경우 제외
}