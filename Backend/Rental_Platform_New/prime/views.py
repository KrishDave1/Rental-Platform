from django.shortcuts import render
from .models import User, Product
from .serializer import User_Serializer, Product_Serializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
# Create your views here.

# @api_view(['GET', 'POST'])
# def handle_Get_Post_User(request):
#     if(request.method == "GET"):
#         output = [{}]