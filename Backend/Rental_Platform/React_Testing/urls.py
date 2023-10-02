from django.urls import path
from React_Testing import views

urlpatterns = [
    path('', views.handle_Get_Post)
]