from django.contrib import admin
from django.urls import path
from authentication import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home),
    path('signin/', views.signin),
    path('signup/', views.signup)
]