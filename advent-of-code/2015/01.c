#include <stdio.h>


int main(int argc, char **argv) {
    char *input = argv[1];
    int floor = 0, pointer = 0;

    while(input[pointer] != 0) {
        if(input[pointer] == "("[0]) {
            floor += 1;
        }
        if(input[pointer] == ")"[0]) {
            floor -= 1;
        }
        ++pointer;
    }

    printf("%d", floor); 
    return 0;
}

