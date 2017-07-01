from django.db import models


class Variedad(models.Model):

    nombre = models.CharField(max_length=40)
    area = models.IntegerField(null=True, blank=True)
    cosechas = models.IntegerField(null=True, blank=True)
    production = models.IntegerField(null=True, blank=True)
    siembra = models.IntegerField(null=True, blank=True)
    superficie_perdida = models.IntegerField(null=True, blank=True)
    superficie_verde = models.IntegerField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Variedad"
        verbose_name_plural = "Variedads"

        permissions = (
            ('list_variedad', 'Can list variedad'),
            ('get_variedad', 'Can get variedad'),
        )

    def __str__(self):
        return self.nombre
