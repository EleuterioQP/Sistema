from django.db import models


from ..enums import PRODUCTO_TIPO_CHOICE, QUINUA_PELADA


class Producto_agroindustria(models.Model):

    codigo = models.CharField(max_length=40)

    tipo = models.CharField(
        max_length=50, choices=PRODUCTO_TIPO_CHOICE, default=QUINUA_PELADA)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Producto_agroindustria"
        verbose_name_plural = "Producto_agroindustrias"

        permissions = (
            ('list_producto_agroindustria', 'Can list producto_agroindustria'),
            ('get_producto_agroindustria', 'Can get producto_agroindustria'),
        )

    def __str__(self):
        return self.codigo
