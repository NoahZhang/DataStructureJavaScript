var swap, selectionSort;
  		
swap = function(arr, i1, i2){
    var tmp;
				
    tmp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = tmp;
}
			
selectionSort = function(arr){
    var n, i, j, min;
				
    n = arr.length;
				
    for(i = 0; i < n; i++){
        min = i;
					
        for(j = i + 1; j < n; j++){
            if(arr[min] > arr[j])
                min = j;
        }
					
        if(i != min)
            swap(arr, i, min);
    }
				
    return arr;
}
