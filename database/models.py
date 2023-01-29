from django.db import models
import base64
from cpkmodel import CPkModel

# Create your models here.



class Users(models.Model):
    idUser = models.AutoField(primary_key = True)
    firstName = models.CharField (max_length=255, default="")
    lastName = models.CharField(max_length=255, default="")
    email = models.EmailField(max_length=255)
    phoneNumber = models.CharField(max_length=20, default="")
    landLineNumber = models.CharField(max_length=20, default="", null=True)
    password = models.CharField(max_length=255, default="")
    address = models.CharField(max_length=125, default="")
    profilePicture = models.ImageField(upload_to="database/images" , default="database/images/default.png")

    def __str__(self):
        return self.firstName, self.lastName, self.profilePicture


class Announcements(models.Model):
    idAnnouncement = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255, default="")
    description = models.CharField(max_length=700, default="")
    price = models.IntegerField(default=0)
    location = models.CharField(max_length=125, default="")
    user = models.ForeignKey(Users, on_delete= models.CASCADE)
    module = models.CharField(max_length=125, default="")
    category = models.CharField(max_length=125, default="")

    def __str__(self):
        return self.title, str(self.module)+''+ str(self.category)






class Favoriser(models.Model):
    idFavoriser = models.AutoField(primary_key=True)
    idUser = models.ForeignKey(Users, on_delete=models.CASCADE)
    idAnnouncement = models.ForeignKey(Announcements, on_delete=models.CASCADE)
    
    class Meta:
        unique_together = ['idUser', 'idAnnouncement']



class Messages(models.Model):
    idMessage = models.AutoField(primary_key=True)
    STATE_CHOICES = [
        (-1, 'Refusé(e)'),
        (0, 'En attente'),
        (1, 'Accepté(e)')
    ]
    state = models.IntegerField(default=0, choices=STATE_CHOICES)
    reason = models.CharField(max_length=255, default="")
    dateSent = models.DateTimeField(auto_now_add=True)
    dateResponse = models.DateTimeField(null=True)
    sender = models.ForeignKey(Users, on_delete=models.CASCADE)
    announcement = models.ForeignKey(Announcements, on_delete=models.CASCADE)

    def __str__(self):
        return self.idMessage

class Photos(models.Model):
    idPhoto = models.AutoField(primary_key=True)
    photo = models.ImageField(upload_to="database/images", default="database/images/default.png")
    priority = models.IntegerField(default=0)
    announcement = models.ForeignKey(Announcements, on_delete=models.CASCADE, related_name='announcement_photo')

    def __str__(self):
        with open(self.photo, "rb") as image_file:
            image_data = base64.b64encode(image_file.read()).decode('utf-8')

        return image_data


