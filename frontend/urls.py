from django.urls import re_path as url
from django.views.generic.base import RedirectView

from frontend import views

# Only serve the React app on routes it actually renders. Anything else
# returns a real 404 so search engines don't index duplicate copies of the
# homepage under arbitrary paths.
urlpatterns = [
    url(r'^$', views.ReactView.as_view(), name='react'),
    url(r'^demo/$', views.ReactView.as_view(), name='demo'),
    url(r'^demo$', RedirectView.as_view(url='/demo/', permanent=True)),
    url(r'^favicon\.ico$', RedirectView.as_view(url='/static/img/favicon_io/favicon.ico', permanent=True)),
    url(r'^blog(?:/.*)?$', RedirectView.as_view(url='https://blog.marcsloan.com/', permanent=True)),
]
