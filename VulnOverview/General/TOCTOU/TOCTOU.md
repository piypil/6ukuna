
TOCTOU (Time of Check to Time of Use) - от времени проверки до времени использования. TOCTOU это разновидность состояния гонки ([[Race Conditions]]).  Time of Check (TOC) - программа проверяет состояние ресурса. Time of Use (TOU) - программа использует информацию для целенаправленных действий. Эти процессы могут работать независимо  друг от друга и в разное время. Если данные процессы будут использоваться без механизмов синхронизации, то это может привести к проблемам безопасности и неожиданному поведению программы. [OG](https://cqr.company/ru/web-vulnerabilities/time-of-check-to-time-of-use-tocttou-race-conditions/)

Злоумышленник может использовать интервал между проверкой информации и ее использованием. Изменив целостность и конфиденциальность информации в данном временном интервале. Злоумышленник может изменить ценную информацию в файле после ее проверки в временном промежутке до того как она попадет к пользователю.[OG](https://www.securitylab.ru/glossary/toctou/)

#CWE-367 
