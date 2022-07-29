import requests

reqUrl = "http://127.0.0.1/api/note"

headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Content-Type": "multipart/form-data; boundary=kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A" 
}

payload = "--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"question\"\r\n\r\nWhat is react?\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"answer\"\r\n\r\nReact is a framework\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"group\"\r\n\r\ncse\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A--\r\n"

response = requests.request("POST", reqUrl, data=payload,  headers=headersList)

print(response.text)

#2

import requests

reqUrl = "http://127.0.0.1/api/note"

headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Content-Type": "multipart/form-data; boundary=kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A" 
}

payload = "--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"question\"\r\n\r\nWhich is faster C++ or Python?\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"answer\"\r\n\r\nC++\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"group\"\r\n\r\ncse\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A--\r\n"

response = requests.request("POST", reqUrl, data=payload,  headers=headersList)

print(response.text)


#3

import requests

reqUrl = "http://127.0.0.1/api/note"

headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Content-Type": "multipart/form-data; boundary=kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A" 
}

payload = "--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"question\"\r\n\r\nWhat language has pointers? Python or C++\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"answer\"\r\n\r\nC++\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"group\"\r\n\r\ncse\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A--\r\n"

response = requests.request("POST", reqUrl, data=payload,  headers=headersList)

print(response.text)


#4
import requests

reqUrl = "http://127.0.0.1/api/note"

headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Content-Type": "multipart/form-data; boundary=kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A" 
}

payload = "--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"question\"\r\n\r\nStack is\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"answer\"\r\n\r\nLIFO\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"group\"\r\n\r\ncse\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A--\r\n"

response = requests.request("POST", reqUrl, data=payload,  headers=headersList)

print(response.text)


#5

import requests

reqUrl = "http://127.0.0.1/api/note"

headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Content-Type": "multipart/form-data; boundary=kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A" 
}

payload = "--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"question\"\r\n\r\nQueue is\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"answer\"\r\n\r\nFIFO\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"group\"\r\n\r\ncse\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A--\r\n"

response = requests.request("POST", reqUrl, data=payload,  headers=headersList)

print(response.text)
#6

import requests

reqUrl = "http://127.0.0.1/api/note"

headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Content-Type": "multipart/form-data; boundary=kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A" 
}

payload = "--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"question\"\r\n\r\nHow to get the address of a variable\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"answer\"\r\n\r\n&variable\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"group\"\r\n\r\ncse\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A--\r\n"

response = requests.request("POST", reqUrl, data=payload,  headers=headersList)

print(response.text)
#7

import requests

reqUrl = "http://127.0.0.1/api/note"

headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Content-Type": "multipart/form-data; boundary=kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A" 
}

payload = "--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"question\"\r\n\r\nHow do you declare the pointer variable?\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"answer\"\r\n\r\ndatatype * variable;\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"group\"\r\n\r\ncse\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A--\r\n"

response = requests.request("POST", reqUrl, data=payload,  headers=headersList)

print(response.text)
#8
import requests

reqUrl = "http://127.0.0.1/api/note"

headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Content-Type": "multipart/form-data; boundary=kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A" 
}

payload = "--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"question\"\r\n\r\nWho created Python?\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"answer\"\r\n\r\nGuido Van Rossum\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"group\"\r\n\r\ncse\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A--\r\n"

response = requests.request("POST", reqUrl, data=payload,  headers=headersList)

print(response.text)
#9
import requests

reqUrl = "http://127.0.0.1/api/note"

headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Content-Type": "multipart/form-data; boundary=kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A" 
}

payload = "--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"question\"\r\n\r\nWhat is the compulsary function in C?\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"answer\"\r\n\r\nmain() { }\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"group\"\r\n\r\ncse\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A--\r\n"

response = requests.request("POST", reqUrl, data=payload,  headers=headersList)

print(response.text)
#10
import requests

reqUrl = "http://127.0.0.1/api/note"

headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Content-Type": "multipart/form-data; boundary=kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A" 
}

payload = "--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"question\"\r\n\r\nHow do you declare a constant in C?\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"answer\"\r\n\r\n#define CONSTANT 4928943\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A\r\nContent-Disposition: form-data; name=\"group\"\r\n\r\ncse\r\n--kljmyvW1ndjXaOEAg4vPm6RBUqO6MC5A--\r\n"

response = requests.request("POST", reqUrl, data=payload,  headers=headersList)

print(response.text)