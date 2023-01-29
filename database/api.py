from database.models import Messages, Announcements, Users, Favoriser, Photos
from rest_framework import viewsets, permissions
from .serializers import MessagesSerializer, AnnouncementSerializer, UsersSerializer, FavoriserSerializer, PhotoSerializer

#Message Viewset
class MessageViewSet (viewsets.ModelViewSet):
    queryset = Messages.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MessagesSerializer

#Announcement Viewset
class AnnouncementViewSet (viewsets.ModelViewSet):
    queryset = Announcements.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AnnouncementSerializer

#User Viewset
class UserViewSet (viewsets.ModelViewSet):
    queryset = Users.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UsersSerializer

#Favoriser Viewset
class FavoriserViewSet (viewsets.ModelViewSet):
    queryset = Favoriser.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = FavoriserSerializer

#Photos Viewset
class PhotosViewSet (viewsets.ModelViewSet):
    queryset = Photos.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PhotoSerializer