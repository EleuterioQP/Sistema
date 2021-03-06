# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-06-23 16:12
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Asociacion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('actividad', models.CharField(max_length=40)),
                ('numero_asociados', models.IntegerField(blank=True, null=True)),
                ('referencia_bancaria', models.TextField(blank=True, max_length=70, null=True)),
                ('referencias_comerciales', models.TextField(blank=True, max_length=70, null=True)),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name_plural': 'Asociacions',
                'verbose_name': 'Asociacion',
                'permissions': (('list_asociacion', 'Can list asociacion'), ('get_asociacion', 'Can get asociacion')),
            },
        ),
        migrations.CreateModel(
            name='Empresa',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=40)),
                ('direccion', models.CharField(blank=True, max_length=40, null=True)),
                ('email', models.CharField(blank=True, max_length=40, null=True)),
                ('facebook', models.CharField(blank=True, max_length=20, null=True)),
                ('pagina_web', models.CharField(blank=True, max_length=40, null=True)),
                ('pais', models.TextField(blank=True, max_length=70, null=True)),
                ('razon_social', models.IntegerField(blank=True, null=True)),
                ('ruc', models.IntegerField(blank=True, null=True)),
                ('telefono', models.IntegerField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('usuario', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Empresas',
                'verbose_name': 'Empresa',
                'permissions': (('list_empresa', 'Can list empresa'), ('get_empresa', 'Can get empresa')),
            },
        ),
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_cientifico', models.CharField(max_length=40)),
                ('presentaciones', models.CharField(blank=True, max_length=40, null=True)),
                ('disponibilidad', models.CharField(blank=True, max_length=40, null=True)),
                ('tiempo_vida', models.CharField(blank=True, max_length=20, null=True)),
                ('empaque', models.CharField(blank=True, max_length=40, null=True)),
                ('beneficios', models.TextField(blank=True, max_length=70, null=True)),
                ('cosecha', models.TextField(blank=True, max_length=70, null=True)),
                ('aplicaciones', models.TextField(blank=True, max_length=70, null=True)),
                ('zona_produccion', models.TextField(blank=True, max_length=70, null=True)),
                ('suministra', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('usuario', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Productos',
                'verbose_name': 'Producto',
                'permissions': (('list_producto', 'Can list producto'), ('get_producto', 'Can get producto')),
            },
        ),
        migrations.AddField(
            model_name='asociacion',
            name='empresa',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='topico2.Empresa'),
        ),
        migrations.AddField(
            model_name='asociacion',
            name='usuario',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
