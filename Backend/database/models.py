from django.db import models
import base64
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
        return self.firstName+" "+self.lastName


class Announcements(models.Model):
    idAnnouncement = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255, default="")
    description = models.TextField()
    price = models.IntegerField(default=0)
    wilaya = models.CharField(max_length=125, default="")
    commune = models.CharField(max_length=125, default="")
    user = models.ForeignKey(Users, on_delete= models.CASCADE, related_name='Users')
    module = models.CharField(max_length=125, default="")
    CATEGORY_CHOICES = [
        (0, 'Primaire'),
        (1, 'Moyenne'),
        (2, 'Secondaire'),
        (3, 'Universitaire')
    ]
    category = models.IntegerField(choices=CATEGORY_CHOICES)

    def __str__(self):
        return self.title + " " + str(self.module)+" "+ str(self.category)






class Favoriser(models.Model):
    idFavoriser = models.AutoField(primary_key=True)
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    announcement = models.ForeignKey(Announcements, on_delete=models.CASCADE)
    
    class Meta:
        unique_together = ['user', 'announcement']



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
        return str(self.idMessage)

class Photos(models.Model):
    idPhoto = models.AutoField(primary_key=True)
    photo = models.ImageField(upload_to="database/images", default="database/images/default.png")
    priority = models.IntegerField(default=0)
    announcement = models.ForeignKey(Announcements, on_delete=models.CASCADE, related_name='announcement_photo')



