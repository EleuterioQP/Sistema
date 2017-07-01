from django.db import models
from medicfastv2_service_apps.auths.models.person import Person
from ..enums import REPRESENTANTE_TIPO_CHOICE, GERENTE_ADMINISTRATIVO


class Productor(models.Model):

    agencia_agraria = models.CharField(max_length=40)
    comunidad = models.CharField(max_length=40)
    ruc = models.IntegerField(null=True, blank=True)
    sector = models.CharField(max_length=40)
    representante = models.BooleanField(default=False)

    tipo = models.CharField(
        max_length=50, choices=REPRESENTANTE_TIPO_CHOICE, default=GERENTE_ADMINISTRATIVO)
    person = models.ForeignKey(Person, blank=True, null=True)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Productor"
        verbose_name_plural = "Productors"

        permissions = (
            ('list_productor', 'Can list productor'),
            ('get_productor', 'Can get productor'),
        )

    def __str__(self):
        return self.agencia_agraria
