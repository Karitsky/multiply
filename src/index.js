module.exports = function multiply(first, second) {
  let firstAsArray = first.split('').reverse();
  let secondAsArray = second.split('').reverse();


  let zerosInFirst = [];
  for ( ; firstAsArray[0] == '0'; ) {
    zerosInFirst.push(firstAsArray.shift());
  }
  let zerosInSecond = [];
  for ( ; secondAsArray[0] == '0'; ) {
    zerosInSecond.push(secondAsArray.shift());
  }
  let zerosTotal = zerosInFirst.concat(zerosInSecond);


  let storage = [];

  for (let i=0; i < firstAsArray.length; i++) {
    for (let j=0; j < secondAsArray.length; j++) {
      if (storage[i + j] > 0) {
        storage[i + j] = firstAsArray[i] * secondAsArray[j] + storage[i + j];
      } else {
        storage[i + j] = firstAsArray[i] * secondAsArray[j];
      }   
    }
  }


  for (let i = 0; i < storage.length; i++) {

    let leave = storage[i] % 10;
    let transfer = Math.floor(storage[i] / 10);
    storage[i] = leave;

    if (storage[i + 1] > 0) {
      storage[i + 1] += transfer;
    } else if (transfer > 0) { 
      storage[i + 1] = transfer;
    }
  }


  storage.reverse();
  let result = storage.concat(zerosTotal);
  return result.join('');
}
