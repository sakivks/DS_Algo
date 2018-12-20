var str = "01100011111";
var a = str.split("").map(x => parseInt(x));
var sum = 0, s = 0, e = 0, length = 0;
var diff = [0, ...a.map(x => (sum = sum + (x === 0 ? -1 : 1)))];
console.log(diff);

var pairs = diff.map((x, i) => {
  for (var j = diff.length - 1; j > i; j--) {
    if (x === diff[j]) return j;
  }
  return 0;
});

console.log(diff);

var lengths = pairs.map((x, i) => x - i > 0 ? x - i : 0);
lengths.reduce((max, x, i) => {  
  if( x > max ) {
    s = i;
    e = i + x ;
    max = x
  }
  return max;
}, 0);

console.log(str.substring(s, e), str.substring(s, e).length);
