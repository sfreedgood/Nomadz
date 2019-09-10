let rankInsertionSort = (arr) => {
  let length = arr.length;
  for (let i = 1; i < length; i++) {
      let item = arr[i];
      let j = i - 1;
      while ( j >= 0 && arr[j].rank > item.rank ) {
          arr[j + 1] = arr[j];
          j--;
      }
      arr[j + 1] = item;
  }
  arr = arr.filter ( item => { //filter null values out of ranked results
    if (item.rank !== null) {
      return true 
    } else {
      return false
    }
  })
  return arr;
};

const sortCompare = (a, b) => {
  // Use toUpperCase() to ignore character casing
  const valueA = a.label.toUpperCase();
  const valueB = b.label.toUpperCase();

  let comparison = 0;
  if (valueA > valueB) {
    comparison = 1;
  } else if (valueB > valueA) {
    comparison = -1;
  }
  return comparison;
}

module.exports = {
  rankInsertionSort,
  sortCompare
}