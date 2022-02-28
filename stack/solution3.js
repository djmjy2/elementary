function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let bridge = [];
  let bridge_weights = 0; 
  
  for(let i = 0; i<bridge_length; i++) {
      bridge.push(0); //다리길이 만큼 0으로 초기화
  }
  
  let temp = truck_weights.shift();
  
  bridge.unshift(temp); //다리에 트럭한대 다리에 진입 및 앞으로 한칸 전진
  bridge.pop();
  
  bridge_weights += temp; //현재 다리무게 증가
  
  answer++;
  
  while(bridge_weights){ //현재 다리무게가 0이되면 모든트럭이 지나간것
      bridge_weights -= bridge.pop(); //트럭 한칸 전진 
      temp = truck_weights.shift(); //다음차례 트럭 준비
      
      if(temp + bridge_weights <= weight){ //무게 제한을 넘지 않으면 다리로 진입
          bridge.unshift(temp);
          bridge_weights += temp;
      } else { //무게 제한에 걸리면 준비했던 트럭 한번더 대기 (트럭대기열에 다시)
          bridge.unshift(0);
          truck_weights.unshift(temp);
      }
      answer++;
  } 
  
  return answer;
}