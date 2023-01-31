from selenium import webdriver
from selenium.webdriver.common.keys import Keys


driver = webdriver.Firefox()


driver.get("https://yourwebsite.com/login")


google_signin_button = driver.find_element_by_css_selector(".g-signin2")
google_signin_button.click()


driver.switch_to.window(driver.window_handles[1])


email_input = driver.find_element_by_id("identifierId")
email_input.send_keys("testuser@gmail.com")
email_input.send_keys(Keys.RETURN)


password_input = driver.find_element_by_name("password")
password_input.send_keys("testpassword")
password_input.send_keys(Keys.RETURN)


driver.switch_to.window(driver.window_handles[0])


assert "Welcome, Test User" in driver.page_source


driver.quit()
