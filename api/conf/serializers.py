from rest_framework import serializers
from rest_framework.authtoken.models import Token

from django.contrib.auth import get_user_model


class UserReadSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    class Meta:
        model = get_user_model()
        fields = "__all__"

    def get_name(self, obj):
        return obj.first_name + " " + obj.last_name


class TokenAndUserInfoSerializer(serializers.Serializer):
    auth_token = serializers.CharField(source="key")
    user = UserReadSerializer(read_only=True)

    class Meta:
        model = Token
        fields = ("auth_token", "auth_user_info")
