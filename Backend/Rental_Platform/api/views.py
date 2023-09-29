from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Item
from .serializer import Item_Serializer

@api_view(["GET"])
def get_Data(request):
    items = Item.objects.all()
    serializer = Item_Serializer(items, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def add_Item(request):
    serializer = Item_Serializer(data=request.data)
    if(serializer.is_valid()):
        serializer.save()
    return Response(serializer.data)
