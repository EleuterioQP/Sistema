from django.db import models
from medicfastv2_service_apps.auths.models.user import User
from medicfastv2_service_apps.topico2.models.empresa import Empresa
from medicfastv2_service_apps.topico2.models.produccion import Produccion
from medicfastv2_service_apps.topico2.models.productor import Productor
from medicfastv2_service_apps.topico2.models.producto import Producto


class Asociacion(models.Model):

    actividad = models.CharField(max_length=40)
    numero_asociados = models.IntegerField(
        null=True, blank=True)

    referencia_bancaria = models.TextField(
        max_length=70, null=True, blank=True)
    referencias_comerciales = models.TextField(
        max_length=70, null=True, blank=True)

    empresa = models.ForeignKey(Empresa, blank=True, null=True)
    productor = models.ForeignKey(Productor, blank=True, null=True)
    producto = models.ForeignKey(Producto, blank=True, null=True)
    produccion = models.ForeignKey(Produccion, blank=True, null=True)
    usuario = models.ForeignKey(User, blank=True, null=True)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Asociacion"
        verbose_name_plural = "Asociacions"

        permissions = (
            ('list_asociacion', 'Can list asociacion'),
            ('get_asociacion', 'Can get asociacion'),
        )

    def __str__(self):
        return self.actividad
