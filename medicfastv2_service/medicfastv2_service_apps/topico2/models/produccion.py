from django.db import models


from medicfastv2_service_apps.topico2.models.variedad import Variedad
from ..enums import PRODUCCION_TIPO_CHOICE, CONVENCIONAL


class Produccion(models.Model):

    nombre_certificadora = models.CharField(
        max_length=40, null=True, blank=True)
    area_cosechada = models.IntegerField(null=True, blank=True)
    area_perdida = models.IntegerField(null=True, blank=True)
    area_sembrada = models.IntegerField(null=True, blank=True)
    area_total_produccion = models.IntegerField(null=True, blank=True)
    area_total_terreno = models.IntegerField(null=True, blank=True)
    cetificacion_organica = models.BooleanField(default=True)

    variedad = models.ForeignKey(Variedad, blank=True, null=True)
    tipo = models.CharField(
        max_length=50, choices=PRODUCCION_TIPO_CHOICE, default=CONVENCIONAL)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Produccion"
        verbose_name_plural = "Produccions"

        permissions = (
            ('list_produccion', 'Can list produccion'),
            ('get_produccion', 'Can get produccion'),
        )

    def __str__(self):
        return self.nombre_certificadora
