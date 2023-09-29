from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(["GET"])
def get_Data(request):
    person = {"name": "Valmik", "age": 19}
    return Response(person)
