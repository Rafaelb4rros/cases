#include <stdio.h>

//sum of even fibonacci numbers bellow 'range'

#define RANGE 4000000

int main() {
    int power = 1,
        prev = 1, 
        ans = 0;
    
    while(power < RANGE) {
        if(power % 2 == 0) {
            ans += power;
        }
        power += prev;
        prev = power-prev;
    }

    printf("%d", ans);
    return 0;
}
