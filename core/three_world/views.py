from django.shortcuts import render

# Create your views here.
def three_setup(request):
    return render(request, "three_world/threejs_setup.html")

def three_glb_load(request):
    return render(request, "three_world/glb_load.html")