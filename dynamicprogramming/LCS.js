function LCSLength(x, y) {
    var m = x.length + 1;
    var n = y.length + 1;

    var c = new Array(m);

    for(var i = 0; i < m; i++) {
        c[i] = new Array(n);
    }

    for(var j = 0; j < n; j++) {
        c[0][j] = 0;
    }

    for(var k = 0; k < m; k++) {
        c[k][0] = 0;
    }

    for(var i = 1; i < m; i++){
        for(var j = 1; j < n; j++){
            if(x[i - 1] == y[j - 1]){
                c[i][j] = c[i - 1][j - 1] + 1;
            } else if(c[i - 1][j] >= c[i][j - 1]){
                c[i][j] = c[i - 1][j];
            } else {
                c[i][j] = c[i][j - 1];
            }
        }
    }

    return c;
}

function printLCS(x, y, result){
    var m = x.length;
    var n = y.length;

    for(var i = m; i > 1; i--) {
        if(result[i][n - 1] == result[i - 1][n]) {
            if((result[i][n] - result[i - 1][n]) == 1){
                console.log(y[n - 1]);
                n--;
            }
        } else if(result[i][n - 1] > result[i - 1][n]) {
            i++;
            n--;
        }
    }
}