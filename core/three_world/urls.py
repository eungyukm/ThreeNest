from django.urls import path
from .views import three_setup

urlpatterns = [
    path('three_setup/', three_setup, name='three_setup'),
]
