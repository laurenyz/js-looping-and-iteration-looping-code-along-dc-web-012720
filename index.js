let arr = []

function wrapGift(array, event){
  for (let i = 0; i < array.length; i++){
    arr.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
  }
  return arr;
}