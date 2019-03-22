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

links = []
for sub in subcats:
    title = sub.find_element_by_css_selector('.b-clp_subcat-item_title')
    link = sub.find_element_by_css_selector('.b-clp_subcat-item_link')
    links.append({'name': title.text, 'link': link.get_attribute('href')})


properties = []
count = 0
for link in links:
    count+=1
    property_map = {}
    browser.get(link['link'])
    productDescription = browser.find_elements_by_css_selector('.b-product_description')
    if len(productDescription) == 0:
        productLink = browser.find_element_by_css_selector('.b-product_name-link')
        browser.get(productLink.get_attribute('href'))
    props = browser.find_elements_by_css_selector('.b-product_properties-item')
    for prop in props:
        props_name = prop.find_element_by_css_selector('.b-product_properties-property_name')
        props_value = prop.find_element_by_css_selector('.b-product_properties-property_value')
        property_map[props_name.text] = props_value.text
    property_map['name'] = link['name']
    property_map['id'] = count
    properties.append(property_map);


print(properties)
    

