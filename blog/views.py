from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse
from django.utils import timezone
from .models import Rank

# Create your views here.
def main(request):
    json_serializer = serializers.get_serializer("json")()
    ranks = json_serializer.serialize(Rank.objects.all().order_by('-score')[:5], ensure_ascii=False)
    return render(request, 'main.html', {'ranks':ranks})

def game(request):
    return render(request, 'game.html')

def update(request):
    if request.is_ajax() and request.method == 'POST':
        _score = request.POST.get('score', None)
        rank = Rank.objects.create(score=_score)
        rank.save()
        message = 'update success'
    return HttpResponse(message)

def result(request):
    return render(request, 'result.html')
