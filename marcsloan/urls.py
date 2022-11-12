from django.contrib import admin
from django.urls import path
from django.urls import include, re_path as url
# from django.conf.urls import include

import frontend.urls

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^', include(frontend.urls)),

]
