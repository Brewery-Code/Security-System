from django.urls import path
from .views import AvaliableSensorNames

urlpatterns = [
    path('', AvaliableSensorNames.as_view())
]