from django.urls import path
from base import views

urlpatterns = [
    path('', views.home, name="home"),
    path('room/<str:num>/', views.room, name="room")
]