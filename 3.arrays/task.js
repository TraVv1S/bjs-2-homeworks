function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length ? arr1.every((e, i) => e === arr2[i]) : false
}

function advancedFilter(arr) {
  return arr.filter(e => e > 0).filter(e => e % 3 === 0).map(e => e * 10)
}

console.log(advancedFilter([-1,-2]));