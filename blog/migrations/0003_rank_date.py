# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20181219_1224'),
    ]

    operations = [
        migrations.AddField(
            model_name='rank',
            name='date',
            field=models.DateTimeField(default=2),
            preserve_default=False,
        ),
    ]
