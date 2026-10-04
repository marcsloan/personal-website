from django.http import HttpResponsePermanentRedirect


class ApexToWwwRedirectMiddleware:
    """Redirect requests for marcsloan.com to www.marcsloan.com."""

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.get_host().split(':')[0] == 'marcsloan.com':
            return HttpResponsePermanentRedirect('https://www.marcsloan.com' + request.get_full_path())
        return self.get_response(request)
