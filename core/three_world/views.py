from django.shortcuts import render

# Create your views here.
def three_setup(request):
    return render(request, "three_world/threejs_setup.html")