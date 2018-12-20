from django.db import models
from django.utils import timezone

class Rank(models.Model):
    score = models.IntegerField()

    def __str__(self):
        return str(self.score)
