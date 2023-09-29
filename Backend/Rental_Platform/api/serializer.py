from rest_framework import serializers
from base.models import User, Listing

class User_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class Listing_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'