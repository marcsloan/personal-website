from django.contrib import admin
from django.urls import path
from django.urls import include, re_path as url
# from django.conf.urls import include

import frontend.urls
from marcsloan import seo

urlpatterns = [
    path('admin/', admin.site.urls),
    path('robots.txt', seo.robots_txt),
    path('sitemap.xml', seo.sitemap_xml),
    url(r'^', include(frontend.urls)),

]
