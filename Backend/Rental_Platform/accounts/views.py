from django.shortcuts import render

# Create your views here.
def random_Page(request):
    return render(request=request, template_name="sample.html", context={"name" : "Valmik"})