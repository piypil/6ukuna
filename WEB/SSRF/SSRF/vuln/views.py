from django.shortcuts import render

def vuln_atacker(request):
    ip  =  request.META.get('REMOTE_ADDR')
    return render(request, 'ssrf.html', {'ip_address': ip})
