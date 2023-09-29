from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=200)
    city_Rent = models.CharField(max_length=50)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name

# class Listing(models.Model):
#     type_Of_Item = models.CharField(max_length=100)
#     price = models.IntegerField(max_length=10)
#     duration_Of_Rent = models.IntegerField(max_length=10)
#     created = models.DateTimeField(auto_now_add=True)