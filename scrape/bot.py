#!/usr/bin/python
import praw
import re
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

print('Starting Scraper')

# Doing a headless browser, because that's neat
#browser = webdriver.PhantomJS()
options = Options()
options.add_argument('--headless')
options.add_argument('--disable-gpu')
browser = webdriver.Chrome(chrome_options=options)

browser.get('https://www.burpee.com/flowers/')
assert 'Burpee' in browser.title

flowers = []

# Grab links
subcats = browser.find_elements_by_css_selector('.b-clp_subcat-item')

for sub in subcats:
    title = sub.find_element_by_css_selector('.b-clp_subcat-item_title')
    link = sub.find_element_by_css_selector('.b-clp_subcat-item_link')
    #flowers.append({'name': title.text, 'link': link.get_attribute('href')})
    flowers.append({'name': title.text})

print(flowers)
    

