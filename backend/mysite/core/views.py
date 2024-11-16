from urllib import response
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Sensors


class AvaliableSensorNames(APIView):
    def get(self, request):
        avaliable_names = ['Датчик вогню', 'Датчик відстані', 'Датчик диму']
        return Response({"sensor_names": avaliable_names})

