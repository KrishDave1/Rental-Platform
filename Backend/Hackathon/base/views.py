from django.shortcuts import render

rooms = [
    {'name' : 'Classroom', 'number' : 1, 'size' : 'big'},
    {'name' : 'Gaming room', 'number' : 2, 'size' : 'medium'},
    {'name' : 'Lounge', 'number' : 3, 'size' : 'small'}
]

# Create your views here.
def home(request):
    context = {'rooms' : rooms}
    return render(request, 'base/home.html', context)

def room(request, num):
    room = None
    for i in rooms:
        if(i['number'] == int(num)):
            room = i
    context = {'room' : room}
    return render(request, 'base/room.html', context)