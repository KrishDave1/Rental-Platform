from django.db import models

# Create your models here.
class Office(models.Model):
    employee = models.CharField(max_length=30)
    department = models.CharField(max_length=100)