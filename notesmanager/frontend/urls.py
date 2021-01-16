from django.urls import path
from frontend import views

urlpatters = [
    path('', views.index)
]
