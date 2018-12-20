var MyCircularQueue = function(k) {
  this.queue = new Array(k);
  this.head = -1;
  this.tail = -1;
};

/**
* Insert an element into the circular queue. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if(this.isFull()) return false;
  if (this.head < 0 && this.tail < 0) {
      this.queue[0] = value;
      this.head = 0;
      this.tail = 0;
      return true;
  }
  if( this.tail === this.queue.length - 1 ) {
      if ( this.head === 0) return false;
      this.tail = -1
  }
  this.tail ++;
  this.queue[this.tail] = value;
  return true;
};


/**
* Delete an element from the circular queue. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) return false;
    
  if(this.head === this.tail){
      this.head = -1;
      this.tail = -1;
      return true;
  }

  this.head++
  if( this.head === this.queue.length)
      this.head = 0;
  
  return true
};

/**
* Get the front item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  return this.head === -1 ? -1 : this.queue[this.head];
};

/**
* Get the last item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  return this.tail === -1 ? -1 : this.queue[this.tail];    
};

/**
* Checks whether the circular queue is empty or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  return this.head === -1;
};

/**
* Checks whether the circular queue is full or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  var temp = this.tail === this.queue.length - 1 ? -1 : this.tail;
  if(temp === this.head - 1) 
      return true;
  return false;
};

// ["MyCircularQueue","enQueue","enQueue","enQueue","enQueue","Rear","isFull","deQueue","enQueue","Rear"]
// [[3],[1],[2],[3],[4],[],[],[],[4],[]]
// Your MyCircularQueue object will be instantiated and called as such:
// var obj = Object.create(MyCircularQueue).createNew(3)
var obj = new MyCircularQueue(3)
var param_1 = obj.enQueue(3);               console.log(param_1);
var param_4 = obj.Front();               console.log(param_4);
var param_6 = obj.isFull2();               console.log(param_6);
var param_1 = obj.enQueue(7);               console.log(param_1);
var param_1 = obj.enQueue(2);               console.log(param_1);
var param_6 = obj.isFull2();               console.log(param_6);
var param_1 = obj.enQueue(5);               console.log(param_1);
var param_2 = obj.deQueue();               console.log(param_2);
var param_1 = obj.enQueue(4);               console.log(param_1);
var param_1 = obj.enQueue(2);               console.log(param_1);
var param_4 = obj.isEmpty();               console.log(param_4);
var param_4 = obj.Rear();               console.log(param_4);
