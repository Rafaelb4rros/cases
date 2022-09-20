#include <stdio.h>

//SUM of 3 and 5 multiples.

#define MAX 1000

int main() {
    int ans = 0;

    for(int i = 0; i < MAX; ++i) {
        if(i % 3 == 0) {
            ans += i;
        } else if(i % 5 == 0) {
            ans += i;
        }
    } 
    printf("%d\n", ans);

    return 0;
}



