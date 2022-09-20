#include <stdio.h>
#include <assert.h>

//find largest prime factor of 'range'
#define RANGE 600851475143
#define TEST_RANGE 13195

int find_divisor(int n) {
    int ans = 0;

    for(; ans < n; ++ans) {
        if(n % ans == 0) return ans;
    }
}

int prime_factor(long range) {
    int x = 0;

    while(range > 1) {
        range /= find_divisor(range);
        if(range > x) {
            x = range;
        }
    }

    printf("%d", x);
    return x; 
}


int main() { 
    int ans = prime_factor(RANGE);
    printf("%d", ans);

    int test_ans = prime_factor(TEST_RANGE); 
    assert(test_ans == 29);
    return 0;    
}

