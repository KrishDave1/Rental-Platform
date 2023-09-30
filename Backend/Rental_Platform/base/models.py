from django.db import models

# Create your models here.
class Listing(models.Model):
    type_Of_Item = models.CharField(max_length=100)
    price = models.IntegerField()
    duration_Of_Rent = models.IntegerField()
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.type_Of_Item

class User(models.Model):
    name = models.CharField(max_length=200)
    city_Rent = models.CharField(max_length=50)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return (f"{self.user}'s Cart")