from django.http import HttpResponse

ROBOTS_TXT = """User-agent: *
Disallow: /admin/

Sitemap: https://www.marcsloan.com/sitemap.xml
"""

SITEMAP_XML = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.marcsloan.com/</loc></url>
</urlset>
"""


def robots_txt(request):
    return HttpResponse(ROBOTS_TXT, content_type='text/plain')


def sitemap_xml(request):
    return HttpResponse(SITEMAP_XML, content_type='application/xml')
