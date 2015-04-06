var swap, bubbleSort0, bubbleSort1, bubbleSort2;
  		
swap = function(arr, i1, i2){
    var tmp;
				
    tmp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = tmp;
}
			
bubbleSort0 = function(arr){
    var n, i, j;

    n = arr.length;
				
    for(i = 0; i < n; i++){
        for(j = i + 1; j < n; j++){
            if(arr[i] > arr[j])
                swap(arr, i, j);
        }
    }
				
    return arr;
}
			
bubbleSort1 = function(arr){
    var n, i, j;

    n = arr.length;
				
    for(i = 0; i < n; i++){
        for(j = n - 2; j >= i; j--){
            if(arr[j] > arr[j + 1])
                swap(arr, j, j + 1);
        }
    }
				
    return arr;
}
			
bubbleSort2 = function(arr){
    var n, i, j, flag;

    n = arr.length;
    flag = true;
				
    for(i = 0; i < n && flag; i++){
        flag = false;
        for(j = n - 2; j >= i; j--){
            if(arr[j] > arr[j + 1]){
                swap(arr, j, j + 1);
                flag = true;
            }
        }
    }
				
    return arr;
}
