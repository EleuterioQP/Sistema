from django.db import models


class Compra_detalle(models.Model):

    autoconsumo = models.CharField(max_length=40, null=True, blank=True)
    destino = models.CharField(max_length=40, null=True, blank=True)
    lugar_comercializacion = models.CharField(
        max_length=40, null=True, blank=True)
    semilla = models.CharField(max_length=40, null=True, blank=True)

    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Compra_detalle"
        verbose_name_plural = "Compra_detalles"

        permissions = (
            ('list_compra_detalle', 'Can list compra_detalle'),
            ('get_compra_detalle', 'Can get compra_detalle'),
        )

    def __str__(self):
        return self.autoconsumo
