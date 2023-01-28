from django.db import models

# Create your models here.
class Users(models.Model):
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