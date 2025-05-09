#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#define SIZE 5

void fillMatrix(int matrix[SIZE][SIZE]) {
    for (int i = 0; i < SIZE; i++) {
        for (int j = 0; j < SIZE; j++) {
            matrix[i][j] = rand() % 100;
        }
    }
}

void printMatrix(int matrix[SIZE][SIZE]) {
    for (int i = 0; i < SIZE; i++) {
        for (int j = 0; j < SIZE; j++) {
            printf("%2d ", matrix[i][j]);
        }
        printf("\n");
    }
}
int symmetry(int matrix[SIZE][SIZE]) {
    for (int i = 0; i < SIZE; i++) {
        for (int j = 0; j < SIZE; j++) {
            if (matrix[i][j] != matrix[j][i]) {
                return 0;
            }
        }
    }
    return 1;
}

int main(void) {
    srand(time(NULL));
    int fillMatri[SIZE][SIZE];
    fillMatrix(fillMatri);
     int array[SIZE][SIZE] = {
            {99,1,2,4,10},
            {1,98,3,5,9},
            {2,3,97,6,8},
            {4,5,6,96,7},
            {10,9,8,7,95}
                            };

    printMatrix(array);
    if (symmetry(array)) {
        printf("The matrix is symmetric\n\n");
    } else {
        printf("The matrix is not symmetric\n\n");
    }
    printMatrix(fillMatri);
    if (symmetry(fillMatri)) {
        printf("The matrix is symmetric\n");
    } else {
        printf("The matrix is not symmetric\n");
    }
    return 0;
}
