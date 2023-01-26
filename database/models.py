from django.db import models

# Create your models here.


class Addresses(models.Model):
    idAddress = models.AutoField(primary_key=True)
    state = models.CharField(max_length=100, default="")    #NA stands for non applicable
    city = models.CharField(max_length=100, default="")
    description = models.CharField(max_length=1024, default="")


class Users(models.Model):
    idUser = models.AutoField(primary_key = True)
    firstName = models.CharField (max_length=255, default="")
    lastName = models.CharField(max_length=255, default="")
    email = models.CharField(max_length=255, default="")
    phoneNumber = models.CharField(max_length=20, default="")
    landLineNumber = models.CharField(max_length=20, default="")
    password = models.CharField(max_length=255, default="")
    address = models.ForeignKey(Addresses, on_delete=models.CASCADE)
    profilePicture = models.ImageField(upload_to="database/images" , default="database/images/default.png")


class Modules(models.Model):
    idModule = models.CharField(max_length=50, primary_key=True)
    nomModule = models.CharField(max_length=100, default="")


class Announcements(models.Model):
    idAnnouncement = models.AutoField(primary_key=True)
    description = models.CharField(max_length=700, default="")
    price = models.IntegerField(default=0)
    location = models.ForeignKey(Addresses, on_delete= models.CASCADE)
    user = models.OneToOneField(Users, on_delete= models.CASCADE)
    module = models.OneToOneField(Modules, on_delete=models.CASCADE)


class Categories(models.Model):
    idCategory = models.AutoField(primary_key=True)
    cycle = models.CharField(max_length=10, default='')
    level = models.IntegerField( default=0)
    #dont forget to insert default categories


class Conserner(models.Model):
    idCategory = models.OneToOneField(Categories, on_delete=models.CASCADE)
    idAnnouncement = models.OneToOneField(Announcements, on_delete=models.CASCADE, primary_key=True)


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


class Photos(models.Model):
    idPhoto = models.AutoField(primary_key=True)
    photo = models.ImageField(upload_to="database/images", default="database/images/default.png")
    priority = models.IntegerField(default="")
    announcement = models.ForeignKey(Announcements, on_delete=models.CASCADE)



