from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Item
from .serializer import Item_Serializer

@api_view(['GET', 'POST'])
def item_List(request):
    if(request.method == 'GET'):
        items = Item.objects.all()
        serializer = Item_Serializer(items, many = True)
        return Response(serializer.data)
    if(request.method == 'POST'):
        serializer = Item_Serializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save()
        return Response(serializer.data)
    