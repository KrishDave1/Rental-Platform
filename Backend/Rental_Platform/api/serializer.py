from rest_framework import serializers
from base.models import User, Listing, Cart

class User_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class Listing_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'

class Cart_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'
        ordering = ('-updated', '-created')