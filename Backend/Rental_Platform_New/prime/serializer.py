from rest_framework import serializers
from .models import Product, CustomUser

class Product_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

class CustomUser_Serializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = "__all__"
