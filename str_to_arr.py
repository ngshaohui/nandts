num = "1001100001110110"

arr = "["

for ch in num:
    if ch == '1':
        arr += "true, "
    else:
        arr += "false, "

arr = arr[:-2]
arr += "]"

print(arr)