from django.db import models
import base64

# Create your models here.



class Users(models.Model):
    idUser = models.AutoField(primary_key = True)
    firstName = models.CharField (max_length=255, default="")
    lastName = models.CharField(max_length=255, default="")
    email = models.CharField(max_length=255, default="")
    phoneNumber = models.CharField(max_length=20, default="")
    landLineNumber = models.CharField(max_length=20, default="")
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
    user = models.OneToOneField(Users, on_delete= models.CASCADE)
    module = models.CharField(max_length=125, default="")
    category = models.CharField(max_length=125, default="")

    def __str__(self):
        return self.title, str(self.module)+''+ str(self.category)






class Favoriser(models.Model):
    idUser = models.OneToOneField(Users, on_delete=models.CASCADE)
    idAnnouncement = models.OneToOneField(Announcements, on_delete=models.CASCADE, primary_key=True)



class Messages(models.Model):
    message = models.CharField(max_length=255, default="")
    state = models.IntegerField(default="")
    reason = models.CharField(max_length=255, default="")
    dateSent = models.DateTimeField(default="")
    dateResponse = models.DateTimeField(default="")
    sender = models.OneToOneField(Users, on_delete=models.CASCADE)
    announcement = models.OneToOneField(Announcements, on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return self.message

class Photos(models.Model):
    idPhoto = models.AutoField(primary_key=True)
    photo = models.ImageField(upload_to="database/images", default="database/images/default.png")
    priority = models.IntegerField(default="")
    announcement = models.ForeignKey(Announcements, on_delete=models.CASCADE)

    def __str__(self):
        with open(self.photo, "rb") as image_file:
            image_data = base64.b64encode(image_file.read()).decode('utf-8')

        return image_data


