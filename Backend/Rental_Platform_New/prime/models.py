from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    city_To_Rent = models.CharField(max_length=50)
    phone_Number = models.BigIntegerField(unique=True)
    email = models.EmailField(unique=True)
    # by default parameters = username, password
    USERNAME_FIELD = 'phone_Number'
    REQUIRED_FIELDS = []

class Product(models.Model):
    product_ID = models.IntegerField()
    product_Image = models.ImageField()
    title = models.CharField(max_length=50)
    product_Price = models.DecimalField(max_digits=20, decimal_places=10)
    reviews = models.IntegerField()
    rating = models.DecimalField(max_digits=20, decimal_places=10)
    discount = models.DecimalField(max_digits=20, decimal_places=10)
    type = models.CharField(max_length=50)
    customer = models.ForeignKey(CustomUser, on_delete=models.CASCADE)