from rest_framework import routers
from .api import MessageViewSet, AnnouncementViewSet, UserViewSet, FavoriserViewSet, PhotosViewSet

router = routers.DefaultRouter()
router.register('api/messages', MessageViewSet, 'messages')
router.register('api/announcements', AnnouncementViewSet, 'announcements')
router.register('api/users', UserViewSet, 'announcements')
router.register('api/favoriser', FavoriserViewSet, 'favoriser')
router.register('api/photos', PhotosViewSet, 'photos')

urlpatterns = router.urls