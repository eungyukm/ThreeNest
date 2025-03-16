from django.urls import path
from .views import three_setup, three_glb_load

urlpatterns = [
    path('three_setup/', three_setup, name='three_setup'),
    path('three_glb_load/', three_glb_load, name='three_glb_load'),
]
