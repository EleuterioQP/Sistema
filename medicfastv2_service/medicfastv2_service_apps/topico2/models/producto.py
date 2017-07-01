from django.db import models
from medicfastv2_service_apps.auths.models.user import User


class Producto(models.Model):

    nombre_cientifico = models.CharField(max_length=40)
    presentaciones = models.CharField(max_length=40, null=True, blank=True)
    disponibilidad = models.CharField(max_length=40, null=True, blank=True)
    tiempo_vida = models.CharField(max_length=20, null=True, blank=True)
    empaque = models.CharField(max_length=40, null=True, blank=True)

    beneficios = models.TextField(max_length=70, null=True, blank=True)
    cosecha = models.TextField(max_length=70, null=True, blank=True)
    aplicaciones = models.TextField(max_length=70, null=True, blank=True)
    zona_produccion = models.TextField(max_length=70, null=True, blank=True)

    suministra = models.BooleanField(default=True)

    usuario = models.ForeignKey(User, blank=True, null=True)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Producto"
        verbose_name_plural = "Productos"

        permissions = (
            ('list_producto', 'Can list producto'),
            ('get_producto', 'Can get producto'),
        )

    def __str__(self):
        return self.nombre_cientifico
