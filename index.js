var array3 = []
function theBeatlesPlay(array1, array2){
  for (var i = 0; i < array1.length; i++){
    array3.unshift(`${array1[i]} plays ${array2[i]}`)
  }
  return array3
}
