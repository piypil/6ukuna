from django.shortcuts import render
from django.http import HttpResponse

def vuln_atacker(requset, *args, **kwargs):
    return render(requset, 'vulnTemplates/vulnPage.html', {})
