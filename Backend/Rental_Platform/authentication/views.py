from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
# Create your views here.

def signup(request):
    if(request.method == "POST"):
        username = request.POST['username']
        first_Name = request.POST['first_Name']
        last_Name = request.POST['last_Name']
        email = request.POST['email']
        password_1 = request.POST['password_1']
        password_2 = request.POST['password_2']
        my_User = User.objects.create_user(username, email, password_1)
        my_User.first_Name = first_Name
        my_User.last_Name = last_Name
        my_User.save()
        messages.success(request=request, message="Your account has been successfully created.")
        return redirect('authentication/src/signin.jsx')
    return render(request=request, template_name="authentication/src/signup.jsx")

def signin(request):
    if(request.method == "POST"):
        username = request.POST['username']
        password_1 = request.POST['password_1']
        user = authenticate(username=username, password=password_1)

        if(user is not None):
            login(request=request, user=user)
            return render(request=request, template_name="authentication/src/index.html", context={"first_Name" : first_Name})
        else:
            messages.error(request=request, message="Invalid credentials")
            return redirect('authentication/src/App.jsx')
    return render(request=request, template_name="authentication/src/signin.jsx")

def home(request):
    return render(request=request, template_name="authentication/src/App.jsx")

def signout(request):
    logout(request=request)
    messages.success(request=request, message="You have been logged out successfully.")
    return redirect('authentication/src/App.jsx')