from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import User_Serializer, Register_Serializer, Login_Serializer
from django.db import IntegrityError

class Register_API(generics.GenericAPIView):
    serializer_class = Register_Serializer
    authentication_classes = []
    permission_classes = []

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        # username = serializer.validated_data.get('username')
        try:
            token, _ = AuthToken.objects.create(user)
        except IntegrityError:
            return Response({"username": ["A user with that username already exists."]}, status=400)

        return Response({
            "user" : User_Serializer(user, context=self.get_serializer_context()).data,
            "token" : token.digest
        })
    
class Login_API(generics.GenericAPIView):
    serializer_class = Login_Serializer
    authentication_classes = []
    permission_classes = []
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token, _ = AuthToken.objects.create(user)
        return Response({
            "user" : User_Serializer(user, context=self.get_serializer_context()).data,
            "token" : token.digest
        })
    
class User_API(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = User_Serializer

    def get_object(self):
        return self.request.user