from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import User
from .serializer import User_Serializer
from rest_framework import status

@api_view(['GET', 'POST'])
def user_List(request):
    if(request.method == "GET"):
        items = User.objects.all()
        serializer = User_Serializer(items, many=True)
        return Response(serializer.data)
    if(request.method == "POST"):
        serializer = User_Serializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET', 'POST'])
def listings(request):
    if(request.method == "GET"):
        lists = Listing.objects.all()
        serializer = Listing_Serializer(lists, many=True)
        return Response(serializer.data)
    if(request.method == "POST"):
        serializer = Listing_Serializer(data=request.data)
        if(serializer.is_valid()): 
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)