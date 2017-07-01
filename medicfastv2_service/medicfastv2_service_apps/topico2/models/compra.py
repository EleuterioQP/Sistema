from django.db import models

from medicfastv2_service_apps.topico2.models.empresa import Empresa
from medicfastv2_service_apps.topico2.models.compra_detalle import Compra_detalle
from ..enums import COMPRA_TIPO_CHOICE, MERCADO_LOCAL


class Compra(models.Model):

    nombre = models.CharField(max_length=40)
    cantidad = models.CharField(max_length=40)
    total = models.IntegerField(null=True, blank=True)

    compra_detalle = models.ForeignKey(Compra_detalle, blank=True, null=True)
    empresa = models.ForeignKey(Empresa, blank=True, null=True)
    tipo = models.CharField(
        max_length=50, choices=COMPRA_TIPO_CHOICE, default=MERCADO_LOCAL)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Compra"
        verbose_name_plural = "Compras"

        permissions = (
            ('list_compra', 'Can list compra'),
            ('get_compra', 'Can get compra'),
        )

    def __str__(self):
        return self.nombre
