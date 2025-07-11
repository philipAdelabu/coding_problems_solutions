#include<stdio.h>

#define dprint(exp)  printf(#exp " = %g\n", exp)
#define max(A,B) ((A) > (B) ? (A) : (B))


int main(){
    dprint(11/5);
    printf("The largest number is  : " " %d ", max(5, 7));
    return 0;
}
