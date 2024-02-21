from django.core.exceptions import PermissionDenied

class FilterIp:
    def __init__(self, get_response):
        self.get_response = get_response
    
    def __call__(self, request):
        allowed_ip = ['127.0.0.1']
        ip = request.META.get('REMOTE_ADDR')
        if ip not in allowed_ip:
            raise PermissionDenied
        
        response = self.get_response(request)

        return response