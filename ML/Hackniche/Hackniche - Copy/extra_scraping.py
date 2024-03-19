import csv
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Initialize the Chrome webdriver
driver = webdriver.Chrome()

# Base URL of the webpage to scrape
base_url = "https://www.zomato.com/mumbai/third-wave-coffee-juhu"

# Function to scrape data
def scrape_data(url):
    driver.get(url)
    
    # Find all elements with class name "bcCauD" for names
    cuisines = driver.find_elements(By.CLASS_NAME, "sc-bPzAnn.kdFKrF")

    print(cuisines)
    
    # # Find all elements with class name "dJxGwQ" for reviews
    # reviews = driver.find_elements(By.CLASS_NAME, "dJxGwQ")
    
    # # Find all elements with class name "dYrjiw" for order type
    # orders = driver.find_elements(By.CLASS_NAME, "dYrjiw")

    # #Find all elements with class name "rating" for date
    # ratings = driver.find_elements(By.CLASS_NAME, "cILgox")
    
    # # Find all elements with class name "time-stamp" for date
    # dates = driver.find_elements(By.CLASS_NAME, "time-stamp")
    
    # Open the CSV file in write mode with newline='' to prevent extra newline characters
    with open('C:/Users/ASUS/Desktop/Projects/Hackniche/extra_scaping.csv', mode='a', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        
        # Write headers if the file is empty
        if file.tell() == 0:
            writer.writerow(['Name', 'Review', 'Order Type', 'Rating', 'Date'])
        
        # Iterate through the scraped data and write to CSV
        for name in zip(cuisines):
            writer.writerow([name.text])
        # for name, review, order, rating, date in zip(cuisines, reviews, orders, ratings, dates):
        #     writer.writerow([name.text, review.text, order.text, rating.text, date.text])

# Start iterating through the links
page_number = 1
url = base_url
driver.get(url)

# Check if the page exists
WebDriverWait(driver, 15).until(EC.visibility_of_element_located((By.CLASS_NAME, "sc-bPzAnn.kdFKrF")))
scrape_data(url)
page_number += 1

# Close the webdriver
driver.quit()