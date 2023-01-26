from rest_framework import serializers
from .models import Announcements, Users, Messages, Conserner, Categories, Favoriser, Photos, Modules

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['firstName', 'lastName', 'email', 'phoneNumber', 'profilePicture']

class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcements
        fields = ['description', 'price', 'location', 'user', 'module']

class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = ['message' , 'reason' , 'dateSent', 'dateResponse', 'sender', 'annoucement']

class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Modules
        fields = ['nomModule']
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ['cycle', 'level']

class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favoriser
        fields = ['idUser', 'idAnnouncement']

class Conserner(serializers.ModelSerializer):
    class Meta:
        model = Conserner
        fields = ['idUser', 'idAnnouncement']


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photos
        fields = ['photo', 'priority', 'annoucement']
