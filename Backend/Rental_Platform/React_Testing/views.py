from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from .serializer import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
# Create your views here.
# class Office_View(APIView):
#     def get(self, request):
#         output = [{"employee" : output.employee, "department" : output.department} for output in Office.objects.all()]
#         return Response(output)
    
#     def post(self, request):
#         serializer = Office_Serializer(data=request.data)
#         if(serializer.is_valid(raise_exception=True)):
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)

# class Office_View(APIView):
#     def handle_Get_Post(self, request):
#         if(request.method == "GET"):
#             output = [{"employee" : output.employee, "department" : output.department} for output in Office.objects.all()]
#             return Response(output)
        
#         if(request.method == "POST"):
#             serializer = Office_Serializer(data=request.data)
#             if(serializer.is_valid(raise_exception=True)):
#                 serializer.save()
#                 return Response(serializer.data, status=status.HTTP_201_CREATED)
#             return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET', 'POST'])
def handle_Get_Post(request):
    if(request.method == "GET"):
        output = [{"employee" : output.employee, "department" : output.department} for output in Office.objects.all()]
        return Response(output)
    
    if(request.method == "POST"):
        serializer = Office_Serializer(data=request.data)
        if(serializer.is_valid(raise_exception=True)):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)