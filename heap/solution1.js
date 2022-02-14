class Heap{
  constructor() {
    this.item = [];
  }

  get length() {
    return this.item.length;
  }

  get heap() {
    return this.item;
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChild(index) {
    return index * 2 + 1;
  }

  getRightChild(index) {
    return index * 2 + 2;
  }

  swap(a,b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  bubbleUp(index) {
    if (index < 0) return;

    const left = this.getLeftChild(index);
    const right = this.getRightChild(index);

    const swapChild = 
      this.item[right] && this.item[right][1] < this.item[left][1]
        ? right
        : left;

    if (this.item[swapChild][1] < this.item[index][1]) {
      this.swap(swapChild, index);
      this.bubbleUp(this.getParent(index));
    }
  }

  bubbleDown(index) {
    if (index > Math.floor(this.length / 2) -1) return;

    const left = this.getLeftChild(index);
    const right = this.getRightChild(index);

    const swapChild =
      this.item[right] && this.item[right][1] < this.item[left][1]
        ? right
        : left;
    
    if (this.item[swapChild][1] < this.item[index][1]) {
      this.swap(swapChild, index);
    }

    this.bubbleDown(swapChild);
  }

  shift() {
    this.swap(0, this.length - 1);
    const pop = this.item.pop();
    this.bubbleDown(0);
    return pop;
  }

  push(value) {
    this.item.push(value);
    this.bubbleUp(this.getParent(this.length - 1));
  }
}

function solution(jobs) {
  
  const heap = new Heap();
  const length = jobs.length;

  let answer = 0;
  let time = 0;

  jobs = jobs
    .sort((a,b) => a[0] - b[0])
    .map((v, i, arr) => [v[0] - arr[0][0], v[1]]);

  while (jobs.length || heap.length) {
    while (jobs.length && jobs[0][0] <= time) {
      heap.push(jobs.shift());
    }

    if (!heap.length) {
      const newTime= jobs[0][0];
      while (jobs.length && jobs[0][0] === newTime) {
        heap.push(jobs.shift());
      }

      time = newTime
    }

    const done = heap.shift();

    time += done[1];
    answer += time - done[0];
  }

  return Math.floor(answer / length);
}