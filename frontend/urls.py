from django.urls import re_path as url

from frontend import views

urlpatterns = [
    url(r'^.*', views.ReactView.as_view(), name='react'),
]
