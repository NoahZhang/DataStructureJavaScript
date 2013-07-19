var shellSort;
  		
shellSort = function(arr){
  var n, tmp, i, j, increment;
				
  n = arr.length;
  increment = n;
				
  do {
       increment = parseInt(increment/3) + 1;
			
       for(i = increment; i < n; i++){
         if(arr[i] < arr[i - increment]) {
	   tmp = arr[i];
	
	   for(j = i - increment; j >= 0 && tmp < arr[j]; j -= increment) {
	     arr[j + increment] = arr[j];
	   }
							
	   arr[j + increment] = tmp;
         }
       }
  } while(increment > 1);
				
  return arr;
}
