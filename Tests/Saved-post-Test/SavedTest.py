from selenium import webdriver

#Tester si un post est favoriser ou non 
driver = webdriver.Firefox()

driver.get("https://Aiducation.com/post-page")

save_button = driver.find_element_by_css_selector("button.save")

save_button.click()

saved_icon = driver.find_element_by_css_selector("i.icon-saved")

if saved_icon.is_displayed():
    print("l'announce est favorisé")
else:
    print("l'announce n'est pas favorisé")

driver.quit()
