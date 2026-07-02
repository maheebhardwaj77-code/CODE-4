#Recursion in python:-s
def show(n):
    if(n == 0):
        return
    print(n)
    show(n-2)
show(10)

def fact(j):
    if(j == 0 or j == 1):
        return 1
    else:
        return j * fact(j - 1)
print(fact(5))

# WARF to calculate the sum of first n natural number:_
k = int(input("enter number :"))
def sum(k):
    if(k == 0):
        return 0
    else:
        return k + sum(k-1)
print(sum(k))               

#WARF to print all element in a list:-
def list_fun(list, idx=0):
    if(idx == len(list)):
        return
    print(list[idx])
    list_fun(list, idx+1)

sports = ["circket", "football", "baseball", "vollyball"]

print(list_fun(sports))