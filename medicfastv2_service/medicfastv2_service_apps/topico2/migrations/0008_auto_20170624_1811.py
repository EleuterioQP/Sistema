# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-06-24 23:11
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('topico2', '0007_auto_20170624_1716'),
    ]

    operations = [
        migrations.RenameField(
            model_name='productor',
            old_name='Representante',
            new_name='representante',
        ),
    ]
