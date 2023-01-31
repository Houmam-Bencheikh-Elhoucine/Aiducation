from django.test import TestCase
from .models import Announcements, Favoriser, Messages
from rest_framework.test import APITestCase

# Create your tests here.

class TestCaseAnnouncements(TestCase):
    def createAnnouncementTest(self):
        obj = Announcements.objects.create(
            title = "Cours de soutien d'Anglais",
            description = "Pour bien apprendre son Anglais, on vous propose ces cours de soutien avancés n Anglais",
            price = 2500,
            wilaya = "Tizi Ouzou",
            commune = "Tadmait",
            user = 1,
            module = "Anglais",
            category = 1
        )
        self.assertEqual(len(Announcements.objects.filter(idAnnouncement = obj.idAnnouncement)), 1)

class TestCaseFavoriser(TestCase):
    def favoriserAnnouncementTest(self):
        obj = Favoriser.objects.create(
            idUser = 1,
            idAnnouncement = 1
        )
        self.assertEqual(len(Favoriser.objects.filter(idFavoriser = obj.idFavoriser)), 1)

class TestCaseMessages(TestCase):
    def deleteMessageTest(self):
        obj = Messages.objects.create(
            sender = 1,
            announcement = 1
        )
        self.assertEqual(len(Messages.objects.filter(idMessage = obj.idMessage)), 1)

        obj.delete()

        self.assertEqual(len(Messages.objects.filter(idMessage = obj.idMessage)), 0)