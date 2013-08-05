var merge, mergeSort;
  		
mergeSort = function(arr){
    var n, left, mid, right;
				
    n = arr.length;
				
    if(n <= 1){
        return arr;
    }
				
    mid = Math.ceil(n/2);
    left = arr.slice(0, mid);
    right = arr.slice(mid);
    left = mergeSort(left);
    right = mergeSort(right);
				
    return merge(left, right);
};
			
merge = function(left, right){
    var result;
				
    result = [];
				
    while(left.length > 0 || right.length > 0){
        if(left.length > 0 && right.length > 0) {
            if(left[0] < right[0]){
                result.push(left[0]);
                left.splice(0, 1);
            } else {
                result.push(right[0])
                right.splice(0, 1);
						} 
        } else if(left.length > 0) {
            result.push(left[0]);
            left.splice(0, 1);
        } else if(right.length > 0) {
            result.push(right[0]);
            right.splice(0, 1);
        }
    }
				
    return result;
}
