Math.median = function (array) {
  if (array.length === 0) {
    return undefined;
  }

  array.sort();

  var middle = Math.floor(array.length / 2);

  return array[middle];
};
