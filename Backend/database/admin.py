from django.contrib import admin
from .models import Users,Announcements, Messages, Photos, Favoriser


admin.site.register(Users)
admin.site.register(Announcements)
admin.site.register(Messages)
admin.site.register(Photos)
admin.site.register(Favoriser)
