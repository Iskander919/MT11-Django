from django.shortcuts import render, redirect
from .models import Artic

from django.views.generic import DetailView

def news_home(request):
    news = Artic.objects.order_by('-date')
    return render(request, 'news/news_home.html', {'news': news})


class NewsDetailView(DetailView):
    model = Artic
    template_name = 'news/details_view.html'
    context_object_name = 'article'

