var insertionSort;
  		
insertionSort = function(arr) {
  var n, i, j, tmp;
				
  n = arr.length;
				
  for(i = 1; i < n; i++){
    if(arr[i] < arr[i-1]) {
      tmp = arr[i];
						
      for(j = i - 1; j >= 0 && arr[j] > tmp; j--){
        arr[j + 1] = arr[j];
      }
						
      arr[j + 1] = tmp;
    }
  }
				
  return arr;
}
