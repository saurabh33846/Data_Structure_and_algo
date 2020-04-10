function maxPrice(k, prices) {
    var best = []
    best.push(0);
        for (var i = 1; i <= n; i++) {
            var max_val = 0;
            for (var j = 0; j < i; j++){
                max_val = Math.max(max_val, price[j] + best[i - j - 1]);
            }
            best[i] = max_val;
        }
    }



prices =[2,3,5,8]
k=4

best=[0,2,4,6,8]

max_value= 8







