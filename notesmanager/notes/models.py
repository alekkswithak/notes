from django.db import models


class Note(models.Model):
    question = models.CharField(max_length=128)
    answer = models.CharField(max_length=256)
    created_at = models.DateTimeField(auto_now_add=True)

