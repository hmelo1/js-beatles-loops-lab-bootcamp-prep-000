function theBeatlesPlay(array1, array2){
  for (var i = 0; i < array1.length; i++){
    var array3 = []
    array3.push(`${array1[i]} plays ${array2[i]}`)
  }
  return array3
}
