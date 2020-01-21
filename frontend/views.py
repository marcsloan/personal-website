import json

from django.conf import settings
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView

class ReactView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        return render(request, 'frontend/react.html', {
            'globals': json.dumps({
                'STATIC_URL': settings.STATIC_URL,
            }),
        })
