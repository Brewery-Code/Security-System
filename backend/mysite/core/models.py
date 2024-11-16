from django.db import models
from user.models import CustomUser


class Sensors(models.Model):
    name = models.CharField(max_length=50)
    sensor_name = models.CharField(max_length=50)
    sensor_value = models.FloatField(null=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='sensors')
