from rest_framework import serializers
from .models import Room

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['name', 'description', 'updated', 'created']