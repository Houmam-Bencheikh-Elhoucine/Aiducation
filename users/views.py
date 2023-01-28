
from rest_framework.response import Response
from .models import Users
from .serializers import UsersSerializer
from rest_framework.decorators import api_view
# Create your views here.

#Users CRUD Functions
@api_view(['GET'])
def users_list(request):
    users = Users.objects.all()
    serializer = UsersSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def user_detail(request, pk):
    user = Users.objects.all(id=pk)
    serializer = UsersSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def user_create(request):
    serializer = UsersSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def user_update(request, pk):
    user = Users.objects.all(id=pk)
    serializer = UsersSerializer(instance=user, data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def user_delete(request, pk):
    user = Users.objects.get(id=pk)
    user.delete()
    return Response('Deleted')