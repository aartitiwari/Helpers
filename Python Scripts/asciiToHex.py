#!/usr/bin/python3

# Text or number input to be converted
get = input()

#Hex encoding
result = get.encode().hex()

# Print result
print(result)