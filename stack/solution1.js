function solution(progresses, speeds) {
    var answer = [];
    var period = 0

    progresses.map((progress, index) => {
        let day = Math.ceil((100 - progress) / speeds[index]);

        if(day > period){
            answer.push(1)
            period = day
        } else {
            answer[answer.length -1]++
        }
    })
    return answer;
}