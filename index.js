function theBeatlesPlay(array1, array2){
  var array3 = []
  for (var i = 0; i < array1.length; i++){
    array3.push(`${array1[i]} plays ${array2[i]}`)
  }
  return array3
}
function johnLennonFacts(array){
  var n = 0
  var array2 = []
  while (n < array.length){
    //console.log(`${array[n]}`+"!!!")
    array2.push(`${array[n]}`+"!!!")
    n++
  }
  return array2
}
function iLoveTheBeatles(num){
  var array = []
  var n = 0
  do{
    array.push("I love the beatles!")
    n++
  }while (n < 15)
}
