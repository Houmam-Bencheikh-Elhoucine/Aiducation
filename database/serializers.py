from rest_framework import serializers
from .models import Announcements, Users, Messages, Favoriser, Photos

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photos
        fields = '__all__'

class AnnouncementSerializer(serializers.ModelSerializer):
    announcement_photo = serializers.SlugRelatedField(
        many=True,
        read_only = True,
        slug_field='idPhoto'
    )
    class Meta:
        model = Announcements
        fields = '__all__'


class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = '__all__'



class FavoriserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favoriser
        fields = '__all__'


