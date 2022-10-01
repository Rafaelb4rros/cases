//202
//Happy number
// O(log n)
//
int next(int n) {
    int sum = 0;
    
    while(n > 0) {
        int rest = n % 10;
        n = n / 10;
        sum += rest * rest;
    }
    
    return sum;
}

bool isHappy(int n){
    while(n != 1 && n != 4) {
        n = next(n);
    }    

    return n == 1;
}
