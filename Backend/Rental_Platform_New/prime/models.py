from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=50)
    email = models.EmailField()
    password = models.CharField()
    city_Where_Renting = models.CharField(max_length=20)

    def __str__(self) -> str:
        return (self.username)

class Product(models.Model):
    user = models.ForeignKey(User)
    type_Of_Item = models.CharField(max_length=50)
    price = models.IntegerField()
    duration_Of_Rent = models.IntegerField()
    city_Rent = models.CharField()

    def __str__(self) -> str:
        return (self.type_Of_Item)