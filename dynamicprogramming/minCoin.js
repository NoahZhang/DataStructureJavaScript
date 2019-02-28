function getResult(n, coins) {
	var a = new Array(n+1);

    for(var i = 0; i <= n;i++)
        a[i] = 0;

    for(var i = 1; i<=n; i++) {
		    var min = Number.MAX_VALUE;
        for(var j = 0; j < coins.length; j++)  {
					if(i - coins[j] >= 0) {
					  var temp = a[i - coins[j]] + 1;
					  if(temp < min) {
					    min = temp;
					  }
				  }
				}
				a[i] = min;
		}

    return a[n];
}
