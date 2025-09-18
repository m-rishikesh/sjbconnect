#this will ping the render backend

import requests
import time

url = 'https://sjbbackend-1.onrender.com'

while True:
    try:
        response = requests.get(url)
        response.raise_for_status()
        print(f'pingged the server :{response.status_code}')
    except Exception as e:
        print(f"error:{e}")
    time.sleep(600)
