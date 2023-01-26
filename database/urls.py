from django.urls import path
from database import views

urlpatterns = [
    path("Announcements/", views.announcement_list),
    path("Announcements/<int:pk>", views.announcement_detail)
]