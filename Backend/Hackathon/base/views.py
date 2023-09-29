from django.shortcuts import render
from rest_framework.views import APIView
from .models import Room
from rest_framework.response import Response
from .serializer import ReactSerializer

# Create your views here.


class ReactView(APIView):
    serializer_class = ReactSerializer

    def get(self, request):
        detail = [
            {
                "name": detail.name,
                "description": detail.description,
                "updated": detail.updated,
                "created": detail.created,
            }
            for detail in Room.objects.all()
        ]
        return Response(detail)

    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


rooms = [
    {"name": "Classroom", "number": 1, "size": "big"},
    {"name": "Gaming room", "number": 2, "size": "medium"},
    {"name": "Lounge", "number": 3, "size": "small"},
]


# Create your views here.
def home(request):
    context = {"rooms": rooms}
    return render(request, "base/home.html", context)


def room(request, num):
    room = None
    for i in rooms:
        if i["number"] == int(num):
            room = i
    context = {"room": room}
    return render(request, "base/room.html", context)
