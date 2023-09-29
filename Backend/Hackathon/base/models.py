from django.db import models

# Create your models here.

# makemigrations - create changes and store in a file
# migrate - apply the pending changes created by makemigrations
class Room(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name