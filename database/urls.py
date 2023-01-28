from django.urls import path
from database import views

urlpatterns = [
    path("Announcements/", views.announcement_list),
    path("Announcements/<int:pk>", views.announcement_detail),
    path('', views.users_list, name= "Users"),
    path('detail/<str:pk>/', views.user_detail, name="Detail"),
    path('create', views.user_create, name="Create"),
    path('update/<str:pk>/', views.user_update, name="Update"),
    path('delete/<str:pk>/', views.user_delete, name ="Delete"),
]