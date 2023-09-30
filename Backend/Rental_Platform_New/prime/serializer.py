from rest_framework import serializers
from .models import Product, User

class Product_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

class User_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
