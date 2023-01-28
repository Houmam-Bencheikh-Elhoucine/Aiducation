from django.urls import path
from . import views


urlpatterns = [
    path('', views.users_list, name= "Users"),
    path('detail/<str:pk>/', views.user_detail, name="Detail"),
    path('create', views.user_create, name="Create"),
    path('update/<str:pk>/', views.user_update, name="Update"),
    path('delete/<str:pk>/', views.user_delete, name ="Delete"),
]