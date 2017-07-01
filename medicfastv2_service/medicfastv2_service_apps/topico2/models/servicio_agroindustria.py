from django.db import models


from ..enums import SERVICIO_TIPO_CHOICE, EXPORTADOR_AGRICOLA


class Servicio_agroindustria(models.Model):

    codigo = models.CharField(max_length=40)

    tipo = models.CharField(
        max_length=50, choices=SERVICIO_TIPO_CHOICE, default=EXPORTADOR_AGRICOLA)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Servicio_agroindustria"
        verbose_name_plural = "Servicio_agroindustrias"

        permissions = (
            ('list_servicio_agroindustria', 'Can list servicio_agroindustria'),
            ('get_servicio_agroindustria', 'Can get servicio_agroindustria'),
        )

    def __str__(self):
        return self.codigo
