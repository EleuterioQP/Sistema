from django.db import models

from medicfastv2_service_apps.topico2.models.empresa import Empresa
from medicfastv2_service_apps.topico2.models.asociacion import Asociacion
from medicfastv2_service_apps.topico2.models.servicio_agroindustria import Servicio_agroindustria
from medicfastv2_service_apps.topico2.models.producto_agroindustria import Producto_agroindustria
from ..enums import CERTIFICACION_TIPO_CHOICE, ORGANICA


class Agroindustria(models.Model):

    capacidad_produccion = models.CharField(max_length=40)

    empresa = models.ForeignKey(Empresa, blank=True, null=True)
    asociacion = models.ForeignKey(Asociacion, blank=True, null=True)
    producto_agroindustria = models.ForeignKey(Producto_agroindustria, blank=True, null=True)
    servicio_agroindustria = models.ForeignKey(Servicio_agroindustria, blank=True, null=True)
    tipo = models.CharField(
        max_length=50, choices=CERTIFICACION_TIPO_CHOICE, default=ORGANICA)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Agroindustria"
        verbose_name_plural = "Agroindustrias"

        permissions = (
            ('list_agroindustria', 'Can list agroindustria'),
            ('get_agroindustria', 'Can get agroindustria'),
        )

    def __str__(self):
        return self.capacidad_produccion
