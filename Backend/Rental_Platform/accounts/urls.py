from django.urls import path, include
from .api import Register_API, Login_API, User_API
from knox import views as knox_views
from accounts import views

urlpatterns = [
    path('', views.random_Page),
    path('api/auth/register', Register_API.as_view()),
    path('api/auth/login', Login_API.as_view()),
    path('api/auth/user', User_API.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
]