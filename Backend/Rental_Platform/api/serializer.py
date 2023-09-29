from rest_framework import serializers
from base.models import Item

class Item_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'