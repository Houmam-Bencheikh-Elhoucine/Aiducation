from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Announcements, Users
from .serializers import UsersSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from  .serializers import AnnouncementSerializer
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import os
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.keys import Keys
# Create your views here.


@api_view(['GET', 'POST'])
def announcement_list(request):
    if request.method == 'GET':
        announcements = Announcements.objects.all()
        serializer = AnnouncementSerializer(announcements, many= True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = AnnouncementSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return  JsonResponse(serializer.data, status= status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status= status.HTTP_400_BAD_REQUEST)
@api_view(['GET', 'PUT', 'DELETE'])
def announcement_detail(request, pk):
    try:
        announcements = Announcements.objects.get(pk=pk)
    except Announcements.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = AnnouncementSerializer(announcements)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = AnnouncementSerializer(announcements, data = data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status= status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        announcements.delete()
        return HttpResponse(status = status.HTTP_204_NO_CONTENT)
@api_view(['POST'])
def announcement_create(request):
    serializer = AnnouncementSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    return JsonResponse(serializer.data)
#Users CRUD Functions
@api_view(['GET'])
def users_list(request):
    users = Users.objects.all()
    serializer = UsersSerializer(users, many=True)
    return JsonResponse(serializer.data)

@api_view(['GET'])
def user_detail(request, pk):
    user = Users.objects.all(pk)
    serializer = UsersSerializer(user, many=False)
    return JsonResponse(serializer.data)

@api_view(['POST'])
def user_create(request):
    serializer = UsersSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    return JsonResponse(serializer.data)

@api_view(['POST'])
def user_update(request, pk):
    user = Users.objects.all(pk)
    serializer = UsersSerializer(instance=user, data=request.data)

    if serializer.is_valid():
        serializer.save()
    return JsonResponse(serializer.data)

@api_view(['DELETE'])
def user_delete(request, pk):
    user = Users.objects.get(pk)
    user.delete()
    return JsonResponse('Deleted')




def scrap_funtion():
    os.environ ['PATH']+= "D:\SeleniumDrivers\firefox_driver"
    driver = webdriver.Firefox()
    driver2 = webdriver.Firefox()

    driver.get("https://www.apprentus.com/fr/soutien-scolaire/Alger-Algerie")
    titles = []
    prices = []
    descriptions = []
    locations = []
    users = []
    modules = []
    categories = []
    cards = driver.find_elements(By.CLASS_NAME, 'title-link')
    print(len(cards))
    for card in cards:
        #start = card.find_element(By.CLASS_NAME, 'title-link')
        link = card.get_attribute('href')
        driver2.get(link)
        title = driver2.find_element(By.ID, 'course_title')
        title_text = title.find_element(By.TAG_NAME, 'span')
        title_text= title_text.find_element(By.TAG_NAME, 'span')
        titles.append(title_text.text)
        price = driver2.find_element(By.XPATH, "/html/body/div[1]/div[3]/div/div[2]/div/div[3]/div[1]/div[2]/div[1]/div/div/div/span[2]/span/span[1]")
        prices.append(price.text)
        description = driver2.find_element(By.XPATH, '/html/body/div[1]/div[3]/div/div[2]/div/div[3]/div[1]/div[2]/div[2]/div[1]/span/span/span')
        descriptions.append(description.text)
        location = driver2.find_element(By.XPATH, '/html/body/div[1]/div[3]/div/div[2]/div/div[3]/div[1]/div[1]/div[2]/div[2]/div[2]/div/div/div/div[2]/span[1]/a')
        locations.append(location.text)
        user = driver2.find_element(By.XPATH, '/html/body/div[1]/div[3]/div/div[2]/div/div[3]/div[1]/div[1]/div[2]/div[1]/h5/a')
        users.append(user.text)
        #module = driver2.find_element(By.XPATH, '/html/body/div[1]/div[3]/div/div[2]/div/div[3]/div[1]/div[2]/div[2]/div[3]/table/tbody/tr[1]/td/div/span[1]/a')
        modules.append("")
        categories.append("")

    for i in range (len(titles)):
        title = titles[i]
        description = descriptions[i]
        price= prices[i]
        location = locations[i]
        user = users[i]
        module = modules[i]
        category = categories[i]
        announcement = announcement_create(title = title, description = description, price = price, location = location, user = user, module = module, category = category)
        announcement.save()






