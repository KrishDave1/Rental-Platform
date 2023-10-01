from django.shortcuts import render, redirect
from .models import Product, CustomUser
from .serializer import Product_Serializer, CustomUser_Serializer
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework import status
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.auth import login, logout, authenticate
from django.http import HttpResponseRedirect
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view

User = get_user_model()

# Create your views here.

def login_User(request):
    if(request.user.is_authenticated):
        return redirect('home')
    
    if(request.method == "POST"):
        username = request.POST.get('username')
        password = request.POST.get('password')
    
        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request=request, message="Username does not exist")
        
        user = authenticate(request=request, username=username, password=password)
        if(user is not None):
            login(request=request, user=user)
            return redirect('home.html')
        else:
            messages.error(request=request, message="Username or password is incorrect")
    
    return render(request=request, template_name="login_Page.html")

def logout_User(request):
    logout(request=request)
    return redirect('home.html')

def sign_Up_User(request):
    if(request.method == "POST"):
        username = request.POST.get('username')
        email = request.POST.get('email')
        password_1 = request.POST.get('password_1')
        password_2 = request.POST.get('password_2')
        if(password_1 == password_2):
            user = User.objects.create_user(username=username, email=email, password=password_1)
            return redirect("login_Page.html")
        else:
            messages.error(request=request, message="Your password and confirm password do not match.")
    return render(request=request, template_name="sign_Up.html")

@api_view(['GET', 'POST'])
def user_List(request):
    if(request.method == "GET"):
        items = CustomUser.objects.all()
        serializer = CustomUser_Serializer(items, many=True)
        return Response(serializer.data)
    if(request.method == "POST"):
        serializer = CustomUser_Serializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)

