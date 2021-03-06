# Возведение чисел в степень

Ключевые формулы:
```
A^(2*M) = (A^M)^2
A^(M+N) = A^M * A^N
```

Возводим число с плавающей точкой (float) A в целую степень (integer) P:  
1. Используем первую формулу, чтобы вычислить A, A^2, A^4, A^8 и т.д, 
пока не получим значение A^N, где N + 1 > P
2. Используем эти степени A и вторую формулу, чтобы вычислить A^P 


Имея экспоненту P, алгоритм рассчитывает степени log(P), которые используются для числа A.
Затем он проверяет цифры числа P, переведенного в двоичную систему. 
Если цифра числа P равна 1, ей должна соответствовать определенная степень двойки.

Пример:  
A^15  
15 в двоичной системе исчисления равно 1111,
таким образом необходимо использовать степени числа 2:
2^1, 2^2, 2^4, 2^8 (проверяем 1+2+4+8 = 15)
степени двойки используем для A и подставляем во вторую формулу:
```
A^15 = A^1 * A^2 * A^4 * A^8
```