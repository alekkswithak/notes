from django.urls import path
from . import views


urlpatterns = [
    path('api/', views.NoteListCreate.as_view() ),
]