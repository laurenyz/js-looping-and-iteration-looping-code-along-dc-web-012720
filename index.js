let arr = []

function writeCards(names, event){
  for (let i = 0; i < names.length; i++){
    arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  console.log(arr);
}

