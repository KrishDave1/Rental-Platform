from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

# Create your views here.
def login_User(request):
    if(request.method == "POST"):
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.success(request=request, message="There was an error logging in.")
            return redirect('login/')
    else:
        return render(request, 'templates/authentcate/login.html')

def logout_User(request):
    logout(request=request)
    return render(request, 'index.html')
