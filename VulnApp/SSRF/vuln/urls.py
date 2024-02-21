from django.urls import path 
from .import views

urlpatterns = [
    path('', views.vuln_atacker, name='vuln_atacker')
]
