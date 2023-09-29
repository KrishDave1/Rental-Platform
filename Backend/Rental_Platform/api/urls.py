from django.urls import path
from api import views

urlpatterns = [
    path('', views.user_List),
    # path('listings/', views.listings)
]