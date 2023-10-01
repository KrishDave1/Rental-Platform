from django.urls import path
from prime import views

urlpatterns = [
    path('', view=views.user_List)
]