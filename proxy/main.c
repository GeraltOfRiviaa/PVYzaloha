#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define SOUBOR "datalog.csv"

typedef struct {
 char id[20];
 int hodinyStart;
 int minutyStart;
 int hodinyKonec;
 int minutyKonec;
 int data;
}LOGS;
void bubbleSort(){

}

int main(void) {
    FILE *soubor;
    LOGS *logs = NULL;
    char radek[100];
    char *temp;
    int i = 0;
    int j = 0;
    soubor = fopen(SOUBOR, "r");
    if (soubor == NULL){
        printf("Nastala chyba pri otevirani souboru <3");
        return 0;
    }
    while(fgets(radek, 100, soubor)){
        logs = realloc(logs, (j + 1) * sizeof(LOGS));
        if (logs == NULL) {
            printf("Error reallocating logs");
            return 0;
        }

        radek[strcspn(radek, "\n")] = '0';
        temp = strtok(radek, " :");
        while(temp != NULL){
            switch (i) {
                case 0:
                    strcpy(logs[j].id,temp);
                    break;
                case 1:
                    logs[j].hodinyStart = atoi(temp);
                    break;
                case 2:
                    logs[j].minutyStart = atoi(temp);
                    break;
                case 3:
                    logs[j].hodinyKonec = atoi(temp);
                    break;
                case 4:
                    logs[j].minutyKonec = atoi(temp);
                    break;
                case 5:
                    logs[j].data = atoi(temp);
                    break;
            }
            i++;
            temp = strtok(NULL, " :");
        }
        i = 0;
        printf("%s %d:%d %d:%d %d", logs[j].id, logs[j].hodinyStart, logs[j].minutyKonec, logs[j].hodinyKonec, logs[j].minutyKonec, logs[j].data);
        printf("\n");
        j++;
        free(temp);
    }
    j = 0;
    fclose(soubor);

    return 0;
}
