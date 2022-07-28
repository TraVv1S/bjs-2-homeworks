// Задание 1
function getArrayParams(arr) {
  let min = arr[0],
      max = arr[0],
      sum = 0,
      avg;

  for (let i = 0; i < arr.length; i++) {
    min = min > arr[i] ? arr[i] : min;
    max = max < arr[i] ? arr[i] : max;
    sum += arr[i];
  }

  avg = sum / arr.length;

  return { min: min, max: max, avg: +avg.toFixed(2) };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let res;

  for (let i = 0; i < arrOfArr.length; i++) {
    res = func(arrOfArr[i]);
    max = max < res ? res : max;
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let diff = 0,
      max = arr[0],
      min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    min = min > arr[i] ? arr[i] : min;
    max = max < arr[i] ? arr[i] : max;
  }

  diff = Math.abs(max - min)
  console.log(diff)
  return diff;
}