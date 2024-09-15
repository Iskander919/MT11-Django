from django.urls import path
from . import views



urlpatterns = [
     path('', views.index, name = 'home'),
     path('syllabus/', views.syllabus, name = 'syllabus'),
     path('schedule/', views.schedule, name = 'schedule'),
     path('personalities/', views.personalities, name='personalities'),

]