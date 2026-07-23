#Functions in python:-
def calc_sum(a, b):
    sum = a + b
    print(sum)
    return(sum)
calc_sum(4, 5)

def avg_(a, b, c):
    avg = (a + b + c)/3
    print(avg)
    return(avg)
avg_(7, 3, 5)
 
print("Btech", end="@")
print("AIML") 

def prod_(a=4, b=5):
    print(a * b)
    return(a * b)
prod_()
prod_(7, 7)  

#WAF to print the length of a list:-
def list_len(list):
    print(len(list))
def list_list(list):
    for item in list:
        print(item, end=" ")   

age = [23, 45, 67, 89, 92, 34]
list_len(age)  
list_list(age)

#WAF  to find the factorial of n:-
def fact_(n):
    fact = 1
    for i in range(1, n+1):
        fact *= i
    print(fact)
fact_(8) 

#WAF to convert USD to INR:-
def USD_(m):
    INR = (m * 80)
    print(INR)
USD_(10)

#WAF for even and odd number:-
def no_(s):
    if(s % 2 == 0):
        print("even")
    else:
        print("odd")
no_(100)         

print("ok guys")