from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Announcements
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from  .serializers import AnnouncementSerializer
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

