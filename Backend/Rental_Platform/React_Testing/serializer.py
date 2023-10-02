from rest_framework import serializers
from .models import Office

class Office_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Office
        fields = ['employee', 'department']